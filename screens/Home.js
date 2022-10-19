import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HomeHeader, NFTCard } from '../components'
import { assets } from '../constant'
import { FlatList } from 'react-native-web'
import { NFTData } from "../constant"


const Home = ({ navigation }) => {
    const [data, setData] = useState(NFTData)
    const [searchText, setSearchText] = useState()

    useEffect(() => {
        if (searchText) {
            setData(data.filter(item => item.name.toLowerCase().includes(searchText)))
        } else {
            setData(data)
        }
    }, [searchText])

    return (
        <SafeAreaView>
            {/* <Button onPress={() => navigation.navigate("Detail", { hi: "hello" })} /> */}
            <HomeHeader searchText={searchText} setSearchText={setSearchText} />
            <View style={{ marginTop: -100 }}>
                <FlatList
                    data={data}
                    renderItem={(item) => <NFTCard data={item.item} />}
                    keyExtractor={item => item.id}
                />
            </View>

        </SafeAreaView>
    )
}

export default Home