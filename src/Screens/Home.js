import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Title from '../Components/Tiltle'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.bannerContainer}>
                <Image
                    source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/question-and-answer-4033985-3337498.png' }}
                    style={styles.banner} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
                <Text style={styles.buttonText}>START</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    container: {
        height: '100%',
        backgroundColor: '#9364A6'
    },
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