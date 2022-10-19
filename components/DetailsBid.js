import React from "react";
import { View, Text, Image } from "react-native";

import NFTPrice from "./NFTPrice"
import { COLORS, SIZES, FONTS } from "../constant";

const DetailsBid = ({ bid }) => {
    console.log(bid);
    return (
        <View
            style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: SIZES.base,
                paddingHorizontal: SIZES.base,
            }}
            key={bid.id}
        >
            <Image
                source={bid.image}
                resizeMode="contain"
                style={{ width: 48, height: 48 }}
            />

            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    paddingHorizontal: SIZES.base,
                }}
            >
                <Text
                    style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SIZES.small,
                        color: COLORS.primary,
                    }}
                >
                    Bid placed by {bid.name}
                </Text>
                <Text
                    style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.small - 2,
                        color: COLORS.secondary,
                        marginTop: 3,
                    }}
                >
                    {bid.date}
                </Text>
            </View>

            <NFTPrice price={bid.price} />
        </View>
    );
};

export default DetailsBid;