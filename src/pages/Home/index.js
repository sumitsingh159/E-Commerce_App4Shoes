import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Shoes from '../../components/Shoes';
import { color } from 'react-native-reanimated';
import { Icon } from 'expo';

export default function Home() {
    const navigation = useNavigation();

    // Man = true - Woman - false
    const [manFilter, setManFilter] = useState(true);

    useEffect(() => {
        // Change the display shoes
    }, [manFilter])

    return (
        <View style={styles.container}>
           

            <ScrollView>
           
            <View style={styles.header}>
                <Image 
                    source={require('../../assets/banner.png')}
                    style={styles.image}
                />
                < View style={styles.float}>
                <Image 
                    source={require('../../assets/nike.jpeg')}
                     style={styles.imaged}
                    //style={{}}
                />
                </View>
                

                <View style={styles.textContainer}>
                   <View style={styles.hding}><Text style={styles.text}>Nike</Text> 
                   <Image 
                    source={require('../../assets/check.png')}
                    style={styles.image4}
                />
                   </View> 
                    <Text style={[styles.text1, {color: '#7c7d7e',fontSize: 20,} ]}>Business Page</Text>
                    <Text style={[styles.text1, {color: 'black',paddingTop:20} ]}>Spotlighting athlete and stories</Text>
                   <View style={{flexDirection:'row',paddingTop:20}}>
                        {/* <Button title="Followed" color="#841584"/> 
                        <Button title="Shop" color="#841584"/>  */}
                        <TouchableOpacity  style={styles.loginScreenButton}underlayColor='#fff'>

                     <Text style={styles.loginText}>Followed</Text>
                            
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.loginScreenButton}underlayColor='#fff'>
                        <Image 
                    source={require('../../assets/shopping-bag2.png')}
                    style={styles.image2}
                               />
                         <Text style={styles.loginText1}>Shop</Text>
                            
                        </TouchableOpacity>
                        
                    </View>



                    {/* <TouchableOpacity style={{ position: 'absolute', right:0, alignSelf: 'center' }}>
                        <MaterialIcons 
                            name="filter-list"
                            size={24}
                            color="#000"
                            onPress={() => setManFilter(!manFilter)}
                        />
                    </TouchableOpacity> */}

                </View>
            </View>
            <View style={styles.rail}>
            <Text style={{fontSize:20,color:'purple',fontWeight:'500',padding:10,paddingLeft:20}}>Followers</Text>
            <Text style={{color: '#7c7d7e',fontSize: 20,paddingLeft:25,paddingBottom:20}}>Sumit,Neeraj,Neha+156K more                   ></Text>
            </View>
            {/* <Text style={{}}>Shop</Text> */}
            <View style={styles.line} />
            <View style={{flexDirection:'row',flex:1,justifyContent: 'space-around'}}>
            <Text style={{color: '#7c7d7e',fontSize: 20,paddingLeft:25,fontWeight:'bold',paddingTop:15,paddingBottom:20}}>Posts</Text>
           
               <View style={{borderBottomColor:'#D2c70e',borderBottomWidth:2,width:60,}}><Text style={{color:'#D2c70e',fontSize:20,fontWeight:'bold',alignItems:'center',alignSelf:
                'center',paddingBottom:5,paddingTop:15}}>Shop</Text>
                </View> 
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/1.png')} price="R$140,90" onClick={() => navigation.navigate('Detail', { id: 123 })}>
                        Nike Air Max 3
                    </Shoes>
                    <Shoes img={require('../../assets/2.png')} price="R$279,90" onClick={() => navigation.navigate('Detail', { id: 321})}>
                        Nike Downshifter 10
                    </Shoes>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/3.png')} price="R$559,00" onClick={() => navigation.navigate('Detail')}>
                        Nike Squidward Tentacles
                    </Shoes>
                    <Shoes img={require('../../assets/4.png')} price="R$219,90" onClick={() => navigation.navigate('Detail')}>
                        Nike Epic React Flyknit 2
                    </Shoes>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/5.png')} price="R$559,00" onClick={() => navigation.navigate('Detail')}>
                        Nike Squidward Tentacles
                    </Shoes>
                    <Shoes img={require('../../assets/6.png')} price="R$219,90" onClick={() => navigation.navigate('Detail')}>
                        Nike Epic React Flyknit 2
                    </Shoes>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/1.png')} price="R$140,90" onClick={() => navigation.navigate('Detail', { id: 123 })}>
                        Nike Air Max 3
                    </Shoes>
                    <Shoes img={require('../../assets/2.png')} price="R$279,90" onClick={() => navigation.navigate('Detail', { id: 321})}>
                        Nike Downshifter 10
                    </Shoes>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/5.png')} price="R$559,00" onClick={() => navigation.navigate('Detail')}>
                        Nike Squidward Tentacles
                    </Shoes>
                    <Shoes img={require('../../assets/6.png')} price="R$219,90" onClick={() => navigation.navigate('Detail')}>
                        Nike Epic React Flyknit 2
                    </Shoes>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/1.png')} price="R$140,90" onClick={() => navigation.navigate('Detail', { id: 123 })}>
                        Nike Air Max 3
                    </Shoes>
                    <Shoes img={require('../../assets/2.png')} price="R$279,90" onClick={() => navigation.navigate('Detail', { id: 321})}>
                        Nike Downshifter 10
                    </Shoes>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    header: {
        marginBottom: 8
    },
    float : {
        height:140,
        width : 140,
        //borderRadius:250,
        backgroundColor: 'purple',
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        

    },

    image: {
        width: '100%'
    },
    image2:{
        height:17,
        width:25,
       marginLeft:15,
        paddingLeft:20,
       
        backgroundColor: 'purple',
        tintColor:'white'

    },  
      image4:{
        height:30,
        width:30,
        paddingTop:20
     
       
        

    },
    imaged:{
        height:133,
        width: 133,
        borderRadius:30

      //  borderRadius:220
    },
    textContainer: {
        flexDirection: 'column',
        marginVertical: '5%',
        marginHorizontal: '5%',
        marginTop: 90,
        alignItems:'center',
        paddingBottom: 20,
        // borderBottomColor: '#D8D8D8',
        // borderBottomWidth: 2

    },
    text: {
        fontWeight:"bold",
        fontSize: 30,
        marginHorizontal: '2%',
        color:'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        
    },
    rail:{
        flexDirection:'column',
        borderTopWidth:2,
        borderTopColor: '#D8D8D8',
    },
    line: {
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 2
    },
    loginScreenButton:{
        width:140,
        height:40,
        marginRight:10,
        marginLeft:10,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'purple',
        borderRadius:10,
        borderWidth: 1,
        textAlign:'center',
          alignItems:'center',
          alignContent:'center',
        borderColor: '#fff',
        flexDirection:'row',
        
      },
      loginText:{
          color:'#fff',
          fontSize:19,
          textAlign:'center',
          alignItems:'center',
          alignContent:'center',
          justifyContent:'center',
          fontWeight:'bold',
          paddingBottom : 23,
          alignSelf:'center',
          textAlign:'center',
          flex:1
      },
      hding:{
        flexDirection:'row',
      },
      loginText1:{
        color:'#fff',
        fontSize:19,
        paddingRight:15,
        textAlign:'center',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        fontWeight:'bold',
        paddingBottom : 23,
        alignSelf:'center',
        textAlign:'center',
        flex:1
    }
})