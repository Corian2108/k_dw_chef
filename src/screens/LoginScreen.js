import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import PasswordInputText from 'react-native-hide-show-password-input';
import axios from 'axios';

import Header from '../components/HeaderComponent';
import useAuth from '../hooks/useAuth';
import {styles} from '../utils/generalStyles';
import {API_LOGIN} from '../utils/constants';

export default function LoginScreen(props) {
  const {navigation} = props;
  const [password, setPassword] = useState(false);
  const [loginError, setError] = useState('');
  const {setToken} = useAuth();

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: data => {
      axios
        .post(API_LOGIN, data)
        .then(function (response) {
          setToken(response.data);
          navigation.navigate('NewEvent');
          setError('');
        })
        .catch(function (error) {
          console.error(error);
          setError('Usuario o contraseña incorrectos');
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
          <Text style={styles.title}>Bienvenido</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Correo electrónico"
            value={formik.values.email}
            onChangeText={text => formik.setFieldValue('email', text)}
          />
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
                lineWidth={0}
              />
            </View>
          </SafeAreaView>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoText, styles.infoTextAlign]}>
            ¿Aún no tienes cuenta?
          </Text>
          <TouchableOpacity style={styles.infoTextAlign} onPress={goToRegister}>
            <Text style={styles.navText}>Registrate</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>¿No recuerdas tu contraseña?</Text>
          <TouchableOpacity style={styles.infoTextAlign}>
            <Text style={styles.navText}>Recuperar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.error}>
          {formik.errors.email || formik.errors.password}
        </Text>
        <Text style={styles.error}>{loginError}</Text>
        <TouchableOpacity
          style={[styles.customButton, styles.customButtonSpace]}
          onPress={formik.handleSubmit}>
          <Text style={styles.textButton}>Ingresar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

function validationSchema() {
  return {
    email: Yup.string()
      .email('Correo no válido')
      .required('El email es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  };
}

function initialValues() {
  return {
    email: '',
    password: '',
  };
}
