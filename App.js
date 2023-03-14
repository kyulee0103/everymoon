import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import {useEffect} from 'react'

SplashScreen.preventAutoHideAsync()

export default function App() {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hideAsync()
        }, 2500)
    }, [])

    return (
        <View style={styles.container}>
            <Text>Hey!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
