import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Cards extends Component {
    render() {
        return (
            <View style={{
                ...styles.container,
                backgroundColor: this.props.bg
            }}>
                <View style={styles.col}>
                    <Icon
                        name={this.props.icon}
                        size={30}
                        color={this.props.bg == "#D93B4A" ? "#fff" : "red"}
                    />
                </View>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text styles={{
                    ...styles.number,
                    color: this.props.bg == "#D93B4A" ? "#FFF" : "#000"
                }}>
                    {this.props.number}
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 130,
        borderRadius: 30,
        padding: 15,
        marginLeft: 20
    },
    col: {
        flexDirection: "row"
    },
    title: {
        marginTop: 22,
        color: '#b8b8aa',
        fontWeight: "bold",
        flexShrink: 12
    },
    number: {
        fontWeight: "bold",
        fontSize: 22
    }
})