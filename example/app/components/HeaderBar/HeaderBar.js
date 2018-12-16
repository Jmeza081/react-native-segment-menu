import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { palette } from '../../config/colors';

const HeaderBar = (props) => {
    let { onSilverwarePress } = props;

    return (
        <View style={styles.barContainer}>
            <View style={styles.dataRowContainer}>
                <Text style={styles.logoText}>MyFoodApp</Text>
                <TouchableOpacity onPress={onSilverwarePress}>
                    <Icon name={'silverware'} color={palette.neutral.white} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

HeaderBar.propTypes = {
    onSilverwarePress: PropTypes.func.isRequired,
};

HeaderBar.defaultProps = {
    onSilverwarePress: () => {
        console.log('Silverware Button Pressed!');
    },
};

export default HeaderBar;
