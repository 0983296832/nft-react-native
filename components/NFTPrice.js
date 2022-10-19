import { View, Image, Text } from "react-native"
import { assets } from "../constant"

const NFTPrice = ({ price }) => {
    return <View style={{ flexDirection: "row", gap: 5, marginTop: 25 }}>
        <Image source={assets.eth} style={{ width: 20, height: 20 }} />
        <Text>{price}</Text>
    </View>
}
export default NFTPrice