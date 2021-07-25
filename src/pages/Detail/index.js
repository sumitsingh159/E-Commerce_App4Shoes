import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInputBase } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

export default function Detail({ navigation }) {
    const route = useRoute();
    const params = route.params;

    const shoeId = params.id;
    let [selectedSize, setSelectedSize] = useState('39');
    let [selectedColor, setSelectedColor] = useState('#000');

    let shoes = {
        id: '123',
        name: 'Nike Downshifter 10',
        price: '280,90',
        sizes: [37, 39, 40, 42],
        colors: ['#2379f4', '#fb6e53', '#DDD', '#000'],
        description: 'Lorem ipslumo oasokd asidinnw daso doa dojie idmwje b99ane asdwd iasj dieaid e i a',
        material: 'Mesh',
        categorie: 'Run',
        manFilter: false,
        imgSrc: '../../assets/detail.png'
    };

    useEffect(() => { }, [selectedSize]);

    function handleSize(chosedSize) {
        setSelectedSize(chosedSize);
    }

    function handleColor(chosedColor) {
        setSelectedColor(chosedColor);
    }

    return (
        <ScrollView>
            <Image
                source={require('../../assets/detail.png')}
                style={styles.image}
                resizeMode="cover"
            />

            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>R$ {shoes.price}</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30 }]}>{shoes.name}</Text>
                </View>

                <View style={styles.dotContainer}>
                    {shoes.colors.map(color => {
                        return (
                            <Dot key={color} color={color} selected={selectedColor == color ? true : false} handleColor={handleColor} />
                        )
                    })}
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {shoes.sizes.map(size => {
                            return (
                                <SizeButton key={size} selected={selectedSize == size ? true : false} shoeSize={selectedSize} handleSize={handleSize}>{size}</SizeButton>
                            )
                        })}
                    </ScrollView>
                </View>

                <View>
                    <Text style={styles.textTitle}>
                        {shoes.name}
                    </Text>
                    <Text style={styles.textContent}>
                        {shoes.description}
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: {shoes.categorie}
                    </Text>
                    <Text style={styles.textList}>
                        - Material: {shoes.material}
                    </Text>
                </View>

                <Button />

                <View style={styles.line} />

                <Footer />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    image: {
        width: '100%'
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContent: {
        fontSize: 16,
        lineHeight: 26,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 26,
        marginVertical: '2%',
        marginHorizontal: '2%'
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
        marginHorizontal: '2%'
    },
    line: {
        borderWidth: 1,
        borderBottomColor: "#DDD",
        marginVertical: '2%'
    }
})