import { StyleSheet, Dimensions } from 'react-native';
import { palette } from '../../config/colors';

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    imageCard: {
        height: 300,
        width: width,
        paddingVertical: '1%',
    },
    articleImage: {
        flex: 3,
    },
    cardHeader: {
        flex: 1,
        backgroundColor: palette.surface,
    },
    actionArea: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: palette.surface,
    },
    iconContainer: {
        paddingHorizontal: '2%',
    },
    prepTimeBadge: {
        top: '6%',
        paddingVertical: 5,
        backgroundColor: palette.accent,
        maxWidth: 150,
        shadowColor: palette.neutral.black,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    prepTimeText: {
        paddingLeft: '5%',
        color: palette.neutral.white,
        fontFamily: 'Lora-Italic',
        fontWeight: 'bold',
    },
    articleHeader: {
        paddingTop: '2%',
        paddingLeft: '2%',
        color: palette.neutral.white,
        fontFamily: 'Merriweather-Bold',
        fontSize: 13,
    },
    articleSubHeader: {
        paddingTop: '1%',
        paddingLeft: '2%',
        color: palette.neutral.white,
        fontFamily: 'Merriweather-Regular',
        fontSize: 10,
    },
});

export { styles };
