import React, { useEffect, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { FlatList } from 'react-native-web'
import { HomeHeader, NFTCard } from '../components'
import { NFTData } from '../constant'


const Home = ({ navigation }) => {
    const [data, setData] = useState(NFTData)
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        if (searchText !== "") {
            setData(NFTData.filter(item => item.name.toLowerCase().includes(searchText)))
        } else {
            setData(NFTData)
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