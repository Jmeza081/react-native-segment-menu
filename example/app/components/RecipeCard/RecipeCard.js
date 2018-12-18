import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const RecipeCard = (props) => {
    return (
        <View style={styles.imageCard}>
            <ImageBackground
                source={{
                    uri:
                        'https://images.unsplash.com/photo-1543363136-3fdb62e11be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
                }}
                style={styles.articleImage}
            >
                <View style={styles.prepTimeBadge}>
                    <Text>PrepTime Badge</Text>
                </View>
            </ImageBackground>
            <View style={styles.cardHeader}>
                <Text>15 Yogurts that blow your socks off!</Text>
                <Text>
                    If you dont like these 15 recipes that were hand-picked by our staff,
                    I will personally eat my hat!
                </Text>
            </View>
            <View style={styles.actionArea}>
                <Text>Fav</Text>
                <Text>Add</Text>
            </View>
        </View>
    );
};
RecipeCard.propTypes = {};

RecipeCard.defaultProps = {};

export default RecipeCard;
