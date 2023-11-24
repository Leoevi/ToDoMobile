import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function Main({ navigation }) {
    // Dummy data
    const [data, setData] = useState([
        { id: 0, activity: "activity1", when: "" },
        { id: 1, activity: "act2", when: "2022-10-10T10:00:00" },
        { id: 2, activity: "a3", when: "2022-10-10T18:00:00" },
    ]);

    const row = (item) => {
        // display modal
        // id = 0 --> add activity
        // id > 0 --> edit or delete activity (or use swipe)
        Alert.alert(item.id.toString());
    };

    const render = (data) => {
        return (
            <TouchableOpacity onPress={ () => row(data.item) }>
                <View key={data.item.id} style={styles.flatListItems}>
                    <Text style={styles.itemActivity}>{data.item.activity}</Text>
                    <Text style={styles.itemWhen}>{data.item.when}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <FlatList data={data} renderItem={render} style={styles.flatList} contentContainerStyle={styles.flatListContent}/>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
    },
    flatList: {
        marginTop: 10,
    },
    flatListContent: {
        marginTop: 10,
        paddingBottom: 50,
    },
    flatListItems: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#cde",
        marginBottom: 8,
        padding: 10,
    },
    itemActivity: {
        fontSize: 18,
        fontWeight: "bold",
        color: "blue",
    },
    itemWhen: {
        fontSize: 18,
        fontWeight: "bold",
        color: "red",
    },
  });
  