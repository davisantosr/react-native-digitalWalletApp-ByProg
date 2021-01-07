import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity, 
  TouchableWithoutFeedback,
  Image, 
  TextInput,
  Modal, 
  FlatList, 
  KeyboardAvoidingView, 
  ScrollView,
  Platform,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { COLORS, SIZES, FONTS,  icons, images, } from '../constants'

const SignUp = () => {

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row', 
          alignItems: 'center', 
          marginTop: SIZES.padding * 6,
          paddingHorizontal: SIZES.padding * 2, 
        }}
        onPress={() => console.log('Sign Up')}
      >
        <Image 
          source={icons.back}
          resizeMode={'contain'}
          style={{
            width: 20, 
            height: 20, 
            tintColor: COLORS.white
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.padding *1.5,
            color: COLORS.white, 
            ...FONTS.h4
          }}
        >
          Sign Up
        </Text>

      </TouchableOpacity>
    )
  }

  function renderLogo() {
    return(
      <View
        style={{
          marginTop: SIZES.padding * 5, 
          height: 100, 
          alignItems: 'center', 
          justifyContent: 'center'
        }}
      >

        <Image 
          source={images.wallieLogo}
          resizeMode={'contain'}
          style={{
            width: '60%'
          }}
        />

      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}
    >
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={{flex: 1}}
      >
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
        </ScrollView>

      </LinearGradient>
    </KeyboardAvoidingView>
  )
}

export default SignUp
