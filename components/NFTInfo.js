import { View, Text, Image } from 'react-native'
import React from 'react'
import { FONTS, SIZES, COLORS } from "../constant"


const NFTInfo = ({ name, bids, creator, fontSize, fontSubSize }) => {
    return (
        <View>
            <View style={{ flexDirection: "row", marginTop: -25 }}>
                {bids.map((item, index) => {
                    return <Image key={index} source={item.image} resizeMode="contain" style={{ width: 48, height: 48, marginLeft: index == 0 ? 0 : -15 }} />
                })}
            </View>
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: fontSize,
                color: COLORS.primary,
                marginTop: 15
            }}>{name}</Text>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: fontSubSize,
                color: COLORS.primary,
            }}>by {creator}</Text>
        </View>
    )
}

export default NFTInfo