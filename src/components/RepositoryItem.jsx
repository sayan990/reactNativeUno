import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText"

const RepositoryStats = props =>{
    return(
        <View style={{flexDirection:"row", justifyContent: "space-around"}}>
            <View>
                <StyledText fontWeight="bold" >Stars:</StyledText>
                <StyledText >{prop.stargazersCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold">Forks:</StyledText>
                <StyledText >{prop.forksCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold">Review:</StyledText>
                <StyledText >{prop.reviewCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold">Rating:</StyledText>
                <StyledText >{prop.ratingAverage}</StyledText>
            </View>
        
        
        
        
        </View>
    )
}

const RepositoryItem = (prop) => (
    <View key={prop.id} style={styles.container}>
        <StyledText fontSize="subheading" fontWeight="bold">id: {prop.fullName}</StyledText>
        <StyledText >fullname: {prop.description}</StyledText>
        <StyledText >Lenguaje:{prop.language}</StyledText>
        <RepositoryStats {...props}/>
    </View>
)

export default RepositoryItem