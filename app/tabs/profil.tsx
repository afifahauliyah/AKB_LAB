// app/(tabs)/profil.tsx
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Data Diri</Text>
      <Image source={require('../../assets/images/foto 2.jpg')} style={styles.image} />
      <Text style={styles.label}>Nama Lengkap:</Text>
      <Text style={styles.text}>[AFIFAH AULIYAH]</Text>
      <Text style={styles.label}>NIM:</Text>
      <Text style={styles.text}>[105841111022]</Text>
      <Text style={styles.label}>Kelas:</Text>
      <Text style={styles.text}>[6_C]</Text>
      <Text style={styles.label}>Jurusan:</Text>
      <Text style={styles.text}>[INFORMATIKA]</Text>
      <Text style={styles.label}>Fakultas:</Text>
      <Text style={styles.text}>[TEKNIK]</Text>
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
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  },
});
