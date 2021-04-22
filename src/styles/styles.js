import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 350,
    margin: 10,
  },
  header: {
    margin: 'auto',
    fontSize: 30,
    color: '#000000',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    flex: 1,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#0D47A1',
    borderRadius: 10,
  },
  buttonText: {
    color: '#BBDEFB',
  },
});

export default styles;
