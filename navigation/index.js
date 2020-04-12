import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import post_navigator from '../components/post_navigator';
import profile_navigator from '../components/profile_navigator';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();

export default function () {

    return (
        <NavigationContainer>
            <TabNavigator tabBarOptions= {{
                activeTintColor: "#fff",
                labelStyle: {
                    fontSize: 33,
                    marginBottom: 4
                },
                style: {backgroundColor: "#912a3e"}
                }}>
                <TabScreen 
                    name="Posts"
                    component={post_navigator}
                />
                <TabScreen name="Profiles" component={profile_navigator} />
            </TabNavigator>
        </NavigationContainer>
    );
}