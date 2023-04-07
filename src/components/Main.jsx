import React from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants"
import RepositoriesList from "./RepositoryList";

const Main = () => {
    return(
        <View style={{marginTop:Constants.statusBarHeight, flexGrow:1}}>
            <Text>Rate Repository AppLication</Text>
            <RepositoriesList/>
        </View>
    )
}

export default Main