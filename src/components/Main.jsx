import React from "react";
import { Text, View } from "react-native";
import RepositoriesList from "./RepositoryList";
import AppBar from "./AppBar";
import { Switch, Route } from "react-native-web";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoriesList />
        </Route>
        <Route path="/singin" exact>
          <Text>En proceso</Text>
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
