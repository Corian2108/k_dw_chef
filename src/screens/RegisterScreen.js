import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import PasswordInputText from 'react-native-hide-show-password-input';
import axios from 'axios';

import Header from '../components/HeaderComponent';
import {styles} from '../utils/generalStyles';
import {API_REGISTER} from '../utils/constants';
import useAuth from '../hooks/useAuth';

export default function RegisterScreen(props) {
  const {navigation} = props;
  const [password, setPassword] = useState(false);
  const [regError, setError] = useState('');

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: data => {
      let datos = {
        id_rol: 1,
        nombre: data.nombre,
        email: data.email,
        password: data.password,
      };
      axios
        .post(API_REGISTER, datos)
        .then(function (response) {
          console.log(response.data);
          setError('');
          navigation.navigate('Login');
        })
        .catch(function (error) {
          setError('Este correo ya tiene una cuenta');
          console.error(error);
        });
    },
  });

  return (
    <ScrollView>
      <Header />
      <SafeAreaView style={styles.squareContainer}>
        <Image
          style={styles.userIcon}
          source={require('./../assets/user.png')}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Registrate</Text>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              placeholder="Nombre y apellido"
              value={formik.values.nombre}
              onChangeText={text => formik.setFieldValue('nombre', text)}
            />
          </SafeAreaView>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Correo electrónico"
              value={formik.values.email}
              onChangeText={text => formik.setFieldValue('email', text)}
            />
          </SafeAreaView>
          <SafeAreaView>
            <View style={[styles.passContainer, styles.input]}>
              <PasswordInputText
                style={styles.passInput}
                value={formik.values.password}
                placeholder="Contraseña"
                onPress={() => setPassword(true)}
                autoCapitalize="none"
                onChangeText={text => formik.setFieldValue('password', text)}
                label=""
              />
            </View>
          </SafeAreaView>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoText, styles.infoTextAlign]}>
            ¿Ya tienes cuenta?
          </Text>
          <TouchableOpacity style={styles.infoTextAlign} onPress={goToLogin}>
            <Text style={styles.navText}>Ingresa</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.error}>
          {formik.errors.nombre ||
            formik.errors.email ||
            formik.errors.password}
        </Text>
        <Text style={styles.error}>{regError}</Text>
        <TouchableOpacity
          style={styles.customButton}
          onPress={formik.handleSubmit}>
          <Text style={styles.textButton}>Registrarse</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

function validationSchema() {
  return {
    nombre: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string()
      .email('Ingrese un correo válido')
      .required('El correo es obligatorio'),
    password: Yup.string().min(8).required('Ingrese una contraseña'),
  };
}

function initialValues() {
  return {
    nombre: '',
    email: '',
    password: '',
  };
}
