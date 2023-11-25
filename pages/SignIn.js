import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useContext, useState } from 'react';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '../App';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SignIn() {
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    // https://www.geeksforgeeks.org/how-to-show-and-hide-password-in-react-native/
    // https://stackoverflow.com/questions/40935381/how-can-i-put-an-icon-inside-a-textinput-in-react-native
    const [hidePwd, setHidePwd] = useState(true);
    const togglePwdVisibility = () => {
        setHidePwd(!hidePwd);
    }

    // const signIn = () => {
    //     axios.post("https://cache111.com/todoapi/tokens",
    //         { id: id, password: password },
    //         { headers: { /* Authorization: "Bearer " + token */ }, timeout: 10e3 }
    //     ).then((response) => {
    //         // Save response data token
    //         // Navigate to main page
    //         Alert.alert("ok: " + response.status);
    //     }).catch((error) => {
    //         Alert.alert("Error: " + error.status);
    //     })
    // };
    const { signIn } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="User ID" keyboardType="numeric" onChangeText={setID} />
            <View style={styles.passwordContainer}>
                <TextInput type="password" secureTextEntry={hidePwd} style={styles.passwordInput} placeholder="Password" onChangeText={setPassword} />
                <MaterialCommunityIcons
                    name={hidePwd ? 'eye' : 'eye-off'}
                    size={24}
                    color="#aaa"
                    onPress={togglePwdVisibility}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => signIn({ id, password })}>
                <Text>Sign In</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
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
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    passwordInput: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
    }
});
