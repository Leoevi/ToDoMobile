import { StyleSheet, Text, View, Button } from 'react-native';

export default function Credit({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="Go to credits again" onPress={() => navigation.navigate("credit")} />
            <Button title="Go to home" onPress={() => navigation.navigate("main")} />
            <Text>Credit</Text>
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
  