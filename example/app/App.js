/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import SegmentMenu from 'react-native-segment-menu';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        const myProjects = (
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        bottom: 20,
                    }}
                >
                    <Text style={{ color: 'white' }}>My Projects</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                        }}
                    >
                        <Text style={{ color: 'white', padding: 5 }}>shopping cart</Text>
                        <Text style={{ color: 'white', padding: 5 }}>Submissions</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                        }}
                    >
                        <Text style={{ color: 'white', padding: 5 }}>shopping</Text>
                        <Text style={{ color: 'white', padding: 5 }}>Submissions</Text>
                    </View>
                </View>
            </View>
        );

        const dataTest = [
            { id: 'Submit New', icon: 'music', subMenuComponent: myProjects },
            {
                id: 'My Account',
                icon: 'user',
                subMenuComponent: <Text style={{ color: 'white' }}>Test2</Text>,
            },
            {
                id: 'My Projects',
                icon: 'inbox',
                subMenuComponent: <Text style={{ color: 'white' }}>Test3</Text>,
            },
            {
                id: 'View Directos',
                icon: 'video',
                subMenuComponent: <Text style={{ color: 'white' }}>Test4</Text>,
            },
        ];

        return (
            <ImageBackground
                source={{
                    uri:
                        'https://images.unsplash.com/photo-1508881598441-324f3974994b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2aef1e2f3895c40e891654ae51f9c1e3&auto=format&fit=crop&w=1950&q=80',
                }}
                style={[{ flex: 1 }, { backgroundColor: 'black' }]}
            >
                <View style={{ flexDirection: 'column', alignItems: 'center', top: 100 }}>
                    <SegmentMenu data={dataTest} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
