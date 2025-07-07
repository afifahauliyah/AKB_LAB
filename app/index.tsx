import React from "react";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 20,
      }}
    >
      {/* 🔺 Segitiga oranye */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 30,
          borderRightWidth: 30,
          borderBottomWidth: 50,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "orange",
          marginBottom: 20,
        }}
      />

      {/* 💊 Pill - Stambuk */}
      <View
        style={{
          backgroundColor: "pink",
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 50,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
          }}
        >
          105841111022
        </Text>
      </View>

      {/* ▭ Persegi Panjang - Nama */}
      <View
        style={{
          backgroundColor: "red",
          paddingHorizontal: 30,
          paddingVertical: 15,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          AFIFAH AULIYAH
        </Text>
      </View>
    </View>
  );
}
