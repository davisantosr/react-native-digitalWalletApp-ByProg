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

      </TouchableOpacity>
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
        </ScrollView>

      </LinearGradient>
    </KeyboardAvoidingView>
  )
}

export default SignUp
