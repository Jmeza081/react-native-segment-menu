import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { palette } from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

export default class App extends Component {
    static propTypes = {
        recipeCardData: PropTypes.shape({
            media: PropTypes.string.isRequired,
            prepTimeMinutes: PropTypes.number.isRequired,
            recipeTitle: PropTypes.string.isRequired,
            recipeDescription: PropTypes.string.isRequired,
        }),
    };

    static defaultProps = {
        recipeCardData: {
            media:
                'https://images.unsplash.com/photo-1543363136-3fdb62e11be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
            prepTimeMinutes: 15,
            recipeTitle: '15 Yogurts that blow your socks off!',
            recipeDescription:
                'If you dont like these 15 recipes that were hand-picked by our staff, I will personally eat my hat!',
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            favorited: false,
            addedToMyFoods: false,
        };
    }

    toggleFavorited = () => {
        this.setState((prevState) => ({
            favorited: !prevState.favorited,
        }));

        this.myFavorites.rubberBand(1000);
    };

    toggleAddedToList = () => {
        this.setState((prevState) => ({
            addedToMyFoods: !prevState.addedToMyFoods,
        }));

        this.myFoods.rubberBand(1000);
    };

    render() {
        let { recipeCardData } = this.props;
        let { favorited, addedToMyFoods } = this.state;

        return (
            <View style={styles.imageCard}>
                <ImageBackground
                    source={{
                        uri: recipeCardData.media,
                    }}
                    style={styles.articleImage}
                >
                    <View style={styles.prepTimeBadge}>
                        <Text style={styles.prepTimeText}>
                            Prep-Time: {recipeCardData.prepTimeMinutes} mins
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.cardHeader}>
                    <Text style={styles.articleHeader}>{recipeCardData.recipeTitle}</Text>
                    <Text style={styles.articleSubHeader}>
                        {recipeCardData.recipeDescription}
                    </Text>
                </View>
                <View style={styles.actionArea}>
                    <TouchableWithoutFeedback onPress={this.toggleFavorited}>
                        <Animatable.View
                            ref={(ref) => (this.myFavorites = ref)}
                            style={styles.iconContainer}
                        >
                            <Icon
                                name={'heart'}
                                size={20}
                                color={favorited ? palette.accent : palette.midTone}
                            />
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={this.toggleAddedToList}
                        style={styles.iconContainer}
                    >
                        <Animatable.View
                            ref={(ref) => (this.myFoods = ref)}
                            style={styles.iconContainer}
                        >
                            <Icon
                                name={'silverware-fork-knife'}
                                size={20}
                                color={addedToMyFoods ? palette.accent : palette.midTone}
                            />
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}
