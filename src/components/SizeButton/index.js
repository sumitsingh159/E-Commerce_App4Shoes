import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SizeButton( props ) {
    if ( props.children == props.shoeSize ) {
        return (
            <TouchableOpacity style={[styles.container, { backgroundColor: '#17181a' } ]} onPress={() => props.handleSize(props.children)}>
                <Text style={[styles.text, { color: '#FFF'} ]}>
                    {props.children}
                </Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity style={[styles.container, { backgroundColor: props.bgColor || '#FFF' } ]} onPress={() => props.handleSize(props.children)}>
                <Text style={[styles.text, { color: props.color || '#DDD'} ]}>
                    {props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#E6E6E6',
        borderWidth: 3,
        marginHorizontal: 10
    },
    text: {
        color: '#FFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18
    }
})