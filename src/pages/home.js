import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
export default function Home({ navigation }) {
    return (
        <View>
            <Text style={style.Text}>WELCOME TO HOME SCREEN. FOR NOW THERE IS NO OPERATION IN HERE.STAY TUNED :) </Text>
        </View>
    );
}

const style = StyleSheet.create({
    Text: {
        fontSize: 15,
        color: "black",
        textAlign: 'center'




    }
});