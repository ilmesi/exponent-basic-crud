import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../styles';
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}
