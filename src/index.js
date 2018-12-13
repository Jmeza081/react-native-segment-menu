import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';

const Test = (props) => {
    return (
        <View>
            <Text>Hello World</Text>
        </View>
    );
};
Test.propTypes = {};

Test.defaultProps = {};

export default Test;
