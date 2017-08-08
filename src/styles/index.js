import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  },
  logoWrapper: {
    alignSelf: 'center'
  },
  logo: {
    width: 100
  },
  loginForm: {
    marginBottom: 40,
  },
  button: {
    paddingVertical: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    borderWidth: 1
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  textBox: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    alignSelf: 'stretch',
  },
});

export default styles;