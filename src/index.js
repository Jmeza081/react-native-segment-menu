import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

//TODO: Add prop type validation to this component.
const triangleHeight = 10;

export default class SegmentMenu extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        data: [], // Nothing for now.
    };

    constructor(props) {
        super(props);
        this.state = {
            childrenIndices: this.props.data.map((child, index) => index),
            activeIndex: -1, // Starting index is undefined or untoggled.
        };
    }

    /**
        Update active index used in updating which submenu is rendered.
    */
    updateIndex(newIndex) {
        // If the user tapped the same index, toggle menu instead.
        if (newIndex === this.state.activeIndex) {
            this.setState({ activeIndex: -1 });
        } else {
            this.setState({ activeIndex: newIndex });
        }
    }

    /**
        This is the section that actually renders the clickable options, clicking one of
        these options will cause the segment menu to render.
    */
    renderParentMenu() {
        // Go through every segment child and get its title for rending parent menu opts.
        const menuOptions = this.props.data.map((child, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => this.updateIndex(index)}
                    style={styles.parentMenuColumnContainer}
                >
                    <View style={styles.iconContainer}>
                        <Text style={styles.textMenuStyles}>(Icon)</Text>
                    </View>

                    <Text style={styles.textMenuStyles}>{child.id}</Text>
                </TouchableOpacity>
            );
        });

        return <View style={styles.parentMenuContainer}>{menuOptions}</View>;
    }

    /**
        This is the segment sub menu that points to the parent menu options depending on
        the active index of the component.
    */
    renderPointer() {
        const { childrenIndices, activeIndex } = this.state;

        // Definition of triangle shape using CSS shape styling tactics.
        const triangleStyling = {
            triangle: {
                borderLeftWidth: triangleHeight,
                borderLeftColor: 'transparent',

                borderRightWidth: triangleHeight,
                borderRightColor: 'transparent',

                borderBottomWidth: triangleHeight,
                borderBottomColor: '#262626',
            },
        };

        // Pointer Definition, used to define which slot is active.
        const pointer = <View style={triangleStyling.triangle} />;

        /**
            Slots in which the pointer can be rendered. only one of these slots will
            render the triangle pointer in it (the active index)
        **/
        const slots = childrenIndices.map((index) => (
            <View key={index} style={styles.pointerSlotContainer}>
                {index === activeIndex && pointer}
            </View>
        ));

        /**
            Render the row of slots with the appropriate slot being filled.
        **/
        return <View style={styles.pointerRowContainer}>{slots}</View>;
    }

    /**
    Render the segment submenu content with active pointer.
    */
    renderActiveSegment() {
        const { activeIndex } = this.state;
        const { data } = this.props;

        // Define dynamic positioning based on props passed in.
        const dynamicStyling = {
            submenuPositioning: {
                top: -triangleHeight,
            },
        };

        if (activeIndex < 0) {
            return;
        }

        return (
            /* Segment Sub-menu flush against parent menu. */
            <Animatable.View
                animation="bounceIn"
                duration={500}
                style={[styles.submenuContainer, dynamicStyling.submenuPositioning]}
            >
                {this.renderPointer()}
                <View style={styles.roundedRectangle}>
                    {/*Render user defined sub-menu content*/}
                    {data[activeIndex].subMenuComponent}
                </View>
            </Animatable.View>
        );
    }

    render() {
        return (
            <View style={styles.globalMenuContainer}>
                {this.renderParentMenu()}
                {this.renderActiveSegment()}
            </View>
        );
    }
}
