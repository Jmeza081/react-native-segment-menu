import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    StatusBar,
    ScrollView,
} from 'react-native';
import SegmentMenu from 'react-native-segment-menu';
import HeaderBar from './components/HeaderBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { palette } from './config/colors';
import RecipeCard from './components/RecipeCard/RecipeCard';
import dummyRecipes from './config/dummyCardData';

const BACKGROUND_IMAGE =
    'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSegmentMenu: false,
        };
    }

    getMenuTriggerComponent = (materialIconName, MenuName) => {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingBottom: 8,
                }}
            >
                <Icon name={materialIconName} size={25} color={palette.neutral.white} />
                <Text style={styles.menuTriggerText}>{MenuName}</Text>
            </View>
        );
    };

    toggleMenuVisibility = () => {
        if (this.state.showSegmentMenu) {
            this.segmentMenu.fadeOutUp(500).then(() => {
                this.setState({
                    showSegmentMenu: false,
                });
            });
        } else {
            this.setState({
                showSegmentMenu: true,
            });
        }
    };

    renderWrappedStatusBar = () => {
        return (
            <View style={styles.statusBar}>
                <StatusBar backgroundColor={palette.surface} barStyle="light-content" />
            </View>
        );
    };

    renderRecipeCards = () => {
        return dummyRecipes.map((cardData, index) => {
            return (
                <Animatable.View
                    key={index}
                    animation={'fadeInUpBig'}
                    delay={index * 100}
                >
                    <RecipeCard recipeCardData={cardData} />
                </Animatable.View>
            );
        });
    };

    render() {
        let { showSegmentMenu } = this.state;

        const myProjects = (
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={styles.menuTriggerText}>SubMenu</Text>
            </View>
        );

        const dataTest = [
            {
                menuTrigger: this.getMenuTriggerComponent('clock', '5 Minute Reads'),
                subMenuComponent: myProjects,
            },
            {
                menuTrigger: this.getMenuTriggerComponent('food-apple', 'Fruit Only'),
                subMenuComponent: myProjects,
            },
            {
                menuTrigger: this.getMenuTriggerComponent('food-croissant', 'Desserts'),
                subMenuComponent: myProjects,
            },
            {
                menuTrigger: this.getMenuTriggerComponent(
                    'bottle-wine',
                    'Great With Wine',
                ),
                subMenuComponent: myProjects,
            },
        ];

        return (
            <ImageBackground
                source={{
                    uri: BACKGROUND_IMAGE,
                }}
                opacity={0.5}
                style={styles.imageBackground}
            >
                {this.renderWrappedStatusBar()}
                <HeaderBar onSilverwarePress={this.toggleMenuVisibility} />
                {showSegmentMenu && (
                    <Animatable.View
                        animation={'fadeInDown'}
                        duration={500}
                        ref={(ref) => (this.segmentMenu = ref)}
                    >
                        <SegmentMenu
                            data={dataTest}
                            segmentPointerColor={palette.accent}
                            subMenuBackgroundColor={palette.surface}
                            parentMenuBackgroundColor={palette.surface}
                        />
                    </Animatable.View>
                )}
                <ScrollView
                    style={{ height: 900 }}
                    contentContainerStyle={{ alignItems: 'center', paddingTop: 20 }}
                >
                    {this.renderRecipeCards()}
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        backgroundColor: palette.neutral.black,
    },
    statusBar: {
        height: 20,
        backgroundColor: palette.surface,
        zIndex: 2,
    },
    menuTriggerText: {
        color: palette.neutral.white,
        fontSize: 10,
        paddingTop: 5,
        textAlign: 'center',
        fontFamily: 'Lora-Regular',
    },
});
