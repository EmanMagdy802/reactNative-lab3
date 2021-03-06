import React from 'react';
import profile from './profile'
import profile_details from './profile_details'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

export default function() {
    return (
        <StackNavigator screenOptions={{
            headerStyle: {
                height: 90,
                backgroundColor: "#912a3e",
            },
        }}>
            <StackScreen
            name="Profiles List"
            component={profile}
            options={{ 
               headerTitle: () => <Text style={styles.headerTitle}>Profiles List</Text>
            }}/>
            <StackScreen
            name="Profile Details"
            component={profile_details}
            options={( { navigation } ) => ({
                headerLeft: () => <Ionicons name="ios-arrow-back" 
                                            style={styles.backBtn}
                                            onPress={() => navigation.goBack()}/>,
                headerTitle: () => <Text style={styles.headerTitle}>Details</Text>
            })}/>
        </StackNavigator>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    backBtn: {
        color: "#fff",
        fontSize: 30,
        marginLeft: 20
    }
});