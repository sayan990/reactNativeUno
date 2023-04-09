import React from "react";
import { View, StyleSheet, ScrollView} from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants"
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({active, children , to}) => {
    const {pathName} = useLocation()

    const active = pathName === to

    const textStyle= [
        style.text,
        active && style.active
    ]
    return(
        <Link to={to}>
            <StyledText fontWeight="bold" style={textStyle}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {

    return(
        <View style={style.appBar}>
            <ScrollView horizontal style={style.scroll}>
            <AppBarTab active={true} to="/">Repositorios</AppBarTab>
            <AppBarTab  to="/singin">Sing in</AppBarTab>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    appBar:{
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft:10,
        flexDirection: "row",
    },
    text:{
        color:theme.appBar.textSecondary,
        paddingHorizontal: 10,
    },
    scroll:{
        paddingBottom:15,
    },
    active:{
        color:theme.appBar.textPrimary,
    }
})

export default AppBar