import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import styles from '../styles/styles';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createNewUser = async () => {
    console.log(email);
    console.log(password);
    await auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SignUp</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setEmail(text);
          }}
          placeholder="Email Address"
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.rowContainer}>
        <Pressable
          style={styles.loginButton}
          title="SignUp"
          onPress={createNewUser}>
          <Text style={styles.buttonText}>SignUp</Text>
        </Pressable>
        <Pressable style={styles.loginButton} title="back">
          <Text style={styles.buttonText}>back</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
