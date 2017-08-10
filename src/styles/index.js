import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  listHeader: {
    padding: 10
  },
  listHeaderTitle: {
    color: 'blue'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  listRow: {
    height: 80,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  listRowTitle: {
    color: '#000'
  },
  listRowSubtitle: {
    color: '#333'
  },
  listRowDate: {
    color: '#666',
    textAlign: 'right'
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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