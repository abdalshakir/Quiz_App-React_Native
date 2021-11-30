import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import Title from '../Components/Tiltle'

const Quiz = ({ navigation }) => {
    const state = useSelector(state => state)
    const [ind, setInd] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedValue, setSelectedValue] = useState("");
    const [end, setEnd] = useState('');

    function checkAns() {
        let correctValue = state.questions[ind].correctAnswer;
        if (selectedValue === correctValue) {
            setScore(score + 10)
        }
        if (state.questions.length === ind + 1) {
            setEnd(() => navigation.navigate('Result'))
        } else {
            setInd(ind + 1)
        }
    }

    return (
        <ImageBackground style={styles.bgImage} source={require('../Assets/bgImage.jpg')}>
            <View style={styles.container}>
                <Title />
                <View style={styles.question}>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 2 }}>
                        <Text style={styles.questionText}>Question {ind + 1} of {state.questions.length}</Text>
                    </View>
                    <View>
                        <Text style={styles.questionText}>{state.questions[ind].question}</Text>
                    </View>
                </View>
                <View style={styles.options}>
                    {state.questions[ind].options.map((e, i) => {
                        return (
                            <TouchableOpacity key={i} style={styles.optionButton} onPress={() => setSelectedValue(e)}>
                                <Text style={styles.optionText}>{e}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => checkAns()}>
                        <Text style={styles.next}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ ImageBackground>
    )
}

export default Quiz;

const styles = StyleSheet.create({
    bgImage: {
        // width: 330,
        // height: 800
    },
    container: {
        height: '100%',
    },
    question: {
        marginVertical: 16,
    },
    questionText: {
        fontSize: 24,
        color: 'black',
        paddingHorizontal: 12
    },
    options: {
        flex: 1,
    },
    optionButton: {
        width: '95%',
        paddingVertical: 10,
        marginVertical: 12,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 14,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    optionText: {
        fontSize: 18
    },
    next: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    },
    button: {
        width: '95%',
        backgroundColor: '#454851',
        paddingVertical: 10,
        borderRadius: 100,
        marginHorizontal: 10,
        alignItems: 'center',
        marginBottom: 12,
    }
});