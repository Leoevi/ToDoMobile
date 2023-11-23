import { StyleSheet, Text, View } from 'react-native';

export default function SignOut() {
    return (
        <View style={styles.container}>
            <Text>Sign Out</Text>
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
  