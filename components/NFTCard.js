import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Ending, NFTInfo, NFTPrice } from "../components"
import { assets, COLORS, SHADOWS, SIZES } from '../constant'
import { CircleBtn, RectBtn } from './Button'

const NFTCard = ({ data }) => {
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate("Detail", { data })
    }

    return (
        <View style={styles.container}>
            <View style={{
                width: "100%",
                height: 250,
            }}>
                <Image source={data.image} resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }} />
            </View>
            <CircleBtn right={10} top={10} icon={assets.heart} />
            <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, width: "100%", alignItems: "start", justifyContent: "space-between" }}>
                <View>
                    <NFTInfo name={data.name} bids={data.bids} creator={data.creator} fontSize={SIZES.large} fontSubSize={SIZES.small} />

                    <NFTPrice price={data.price} marginTop={25} />
                </View>
                <View>
                    <Ending />
                    <View style={{ marginTop: 60, marginBottom: 15 }}>
                        <RectBtn minWidth={120}
                            fontSize={SIZES.font}
                            handlePress={handlePress} />
                    </View>
                </View>
            </View>

        </View >
    )
}


export default NFTCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
    }
})