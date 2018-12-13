import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const Segment = (props) => {
    return <View style={styles.roundedRectangle}>{props.children}</View>;
};

export default Segment;
