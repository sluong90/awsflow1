import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Amplify imports and config
import Amplify, { API } from 'aws-amplify'
import awsmobile from './src/aws-exports.js'

Amplify.configure(awsmobile)

export default class App extends React.Component {
    state = { people: [] }
    async componentDidMount() {
        const data = await API.get("awsflow", "http://192.168.200.209:3000/people")
        console.log(data, " FUUUCK")

        this.setState({ people: data.people })
    }

    render() {
        console.log(this.state.people, "THE ZAAAAAA")
        return (
            <View style={styles.container} className="App">

                {[].map((person, i) => (
                    <View key={i}><Text>{person.name}</Text>
                        <Text>{person.hair_color}</Text>
                    </View>
                ))}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

