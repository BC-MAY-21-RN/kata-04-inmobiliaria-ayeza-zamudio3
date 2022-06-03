import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  home: {
    flex: 2,
    backgroundColor: '#C1C9CD',
  },
  // Card
  card: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#F4FBFB',
    padding: 14,
    borderRadius: 10,
  },
  // Properties imageCard and score
  imageCard: {
    width: 125,
    height: 140,
    borderRadius: 15,
  },
  score: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#f5deb3',
    marginTop: 110,
    marginHorizontal: 35,
    width: 68,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    color: '#7b632a',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconScore: {
    color: '#eeba00',
    fontSize: 20,
    marginTop: -5,
  },
  //Properties text
  infoCard: {
    paddingHorizontal: 15,
  },
  nameProperty: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  addressName: {
    fontSize: 14,
    color: '#888989',
  },
  dscpt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  dscptText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  priceText: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  icon: {
    color: '#B2B1B9',
    fontSize: 26,
  },
  // Price and like button
  priceNotLike: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 2,
  },
  circleIcon: {
    width: 38,
    height: 38,
    backgroundColor: '#00b074',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 99,
  },
  iconLike: {
    fontSize: 20,
  },
});

export default style;
