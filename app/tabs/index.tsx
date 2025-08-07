// app/(tabs)/index.tsx
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image source={require('../../assets/images/foto unismuh.jpeg')} style={styles.image} />
      <Text style={styles.text}>
        Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah salah satu universitas swasta terbaik di Indonesia Timur yang berlokasi di Makassar, Sulawesi Selatan. 
        Berdiri sejak tahun 1963, Unismuh memiliki berbagai fakultas dan program studi unggulan.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
