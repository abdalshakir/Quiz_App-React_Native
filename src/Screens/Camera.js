import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';

function Camera() {
    return (
        <View style={{flex: 1}}>
            <RNCamera
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }} />
            <TouchableOpacity onPress={takePicture}>
                <Text>Take Picture</Text>
            </TouchableOpacity>
        </View>
    )
}