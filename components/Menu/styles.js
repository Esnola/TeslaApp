import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
  menuText: {
    color: 'white',
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textTransform: 'uppercase',
  },
  menuRow: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuTextBox: {
    flexGrow: 1,
  },
  arrowIcon: {
    color: '#4D4D4E',
  },
  subTitle : {
    color: 'gray',
    fontSize: 13,
    marginLeft: 15,
  }
});

export default styles;
