import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BusinessUserList } from "./businessUser/BusinessUserList";
import { BusinessUserCreate } from "./businessUser/BusinessUserCreate";
import { BusinessUserEdit } from "./businessUser/BusinessUserEdit";
import { BusinessUserShow } from "./businessUser/BusinessUserShow";
import { CustomerUserList } from "./customerUser/CustomerUserList";
import { CustomerUserCreate } from "./customerUser/CustomerUserCreate";
import { CustomerUserEdit } from "./customerUser/CustomerUserEdit";
import { CustomerUserShow } from "./customerUser/CustomerUserShow";
import { OfferList } from "./offer/OfferList";
import { OfferCreate } from "./offer/OfferCreate";
import { OfferEdit } from "./offer/OfferEdit";
import { OfferShow } from "./offer/OfferShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { RewardPointsList } from "./rewardPoints/RewardPointsList";
import { RewardPointsCreate } from "./rewardPoints/RewardPointsCreate";
import { RewardPointsEdit } from "./rewardPoints/RewardPointsEdit";
import { RewardPointsShow } from "./rewardPoints/RewardPointsShow";
import { UserFeedbackList } from "./userFeedback/UserFeedbackList";
import { UserFeedbackCreate } from "./userFeedback/UserFeedbackCreate";
import { UserFeedbackEdit } from "./userFeedback/UserFeedbackEdit";
import { UserFeedbackShow } from "./userFeedback/UserFeedbackShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"iFound"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BusinessUser"
          list={BusinessUserList}
          edit={BusinessUserEdit}
          create={BusinessUserCreate}
          show={BusinessUserShow}
        />
        <Resource
          name="CustomerUser"
          list={CustomerUserList}
          edit={CustomerUserEdit}
          create={CustomerUserCreate}
          show={CustomerUserShow}
        />
        <Resource
          name="Offer"
          list={OfferList}
          edit={OfferEdit}
          create={OfferCreate}
          show={OfferShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="RewardPoints"
          list={RewardPointsList}
          edit={RewardPointsEdit}
          create={RewardPointsCreate}
          show={RewardPointsShow}
        />
        <Resource
          name="UserFeedback"
          list={UserFeedbackList}
          edit={UserFeedbackEdit}
          create={UserFeedbackCreate}
          show={UserFeedbackShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
