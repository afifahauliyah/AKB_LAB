// app/(tabs)/about.tsx
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.text}>
        Aplikasi ini dibuat untuk keperluan tugas kuliah. Aplikasi ini memiliki 3 halaman utama:
        {"\n\n"}
        1. Home: Menampilkan informasi mengenai Universitas Muhammadiyah Makassar beserta gambar.
        {"\n\n"}
        2. About: Menjelaskan tujuan dan fungsi dari aplikasi ini.
        {"\n\n"}
        3. Profil: Menampilkan data diri pembuat aplikasi beserta foto profil.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
