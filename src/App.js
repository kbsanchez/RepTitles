import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  View,
  Tabs,
  TabItem,
  withAuthenticator,
} from "@aws-amplify/ui-react";

const App = ({ signOut }) => {

  return (
    <View className="App">
      <Heading level={1}>RepTitles: Reptile Document Generator</Heading>
        <Tabs
          spacing="relative"
          justifyContent="flex-end">
          <TabItem title="Reptiles">
            Reptiles content
          </TabItem>
          <TabItem title="Documents">
            Documents content
          </TabItem>
          <TabItem title="Transactions">
            Transaction history
          </TabItem>
          <TabItem title="Profile">
            Profile content
          </TabItem>
        </Tabs>
      <Button onClick={signOut} style={{marginTop: '10vh'}}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);