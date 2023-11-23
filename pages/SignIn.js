import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function SignIn() {
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        axios.post("https://cache111.com/todoapi/tokens",
            { id: id, password: password },
            { headers: { /* Authorization: "Bearer " + token */ }, timeout: 10e3 }
        ).then((response) => {
            // Save response data token
            // Navigate to main page
            Alert.alert("ok: " + response.status);
        }).catch((error) => {
            Alert.alert("Error: " + error.status);
        })
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="เลขประจำตัวปชช. " keyboardType="numeric" onChangeText={setID}/>
            <TextInput type="password" secureTextEntry={true} style={styles.input} placeholder="รหัสผ่าน" onChangeText={setPassword}/>
            <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text>aaa</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },

    input: {
        borderWidth: 1,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
    },

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
    },
});
