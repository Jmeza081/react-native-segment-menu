/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    StatusBar,
} from 'react-native';
import SegmentMenu from 'react-native-segment-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { palette } from './config/colors';

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
                        'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                }}
                opacity={0.5}
                style={[{ flex: 1 }, { backgroundColor: 'black' }]}
            >
                <View style={{ height: 20, backgroundColor: palette.surface }}>
                    <StatusBar backgroundColor="blue" barStyle="light-content" />
                </View>
                <View
                    style={{
                        height: 60,
                        backgroundColor: palette.surface,
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginHorizontal: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: palette.neutral.white,
                                fontFamily: 'Merriweather-BoldItalic',
                            }}
                        >
                            Foodinary
                        </Text>
                        <Icon
                            name={'account-circle'}
                            color={palette.neutral.white}
                            size={25}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
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
