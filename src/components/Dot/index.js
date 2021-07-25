import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';

export default function Dot( props ) {
    if (props.selected === true) {
        return (
            <View>
                <TouchableOpacity style={[styles.container, styles.selected,{ backgroundColor: props.color } ]} onPress={() => props.handleColor(props.color)}/>
            </View>
            );
        } else {
            return (
                <View>
                    <TouchableOpacity style={[styles.container, { backgroundColor: props.color } ]} onPress={() => props.handleColor(props.color)}/>
                </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.050,
        height: Dimensions.get('window').width * 0.050,
        borderRadius: Dimensions.get('window').width * 0.050 / 2,
        marginHorizontal: '5.5%',
        elevation: 5,
        alignSelf: 'center',
    },
    selected: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        borderRadius: Dimensions.get('window').width * 0.1 / 2,
        marginHorizontal: '5.5%',
        alignSelf: 'center',
        elevation: 7,
    }
})