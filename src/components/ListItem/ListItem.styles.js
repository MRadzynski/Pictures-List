import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    padding: 6,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  idContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    position: 'absolute',
    top: 8,
    right: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b0ff',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 8,
    borderRadius: 10,
  },
  author: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  id: {
    color: 'white',
  },
});
