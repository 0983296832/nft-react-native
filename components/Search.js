import React from 'react'
import { Image, TextInput, View } from 'react-native'
import { assets, SIZES } from '../constant'

const Search = ({ searchText, setSearchText }) => {
  return (
    <View style={{
      flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.small - 2,
    }}>
      <Image source={assets.search} resizeMode="contain" style={{ height: 20, width: 20, marginRight: SIZES.base }} />
      <TextInput
        placeholder="Search NFTs"
        placeholderTextColor="white"
        outlineColor="#ffffff"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ flex: 1, padding: "5px 10px" }} />
    </View>
  )
}

export default Search