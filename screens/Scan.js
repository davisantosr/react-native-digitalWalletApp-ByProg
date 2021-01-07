import React from 'react'
import { 
  View, 
  Text,
  Image,
  TouchableOpacity 
} from 'react-native'

import {RNCamera} from 'react-native-camera'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'

const Scan = ({navigation}) => {

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row', 
          marginTop: SIZES.padding * 4,
          paddingHorizontal: SIZES.padding *3 
        }}
      >
        <TouchableOpacity
          style={{
            width: 45,
            alignItems: 'center', 
            justifyContent: 'center', 
          }}
          onPress={() => navigation.navigate('Home') }
        >
          <Image 
            source={icons.close}
            style={{
              height: 20, 
              width: 20, 
              tintColor: COLORS.white
            }}
          />          
        </TouchableOpacity>

        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: COLORS.white, ...FONTS.body3}}>Scan for payment</Text>
        </View>

        <TouchableOpacity
          style={{
            height: 45, 
            width: 45, 
            backgroundColor: COLORS.green, 
            borderRadius: 10, 
            alignItems: 'center', 
            justifyContent: 'center', 
          }}
          onPress={() => console.log('Info')}
        >
          <Image 
            source={icons.info}
            style={{
              height: 25, 
              width: 25, 
              tintColor: COLORS.white
            }}
          />

        </TouchableOpacity>

      </View>
    )
  }

  return (
    <View 
      style={{flex: 1, backgroundColor: COLORS.transparent}}
    >
      <RNCamera
        // ref={ref => {
        //   this.camera = ref
        // }}
        style={{flex: 1}}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'Camera is required to code scanning',
          buttonNegative: 'Cancel',
          buttonPositive: 'Allow',
        }}
      >
        {renderHeader()}           
               
      </RNCamera>
    </View>
  )
}

export default Scan
