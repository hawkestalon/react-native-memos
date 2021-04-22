import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';

const App = () => {
  const [user, setUser] = useState(null);
  const [userAuth, setUserAuth] = useState(null);
  const [signUp, setSignUp] = useState(false);

  const onAuthStateChanged = authUser => {
    console.log(authUser);
    if (authUser) {
      setUser(authUser._user);
      setUserAuth(authUser._auth);
    }
    console.log(authUser);
  };

  const onSignUpClicked = () => {
    setSignUp(!signUp);
  };

  const onLogin = () => {
    setUser('notNull');
  };

  const createUser = async (email, password) => {
    try {
      const newUser = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      setUser(newUser);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  // if logged in
  if (user) {
    return (
      <View>
        <Text> {user && user.email} </Text>
      </View>
    );
  }
  // if signUp is clicked
  if (signUp) {
    return (
      <View>
        <SignUp signUpFunc={createUser} />
      </View>
    );
  }

  //if not logged in
  return (
    <View style={styles.sectionContainer}>
      <Login signUpFunc={onSignUpClicked} loginFunc={onLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    height: '100%',
    backgroundColor: '#E3F2FD',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
