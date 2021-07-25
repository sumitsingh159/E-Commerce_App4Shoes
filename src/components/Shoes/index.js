import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const nameMaxSize = 18;

export default function Shoes(props) {

    function filterDesc(desc) {
        if (desc.length < nameMaxSize ){
            return desc;
        } else {
            return `${desc.substring(0, nameMaxSize)}...`
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image
                source={props.img}
                styles={styles.shoesImg}
            />
            <Text style={styles.shoesText}>
                {filterDesc(props.children)}
            </Text>
            <View opacity={0.4}>
                <Text style={styles.shoesText}>
                    {props.price}
                </Text>
            </View>
            <Text>Shoes</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImg: {
        width: 175,
        height: 175
    },
    shoesText: {
        fontSize: 16
    }
});