import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import {useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Agree from './src/Pages/Agree'
import Welcome from './src/Pages/Welcome'
import Main from './src/Pages/Main'
import Calendar from './src/Pages/Calendar'

SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator()

export default function App() {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hideAsync()
        }, 2000)
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Agree" component={Agree} />
                <Stack.Screen name="Start" component={Welcome} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Calendar" component={Calendar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
