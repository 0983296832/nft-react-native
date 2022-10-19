import { View, Text } from 'react-native'
import React from 'react'
import { SIZES, SHADOWS, COLORS, FONTS } from '../constant'

const Ending = () => {
    return (
        <View>
            <View style={{
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.base,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                justifyContent: "center",
                alignItems: "center",
                ...SHADOWS.light,
                elevation: 1,
                marginTop: -25
            }}>
                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.primary,
                }}>Ending in</Text>
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary,
                }}>12h 30m</Text>
            </View>
        </View>
    )
}

export default Ending