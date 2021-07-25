import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native'

import Home from './pages/Home';
import Detail from './pages/Detail';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={Home}
                   
                    options={{ headerTitle: "Nike",
                     
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 25}}>
                            <Feather 
                                // name="shopping-cart"
                                name="search"
                                color="black"
                                size={24}
                            />
                             
                        </TouchableOpacity>
                        
                    )
                    
                   
                }
            }
                />
                <Stack.Screen 
                    name="Detail"
                    component={Detail}
                    options={{
                        headerTitle: "Nike Downshifter 10",
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 25}}>
                                <Feather 
                                    name="shopping-cart"
                                    color="black"
                                    size={24}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;