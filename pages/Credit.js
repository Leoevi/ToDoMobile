import { StyleSheet, Text, View, Button } from 'react-native';

export default function Credit({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Made by...</Text>
            <Button title="Go to home" onPress={() => navigation.navigate("main")} />
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
  });
  