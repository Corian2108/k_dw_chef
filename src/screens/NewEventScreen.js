import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Header from '../components/HeaderComponent';
import useAuth from '../hooks/useAuth';
import {styles} from '../utils/generalStyles';
import {
  API_GETAUTHUSER,
  API_POSTEVENT,
  API_POSTPLACE,
} from '../utils/constants';

export default function NewEventScreen() {
  const [succes, setSucces] = useState('');
  const [error, setError] = useState('');
  const [idLugar, setIdLugar] = useState('');
  const {user, auth, setAuthUser} = useAuth();
  const {token} = auth;
  const authToken = {
    Authorization: `Bearer ${token}`,
  };

  function axiosGetAuthUser() {
    return axios
      .get(API_GETAUTHUSER, {
        headers: authToken,
      })
      .then(function (response) {
        setAuthUser(response.data.user.id);
        return user;
      })
      .catch(function (error) {
        return error;
      });
  }

  function axiosPostPlace(data) {
    return axios
      .post(API_POSTPLACE, data, {
        headers: authToken,
      })
      .then(function (response) {
        setIdLugar(response.data);
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  }

  function axiosPostEvent(data) {
    return axios
      .post(API_POSTEVENT, data, {
        headers: authToken,
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: data => {
      const placeData = {
        nombre: data.nombreLugar,
        ubicacion: data.ubicacion,
        zona: data.zona,
        id_foto: 1,
      };

      let eventData = {};

      Promise.resolve(axiosGetAuthUser())
        .then(function (response) {
          console.log(response);
          setError('');
          Promise.resolve(axiosPostPlace(placeData))
            .then(function (res) {
              console.log(res);
              setError('');
              eventData = {
                id_user: user,
                id_lugar: idLugar.data.id,
                nombre: data.nombreEvento,
                fecha: data.fecha,
                hora: data.hora,
                precio: data.precio,
                aforo: data.aforo,
                descripcion: 'vacío',
              };
              Promise.resolve(axiosPostEvent(eventData))
                .then(function (resp) {
                  console.log(resp);
                  setError('');
                  setSucces('El evento se ha guardado correctamente');
                  formik.resetForm({values: ''});
                  setTimeout(() => setSucces(''), 2500);
                })
                .catch(function (error) {
                  console.log(error);
                  setError('Algo salío mal, intente de nuevo');
                });
            })
            .catch(function (error) {
              console.log(error);
              setError('Algo salío mal, intente de nuevo');
            });
        })
        .catch(function (error) {
          console.log(error);
          setError('Algo salío mal, intente de nuevo');
        });
    },
  });

  return (
    <ScrollView>
      <Header />
      <View style={styles.centered}>
        <Text style={styles.error}>{error}</Text>
        <Text style={styles.succes}>{succes}</Text>
        <Text style={styles.newTitle}>Nuevo Evento</Text>
        <SafeAreaView style={[styles.container, styles.centered]}>
          <Text style={styles.subTitle}> Nombre del Evento </Text>
          <Text style={styles.errorLog}>{formik.errors.nombreEvento}</Text>
          <View style={[styles.inputContainerEvent, styles.centered]}>
            <TextInput
              value={formik.values.nombreEvento}
              onChangeText={text => formik.setFieldValue('nombreEvento', text)}
              style={styles.eventInput}
            />
            <Image style={styles.icon} source={require('../assets/bar.png')} />
          </View>
        </SafeAreaView>
        <SafeAreaView style={[styles.container, styles.centered]}>
          <Text style={styles.subTitle}> Ciudad y zona </Text>
          <Text style={styles.errorLog}>{formik.errors.zona}</Text>
          <View style={[styles.inputContainerEvent, styles.centered]}>
            <TextInput
              value={formik.values.zona}
              onChangeText={text => formik.setFieldValue('zona', text)}
              style={styles.eventInput}
            />
            <Image
              style={styles.icon}
              source={require('../assets/edificios.png')}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView style={[styles.container, styles.centered]}>
          <Text style={styles.subTitle}> Dirección </Text>
          <Text style={styles.errorLog}>{formik.errors.ubicacion}</Text>
          <View style={[styles.inputContainerEvent, styles.centered]}>
            <TextInput
              value={formik.values.ubicacion}
              onChangeText={text => formik.setFieldValue('ubicacion', text)}
              style={[styles.eventInput, styles.largeInput]}
              placeholder="Calle 1 y calle2"
            />
            <Image
              style={styles.icon}
              source={require('../assets/google-maps.png')}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView style={[styles.container, styles.centered]}>
          <Text style={styles.subTitle}> Nombre del lugar </Text>
          <Text style={styles.errorLog}>{formik.errors.nombreLugar}</Text>
          <View style={[styles.inputContainerEvent, styles.centered]}>
            <TextInput
              value={formik.values.nombreLugar}
              onChangeText={text => formik.setFieldValue('nombreLugar', text)}
              style={styles.eventInput}
            />
            <Image
              style={styles.icon}
              source={require('../assets/casa-de-campo.png')}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView style={[styles.container, styles.centered]}>
          <Text style={styles.subTitle}> Fecha </Text>
          <Text style={styles.errorLog}>{formik.errors.fecha}</Text>
          <View style={[styles.inputContainerEvent, styles.centered]}>
            <TextInput
              value={formik.values.fecha}
              onChangeText={text => formik.setFieldValue('fecha', text)}
              style={[styles.eventInput, styles.littleInput]}
              placeholder="dd/mm/aa"
            />
            <Image
              style={styles.icon}
              source={require('../assets/calendar-3200778-2683078.png')}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView style={[styles.container, styles.centered]}>
          <Text style={styles.subTitle}> Hora </Text>
          <Text style={styles.errorLog}>{formik.errors.hora}</Text>
          <View style={[styles.inputContainerEvent, styles.centered]}>
            <TextInput
              value={formik.values.hora}
              onChangeText={text => formik.setFieldValue('hora', text)}
              style={[styles.eventInput, styles.littleInput]}
              placeholder="HH:hh"
            />
            <Image
              style={styles.icon}
              source={require('../assets/clock.png')}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView style={[styles.container, styles.centered]}>
          <Text style={styles.subTitle}> Aforo </Text>
          <Text style={styles.errorLog}>{formik.errors.aforo}</Text>
          <View style={[styles.inputContainerEvent, styles.centered]}>
            <TextInput
              value={formik.values.aforo}
              onChangeText={text => formik.setFieldValue('aforo', text)}
              style={[styles.eventInput, styles.littleInput]}
            />
            <Image
              style={styles.icon}
              source={require('../assets/personas.png')}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView style={[styles.container, styles.centered]}>
          <Text style={styles.subTitle}> Precio </Text>
          <Text style={styles.errorLog}>{formik.errors.precio}</Text>
          <View style={[styles.inputContainerEvent, styles.centered]}>
            <TextInput
              value={formik.values.precio}
              onChangeText={text => formik.setFieldValue('precio', text)}
              style={[styles.eventInput, styles.littleInput]}
            />
            <Image
              style={styles.icon}
              source={require('../assets/etiqueta.png')}
            />
          </View>
        </SafeAreaView>
        <Text style={styles.error}>{error}</Text>
        <Text style={styles.succes}>{succes}</Text>
        <TouchableOpacity
          style={[styles.customButton, styles.customButtonSpace]}
          onPress={formik.handleSubmit}>
          <Text style={styles.textButton}>Guardar</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
      </View>
    </ScrollView>
  );
}

function validationSchema() {
  return {
    //evento
    nombreEvento: Yup.string().required('Campo obligatorio'),
    fecha: Yup.string().required('Campo obligatorio'),
    hora: Yup.string().required('Campo obligatorio'),
    aforo: Yup.number().max(30, 'Max 30').required('Campo obligatorio'),
    precio: Yup.string().required('Campo obligatorio'),
    //lugar
    zona: Yup.string().required('Campo obligatorio'),
    ubicacion: Yup.string().required('Campo obligatorio'),
    nombreLugar: Yup.string().required('Campo obligatorio'),
  };
}

function initialValues() {
  return {
    //evento
    nombreEvento: '',
    fecha: '',
    hora: '',
    aforo: '',
    precio: '',
    //lugar
    zona: '',
    ubicacion: '',
    nombreLugar: '',
  };
}
