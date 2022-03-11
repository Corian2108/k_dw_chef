import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  squareContainer: {
    height: 680,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    height: 116,
    width: 116,
    resizeMode: 'cover',
  },
  inputContainer: {
    backgroundColor: 'rgba(196, 196, 196, 0.31)',
    height: 'auto',
    width: 'auto',
    borderRadius: 16,
    paddingVertical: 15,
    marginVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'rgba(72, 69, 69, 1)',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 15,
    width: 156,
    height: 40,
    textAlign: 'center',
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  infoTextAlign: {
    marginLeft: 10,
  },
  navText: {
    color: 'rgba(30, 104, 136, 1)',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  error: {
    color: '#f00',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
  customButton: {
    backgroundColor: 'rgba(255, 162, 21, 1)',
    borderRadius: 16,
    height: 64,
    width: 206,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(147, 108, 33, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  customButtonSpace: {
    marginTop: 40,
  },
  textButton: {
    color: 'rgba(72, 69, 69, 1)',
    fontWeight: 'bold',
    fontSize: 30,
  },
  passContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passInput: {
    width: 176,
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
    marginTop: -50,
    marginLeft: 40,
  },
  container: {
    height: 'auto',
    width: '100%',
    marginVertical: 5,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  newTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(72, 69, 69, 1)',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(72, 69, 69, 1)',
  },
  errorLog: {
    paddingTop: 25,
    paddingRight: 180,
    color: '#f00',
    position: 'absolute',
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: 'bold',
  },
  inputContainerEvent: {
    flexDirection: 'row',
    marginLeft: 40,
  },
  eventInput: {
    backgroundColor: 'rgba(196, 196, 196, 0.31)',
    borderRadius: 16,
    height: 40,
    width: 160,
    fontSize: 17,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(196, 196, 196, 0.8)',
    color: 'rgba(72, 69, 69, 1)',
    paddingHorizontal: 5,
    marginRight: 5,
    textAlign: 'center',
    paddingVertical: 0,
  },
  icon: {
    height: 31,
    width: 31,
    opacity: 0.6,
    marginHorizontal: 5,
  },
  separator: {
    backgroundColor: 'rgba(72, 69, 69, 1)',
    width: 161,
    height: 5,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 10,
  },
  largeInput: {
    width: 180,
  },
  littleInput: {
    width: 126,
  },
  invisible: {
    color: 'red',
    opacity: 0.6,
  },
  succes: {
    color: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
});
