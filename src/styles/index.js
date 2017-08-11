import { StyleSheet } from 'react-native';

export const detailStyles = StyleSheet.create({
  detailContainer: {
    backgroundColor: '#F5F5F5',
    flex: 1
  },
  detailHeader: {
    alignSelf: 'center'
  },
  detailHeaderLogo: {
    width: 80
  },
  infoIcon: {
    fontSize: 20,
    height: 20,
    color: 'black',
  },
  infoRow: {
    height: 40,
    backgroundColor: 'green',
    padding: 10
  },
  detailSubtitle: {
    color: '#9E9E9E',
    paddingLeft: 10,
  },
  detailSubList: {
    marginTop: 40,
  },
  detailList: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderColor: '#EEEEEE',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  detailRow: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  detailIcon: {
    fontSize: 20,
    height: 22,
    color: '#AAA',
  },
  detailValue: {
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1
  },
  detailValueBorder: {
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  }
});

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
  loginContainer: {
    backgroundColor: 'white',
    flex: 1
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
    paddingVertical: 30,
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