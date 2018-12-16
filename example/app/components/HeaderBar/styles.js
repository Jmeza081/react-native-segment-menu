import { StyleSheet } from 'react-native';
import { palette } from '../../config/colors';

const styles = StyleSheet.create({
    barContainer: {
        height: 60,
        backgroundColor: palette.surface,
        justifyContent: 'center',
        shadowColor: palette.neutral.black,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
        zIndex: 1,
    },
    dataRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    logoText: {
        color: palette.neutral.white,
        fontFamily: 'Merriweather-BoldItalic',
    },
});

export { styles };
