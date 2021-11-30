import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tiltle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quiz App</Text>
        </View>
    )
}

export default Tiltle

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: '600'
    },
    container: {
        marginVertical: 20,
        paddingVertical: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
    }
})
