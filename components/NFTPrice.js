import { Image, Text, View } from "react-native"
import { assets } from "../constant"

const NFTPrice = ({ price, marginTop }) => {
    return <View style={{ flexDirection: "row", gap: 5, marginTop: marginTop }}>
        <Image source={assets.eth} style={{ width: 20, height: 20 }} />
        <Text>{price}</Text>
    </View>
}
export default NFTPrice