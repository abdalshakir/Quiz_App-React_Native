import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../Components/Tiltle'

const Result = ({ navigation }) => {
    return (
        <View>
            <Title />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>END</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    button: {
        width: '95%',
        backgroundColor: '#454851',
        paddingVertical: 10,
        borderRadius: 100,
        marginHorizontal: 10,
        alignItems: 'center',
        marginBottom: 12,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    }
})
