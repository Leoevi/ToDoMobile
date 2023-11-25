import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../App';

export default function SignOut() {
    const { signOut } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={signOut}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
  