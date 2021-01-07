import React from 'react'
import { 
  View, 
  Text,
  Image,
  TouchableOpacity 
} from 'react-native'

import {RNCamera} from 'react-native-camera'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'

const Scan = () => {
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
                  
      </RNCamera>
    </View>
  )
}

export default Scan
