import { ScrollView, StyleSheet, Text } from "react-native";

// 10 nama sesuai permintaan kamu
const namesWithStambuk = [
  // 5 sebelum aul(font statis)
  "wa nanda sulystrian- 105841110622",
  "MUH.TEGAR AL FIKRI - 105841110722",
  "Rayhanatul jannah - 105841110822",
  "Hanna maryam - 105841110922",
  "Afifah Auliyah - 105841111022",

  // Ray (kamu) + 4 sesudah (font variabel)
  "Muh Fikri Maulana - 105841107622",
  "Muhammad Hasraddin Hasnan - 105841107722",
  "Muhammad Dzulfikar Hidayat - 105841107822",
   "AHMAD YANI - 105841107922",
  "Rosfika awalia - 105841108122",
];

// Font untuk 5 statis dan 5 variabel
const staticFonts = [
 "AbrilFatface",
  "Lobster",
  "Pacifico",
  "PlayfairDisplay",
  "RalewayDots",
];

const variableFonts = [
  "Bitcount",       // aul
  "Manrope",
  "Quicksand",
  "SmoochSans",
  "JosefinSlab",
];

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>5 nama sebelum (font statis):</Text>
      {namesWithStambuk.slice(0, 5).map((item, idx) => (
        <Text
          key={idx}
          style={[styles.name, { fontFamily: staticFonts[idx] }]}
        >
          {item}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>5 nama setelah (font variabel):</Text>
      {namesWithStambuk.slice(5).map((item, idx) => (
        <Text
          key={idx + 5}
          style={[
            styles.name,
            { fontFamily: variableFonts[idx] },
            item.includes("Ray") && styles.highlight,
          ]}
        >
          {item}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 22,
    marginVertical: 8,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#555",
  },
  highlight: {
    fontWeight: "bold",
    color: "#1976D2", // Sorot warna biru untuk nama kamu (Ray)
  },
});