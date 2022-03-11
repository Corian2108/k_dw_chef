import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.primaryIcon}
        source={require('./../assets/sombrero-de-cocinero.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.titleInterline]}>Digital</Text>
        <Text style={styles.title}>Waiter</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(72, 69, 69, 1)',
    height: 90,
    width: 'auto',
    borderBottomRightRadius: 20,
    flexDirection: 'row',
  },
  primaryIcon: {
    height: 90,
    width: 90,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  title: {
    color: 'rgba(255, 162, 21, 1)',
    fontWeight: 'bold',
    fontSize: 30,
  },
  titleInterline: {
    marginBottom: -10,
  },
  titleContainer: {
    alignItems: 'center',
    marginLeft: 60,
    alignSelf: 'center',
  },
});
