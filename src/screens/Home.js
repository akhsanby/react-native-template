import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SecondScreen")}>
         <Text style={styles.textBtn}>To Second Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
    marginTop: 20
  },
  btn: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 50,
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  }
})