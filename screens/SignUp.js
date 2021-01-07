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
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}
    >
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={{flex: 1}}
      >

      </LinearGradient>
    </KeyboardAvoidingView>
  )
}

export default SignUp
