import React from "react";
import { Text, FlatList } from "react-native";
import repositories from "../data/respoitories.js"
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoriesList = () => {
    return(
        <FlatList
        data={repositories}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({repo}) =>(
            <RepositoryItem {...repo}/>
            )}/>   
    )
}

export default RepositoriesList