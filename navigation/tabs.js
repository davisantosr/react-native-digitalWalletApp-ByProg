import React from 'react'
import {
  View, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
} from 'react-native'

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import Svg, {Path} from 'react-native-svg'
import {isIphoneX} from 'react-native-iphone-x-helper'

import {Home, Scan } from '../screens'
import {COLORS, icons } from '../constants'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name='Home'
        component={Home}
        options={{
          tabBarIcon:({focused})=>(
            <Image 
              source={icons.more}
              resizeMode='contain'
              style={{
                width: 25, 
                height: 25, 
                tintColor: focused ? COLORS.white : COLORS.secondary
              }}
            />
          )
        }}
      />
      <Tab.Screen 
        name='Scan'
        component={Scan}
        options={{
          tabBarIcon:({focused})=>(
            <Image 
              source={icons.scan}
              resizeMode='contain'
              style={{
                width: 25, 
                height: 25, 
                tintColor: focused ? COLORS.white : COLORS.secondary
              }}
            />
          )
        }}
      />
      <Tab.Screen 
        name='User'
        component={Home}
        options={{
          tabBarIcon:({focused})=>(
            <Image 
              source={icons.user}
              resizeMode='contain'
              style={{
                width: 25, 
                height: 25, 
                tintColor: focused ? COLORS.black : COLORS.black
              }}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs;