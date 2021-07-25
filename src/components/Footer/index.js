import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Shoes from '../Shoes';

export default function Footer() {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR.</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/1.png')} price="R$110,90" onClick={() => navigation.navigate('Detail')}>
                            Nike Air Max Dia
                        </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/5.png')} price="R$140,90" onClick={() => navigation.navigate('Detail')}>
                            Nike Air Max AD
                        </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/3.png')} price="R$750,90" onClick={() => navigation.navigate('Detail')}>
                            Nike Air Max 2sd
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})