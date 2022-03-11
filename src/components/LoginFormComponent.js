import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

export default function LoginForm() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.userIcon} source={require('./../assets/user.png')} />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Bienvenido</Text>
        <TextInput style={styles.input} placeholder="Correo electrónico" />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Contraseña"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.infoText, styles.infoTextAlign]}>
          ¿Aún no tienes cuenta?
        </Text>
        <TouchableOpacity style={styles.infoTextAlign}>
          <Text style={styles.navText}>Registrate</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>¿No recuerdas tu contraseña?</Text>
        <TouchableOpacity style={styles.infoTextAlign}>
          <Text style={styles.navText}>Recuperar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.customButton}>
        <Text style={styles.textButton}>Ingresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 672,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    height: 116,
    width: 116,
    resizeMode: 'cover',
  },
  inputContainer: {
    backgroundColor: 'rgba(196, 196, 196, 0.31)',
    height: 'auto',
    width: 'auto',
    borderRadius: 16,
    paddingVertical: 15,
    marginVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'rgba(72, 69, 69, 1)',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 15,
    width: 156,
    height: 40,
    textAlign: 'center',
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  infoTextAlign: {
    marginLeft: 10,
  },
  navText: {
    color: 'rgba(30, 104, 136, 1)',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  customButton: {
    backgroundColor: 'rgba(255, 162, 21, 1)',
    borderRadius: 16,
    height: 64,
    width: 206,
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(147, 108, 33, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  textButton: {
    color: 'rgba(72, 69, 69, 1)',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
