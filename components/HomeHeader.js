import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { assets, COLORS, FONTS, SIZES, } from "../constant"
import Search from './Search'

const HomeHeader = ({ searchText, setSearchText }) => {
    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font,

        }}>
            <View style={styles.container}>
                <View>
                    <Image source={assets.logo} style={styles.logo} resizeMode="contain" />
                    <View style={styles.greeting}>
                        <Text style={{
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.small,
                            color: COLORS.white,
                        }}>Hello Piter Pen 👋</Text>
                        <Text style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.large,
                            color: COLORS.white,
                            marginTop: SIZES.base / 2,
                        }}>Let’s find masterpiece Art</Text>
                    </View>
                </View>
                <View style={{ position: "relative" }}>
                    <Image source={assets.person01} resizeMode="contain" style={styles.userImg} />
                    <Image source={assets.badge} resizeMode="contain" style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: 15,
                        height: 15
                    }} />
                </View>
            </View>
            <View style={styles.search}>
                <Search searchText={searchText} setSearchText={setSearchText} />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    logo: {
        height: 25,
        width: 90,
        marginTop: 10
    },
    greeting: {
        marginTop: 20
    },
    userImg: {
        width: 45,
        height: 45
    },
    search: {
        marginTop: 25,
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        width: "100%",
        marginBottom: 100
    }
})