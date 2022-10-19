import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constant'


export const CircleBtn = ({ icon, handlePress, ...props }) => {
    return <TouchableOpacity style={{
        height: 40,
        width: 40,
        borderRadius: "100%",
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        outlineStyle: 'none',
        ...SHADOWS.light,
        ...props,
    }}
        onPress={handlePress}
    >
        <Image source={icon} resizeMode="contain" style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
}

export const RectBtn = ({ minWidth, fontSize, handlePress, ...props }) => {
    return <TouchableOpacity style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        outlineStyle: 'none',
        minWidth: minWidth
    }}
        onPress={handlePress}
    >
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: fontSize,
            color: COLORS.white,
            textAlign: "center",
        }}> Place a bid</Text>
    </TouchableOpacity>
}
