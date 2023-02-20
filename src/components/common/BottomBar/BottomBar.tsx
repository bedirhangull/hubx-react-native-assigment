import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomBarButton } from '@components'
import { BottomBarIcon } from './style'

const { Navigator } = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

import { screenOptions } from '@utils'

//pages
import Home from '@pages/Home/Home';
import Diagnose from '@pages/Diagnose/Diagnose';
import MyGarden from '@pages/MyGarden/MyGarden';
import Profile from '@pages/Profile/Profile';
import Scan from '@pages/Scan/Scan';

import { garden, profile, health, home } from '@assets'

const BottomBar = ({ navigation }) => {

    const { buttonContainer } = styles;

    return (
        <Navigator initialRouteName='Home' screenOptions={screenOptions} >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (<BottomBarIcon source={home} />),
            }} />
            <Tab.Screen name="Diagnose" component={Diagnose} options={{
                tabBarIcon: ({ focused }) => (<BottomBarIcon source={health} />),
            }} />
            <Tab.Screen name="Scan" component={Scan} options={{
                tabBarButton: props => (<BottomBarButton />)
            }} />
            <Tab.Screen name="MyGarden" component={MyGarden} options={{
                tabBarIcon: ({ focused }) => (<BottomBarIcon source={garden} />),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (<BottomBarIcon source={profile} />),
            }} />
        </Navigator>
    )
}

const styles = {
    buttonContainer : {
        backgroundColor: 'black',
        top: -32,
        height: 64,
        width: 64,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default BottomBar;