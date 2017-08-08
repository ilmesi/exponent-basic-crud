import React, { Component } from 'react';
import {
  Image, Text, TextInput, View, Button,
  TouchableOpacity
} from 'react-native';
import styles from '../styles';
import logo from '../../assets/icons/app-logo.png';

export default class Login extends Component {
  render() {
    return (
      <View>
        <View style={styles.logoWrapper}>
          <Image source={logo} style={styles.logo} resizeMode='contain' />
        </View>
        <View style={styles.loginForm}>
          <TextInput placeholder={'Username'} style={styles.textBox} />
          <TextInput placeholder={'Password'} style={styles.textBox} />
        </View>
        <TouchableOpacity onPress={() => {}} activeOpacity={.5}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
