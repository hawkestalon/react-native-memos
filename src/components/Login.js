import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import styles from '../styles/styles';

const Login = ({signUpFunc, loginFunc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Memos</Text>
      <View>
        <TextInput style={styles.input} placeholder="Email Address" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.rowContainer}>
        <Pressable style={styles.loginButton} title="Login" onPress={loginFunc}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.loginButton}
          title="SignUp"
          onPress={signUpFunc}>
          <Text style={styles.buttonText}>SignUp</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
