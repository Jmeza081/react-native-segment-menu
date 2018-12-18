import { StyleSheet, Dimensions } from 'react-native';
import { palette } from '../../config/colors';

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    imageCard: {
        height: 300,
        width: width,
    },
    articleImage: {
        flex: 3,
    },
    cardHeader: {
        flex: 1,
        backgroundColor: 'red',
    },
    actionArea: {
        backgroundColor: 'blue',
    },
    prepTimeBadge: {
        backgroundColor: palette.accent,
        maxWidth: 150,
        shadowColor: palette.neutral.black,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
});

export { styles };
