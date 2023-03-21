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
import Birth from './src/Pages/Birth'
import Lastdate from './src/Pages/Lastdate'
import Remember from './src/Pages/Remember'
import Pastdate from './src/Pages/Pastdate'
import Symptom from './src/Pages/Symptom'
import Setting from './src/Pages/Setting'
import Finset from './src/Pages/Finset'

SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator()

export default function App() {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hideAsync()
        }, 2000)
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Agree" component={Agree} />
                <Stack.Screen name="Start" component={Welcome} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Calendar" component={Calendar} />
                <Stack.Screen name="Birth" component={Birth} />
                <Stack.Screen name="Lastdate" component={Lastdate} />
                <Stack.Screen name="Remember" component={Remember} />
                <Stack.Screen name="Pastdate" component={Pastdate} />
                <Stack.Screen name="Symptom" component={Symptom} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="Finset" component={Finset} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
