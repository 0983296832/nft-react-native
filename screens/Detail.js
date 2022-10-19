import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { CircleBtn, RectBtn } from '../components/Button';
import { assets, SIZES, FONTS, COLORS } from '../constant';
import { useNavigation } from '@react-navigation/native';
import { Ending, NFTInfo, NFTPrice, DetailsBid } from '../components';

const Detail = ({ route }) => {
    const { data } = route.params;
    const navigation = useNavigation()
    const [showLess, setShowLess] = useState(true)

    const handleText = () => {
        if (showLess) {
            return data.description.slice(0, 100)
        } else {
            return data.description
        }
    }

    const handlePress = () => {
        navigation.navigate("Home")
    }
    console.log(data);
    return (
        <View style={{ width: "100%" }}>
            <Image source={data.image} style={{ width: "100%", height: 370 }} resizeMode="cover" />
            <CircleBtn left={10} top={10} icon={assets.left} handlePress={handlePress} />
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ alignItems: "start", justifyContent: "space-between", flexDirection: "row" }}>
                    <NFTInfo name={data.name} bids={data.bids} creator={data.creator} fontSize={SIZES.extraLarge} fontSubSize={SIZES.medium} />
                    <View style={{ alignItems: "flex-end" }}>
                        <Ending />
                        <NFTPrice price={data.price} />
                    </View>
                </View>
                <Text
                    style={{
                        fontSize: SIZES.font,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                        marginTop: SIZES.extraLarge * 1.5
                    }}
                >Description</Text>
                <Text style={{
                    color: COLORS.secondary,
                    fontSize: SIZES.small,
                    fontFamily: FONTS.regular,
                    lineHeight: SIZES.large,
                    marginTop: SIZES.base,
                }}>
                    {handleText()}
                    {showLess && data.description.length > 100 ? " ..." : ""}
                    <Text style={{
                        color: COLORS.primary,
                        fontSize: SIZES.small,
                        fontFamily: FONTS.semiBold,
                    }}
                        onPress={() => setShowLess(!showLess)}
                    >{showLess ? "Read More" : "Show Less"}</Text>
                </Text>

                <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                    marginTop: SIZES.extraLarge * 1.5,
                }}>Current bids</Text>
                <View style={{ padding: 10 }}>
                    {
                        data.bids.map((bid, index) => {
                            return <DetailsBid bid={bid} key={index} />
                        })
                    }
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
                    <RectBtn minWidth={150}
                        fontSize={SIZES.font} /></View>

            </View>

        </View>
    )
}

export default Detail