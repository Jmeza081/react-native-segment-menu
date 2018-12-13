import { StyleSheet, Dimensions } from 'react-native';
// TODO: This should come from else where. like common config
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    globalMenuContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    parentMenuContainer: {
        flexDirection: 'row',
        backgroundColor: '#000000',
        height: 80,
        paddingHorizontal: 10,
    },
    parentMenuColumnContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submenuContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    pointerRowContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
    },
    pointerSlotContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    roundedRectangle: {
        minHeight: 150,
        width: width,
        backgroundColor: '#262626',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
    },
    textMenuStyles: {
        color: '#FFFFFF',
        fontSize: 12,
        textAlign: 'center',
    },
    iconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 8,
    },
});

export { styles };
