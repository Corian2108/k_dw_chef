import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function NewEvent() {
  return (
    <View style={[styles.centered]}>
      <Text style={styles.title}>Nuevo Evento</Text>
      <SafeAreaView style={[styles.container, styles.centered]}>
        <Text style={styles.subTitle}> Nombre del Evento </Text>
        <View style={[styles.inputContainer, styles.centered]}>
          <TextInput style={styles.input}></TextInput>
          <Image style={styles.icon} source={require('../assets/bar.png')} />
        </View>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, styles.centered]}>
        <Text style={styles.subTitle}> Ciudad y zona </Text>
        <View style={[styles.inputContainer, styles.centered]}>
          <TextInput style={styles.input}></TextInput>
          <Image
            style={styles.icon}
            source={require('../assets/edificios.png')}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, styles.centered]}>
        <Text style={styles.subTitle}> Dirección </Text>
        <View style={[styles.inputContainer, styles.centered]}>
          <TextInput
            style={[styles.input, styles.largeInput]}
            placeholder="Calle 1 y calle2"></TextInput>
          <Image
            style={styles.icon}
            source={require('../assets/google-maps.png')}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, styles.centered]}>
        <Text style={styles.subTitle}> Nombre del lugar </Text>
        <View style={[styles.inputContainer, styles.centered]}>
          <TextInput style={styles.input}></TextInput>
          <Image
            style={styles.icon}
            source={require('../assets/casa-de-campo.png')}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, styles.centered]}>
        <Text style={styles.subTitle}> Fecha </Text>
        <View style={[styles.inputContainer, styles.centered]}>
          <TextInput
            style={[styles.input, styles.littleInput]}
            placeholder="dd/mm/aa"></TextInput>
          <Image
            style={styles.icon}
            source={require('../assets/calendar-3200778-2683078.png')}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, styles.centered]}>
        <Text style={styles.subTitle}> Hora </Text>
        <View style={[styles.inputContainer, styles.centered]}>
          <TextInput
            style={[styles.input, styles.littleInput]}
            placeholder="HH:hh"></TextInput>
          <Image style={styles.icon} source={require('../assets/clock.png')} />
        </View>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, styles.centered]}>
        <Text style={styles.subTitle}> Aforo </Text>
        <View style={[styles.inputContainer, styles.centered]}>
          <TextInput style={[styles.input, styles.littleInput]}></TextInput>
          <Image
            style={styles.icon}
            source={require('../assets/personas.png')}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, styles.centered]}>
        <Text style={styles.subTitle}> Precio </Text>
        <View style={[styles.inputContainer, styles.centered]}>
          <TextInput style={[styles.input, styles.littleInput]}></TextInput>
          <Image
            style={styles.icon}
            source={require('../assets/etiqueta.png')}
          />
        </View>
      </SafeAreaView>
      <TouchableOpacity style={styles.customButton}>
        <Text style={styles.textButton}> Guardar </Text>
      </TouchableOpacity>
      <View style={styles.separator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: 'auto',
    marginVertical: 5,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(72, 69, 69, 1)',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(72, 69, 69, 1)',
  },
  inputContainer: {
    flexDirection: 'row',
    marginLeft: 40,
  },
  input: {
    backgroundColor: 'rgba(196, 196, 196, 0.31)',
    borderRadius: 16,
    height: 40,
    width: 160,
    fontSize: 17,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(196, 196, 196, 0.8)',
    color: 'rgba(72, 69, 69, 1)',
    paddingHorizontal: 5,
    marginRight: 5,
    textAlign: 'center',
    paddingVertical: 0,
  },
  icon: {
    height: 31,
    width: 31,
    opacity: 0.6,
    marginHorizontal: 5,
  },
  customButton: {
    backgroundColor: 'rgba(255, 162, 21, 1)',
    borderRadius: 16,
    height: 64,
    width: 206,
    marginTop: 50,
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
  separator: {
    backgroundColor: 'rgba(72, 69, 69, 1)',
    width: 161,
    height: 5,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 10,
  },
  largeInput: {
    width: 180,
  },
  littleInput: {
    width: 126,
  },
});
