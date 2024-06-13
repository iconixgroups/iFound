import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CustomerUserController } from "../customerUser.controller";
import { CustomerUserService } from "../customerUser.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  city: "exampleCity",
  createdAt: new Date(),
  email: "exampleEmail",
  fullName: "exampleFullName",
  id: "exampleId",
  phoneNumber: "examplePhoneNumber",
  rewardPoints: 42,
  state: "exampleState",
  street: "exampleStreet",
  updatedAt: new Date(),
  walletBalance: 42.42,
  zipCode: 42,
};
const CREATE_RESULT = {
  city: "exampleCity",
  createdAt: new Date(),
  email: "exampleEmail",
  fullName: "exampleFullName",
  id: "exampleId",
  phoneNumber: "examplePhoneNumber",
  rewardPoints: 42,
  state: "exampleState",
  street: "exampleStreet",
  updatedAt: new Date(),
  walletBalance: 42.42,
  zipCode: 42,
};
const FIND_MANY_RESULT = [
  {
    city: "exampleCity",
    createdAt: new Date(),
    email: "exampleEmail",
    fullName: "exampleFullName",
    id: "exampleId",
    phoneNumber: "examplePhoneNumber",
    rewardPoints: 42,
    state: "exampleState",
    street: "exampleStreet",
    updatedAt: new Date(),
    walletBalance: 42.42,
    zipCode: 42,
  },
];
const FIND_ONE_RESULT = {
  city: "exampleCity",
  createdAt: new Date(),
  email: "exampleEmail",
  fullName: "exampleFullName",
  id: "exampleId",
  phoneNumber: "examplePhoneNumber",
  rewardPoints: 42,
  state: "exampleState",
  street: "exampleStreet",
  updatedAt: new Date(),
  walletBalance: 42.42,
  zipCode: 42,
};

const service = {
  createCustomerUser() {
    return CREATE_RESULT;
  },
  customerUsers: () => FIND_MANY_RESULT,
  customerUser: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("CustomerUser", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CustomerUserService,
          useValue: service,
        },
      ],
      controllers: [CustomerUserController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /customerUsers", async () => {
    await request(app.getHttpServer())
      .post("/customerUsers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /customerUsers", async () => {
    await request(app.getHttpServer())
      .get("/customerUsers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /customerUsers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customerUsers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /customerUsers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customerUsers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /customerUsers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/customerUsers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/customerUsers")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
