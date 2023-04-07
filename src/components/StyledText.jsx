import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme"

const styles = StyleSheet.create({
    text:{
        fontSize: theme.fontSizes.body,
        color:theme.colors.textPrimary,
        fontFamily:theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold:{
        fontWeight:theme.fontWeights.bold
    },
    subHeading:{
        fontSize:themes.fontSizes.subHeading
    },
    colorPrimary:{
        color: theme.colors.textPrimary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    }
})

export default function StyledText ({children, color, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subHeading,
        fontWeight === "bold" && styles.bold,
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}