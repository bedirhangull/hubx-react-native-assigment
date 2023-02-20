import * as React from 'react';
import { Component, ReactNode } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//utils for screen design
import { screenOptions } from '@utils'

//onboarindg pages
import GetStarted from '@pages/GetStarted/GetStarted';
import Onboarding from '@pages/Onboarding/Onboarding'

import PayWall from '@pages/PayWall/PayWall';
import { BottomBar } from '@components';

class Router extends Component {
    render(): ReactNode {
        return (
            <NavigationContainer>
               <Stack.Navigator screenOptions={screenOptions} initialRouteName="GetStarted">
                    <Stack.Screen name="GetStarted" component={GetStarted} />
                    <Stack.Screen name="Onboarding" component={Onboarding} />
                    <Stack.Screen name="PayWall" component={PayWall} />
                    <Stack.Screen name="BottomBar" component={BottomBar} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Router;