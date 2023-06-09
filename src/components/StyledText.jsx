import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme"

const styles = StyleSheet.create({
    text:{
        fontSize: theme.fontSizes.body,
        color:theme.colors.textPrimary,
        
        fontWeight: theme.fontWeights.normal
    },
    bold:{
        fontWeight:theme.fontWeights.bold
    },
    subHeading:{
        fontSize:theme.fontSizes.subHeading
    },
    colorPrimary:{
        color: theme.colors.textPrimary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    textAlignCenter:{
        textAlign: "center"
    }
})

export default function StyledText ({children, align, color, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        align === "center" && styles.textAlignCenter,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subHeading,
        fontWeight === "bold" && styles.bold,
        style
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}