import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileCard() {
  const handlePress = () => {
    alert("Selamat datang, pengguna!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.nameBox} onPress={handlePress}>
        <Text style={styles.nameText}>AFIFAH AULIYAH</Text>
      </TouchableOpacity>

      <View style={styles.idContainer}>
        <Text style={styles.idText}>105841111022</Text>
      </View>

      <View style={styles.triangleShape} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f3",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 50,
  },
  nameBox: {
    backgroundColor: "#4caf50",
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
    margin : 20
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  idContainer: {
    backgroundColor: "#3f51b5",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 100,
    margin: 20
  },
  idText: {
    fontSize: 16,
    color: "#ffffff",
  },
  triangleShape: {
    width: 0,
    height: 0,
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderBottomWidth: 55,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#ff9800",
  },
});
