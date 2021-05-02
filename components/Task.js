import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Task = ({text}) => {
    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({})
