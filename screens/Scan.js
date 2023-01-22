import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
} from 'react-native';
const Scan = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('./../assets/background.png')}
    >
      <Image
        style={styles.farmerImage}
        source={require('./../assets/farmer.png')}
      />
      <View style={styles.scanContent}>
        <Pressable
          style={styles.scan}
          onPress={() => navigation.navigate('FarmScan')}
        >
          <Image
            style={styles.cameraIcon}
            source={require('./../assets/Scan.png')}
          />
          <Text style={styles.textScan}>فحص المحصول</Text>
        </Pressable>
        <View style={styles.information}>
          <View style={styles.teamInformation}>
            <Text style={styles.informationText}>أعضاء الفريق</Text>
            <Image
              resizeMode="contain"
              style={styles.teamIcon}
              source={require('./../assets/Team.png')}
            />
          </View>
          <View style={styles.articleInformation}>
            <Text style={styles.informationText}>المقالات</Text>
            <Image
              resizeMode="contain"
              style={styles.articleIcon}
              source={require('./../assets/Articles.png')}
            />
          </View>
        </View>
        <View style={styles.backgroundLogo}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  farmerImage: {
    width: '75%',
    height: '40%',
    position: 'relative',
    zIndex: 5,
  },
  scanContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#F5EED7',
    width: '100%',
    marginTop: '-25%',
  },
  scan: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    width: 220,
  },
  cameraIcon: {
    width: 60,
    height: 60,
  },
  textScan: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  information: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220,
  },
  teamInformation: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 5,
    borderRadius: 15,
    justifyContent: 'center',
    marginRight: 8,
  },
  articleInformation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#243F88',
    // padding: 8,
    paddingVertical: 5,
    borderRadius: 15,
  },
  informationText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },

  teamIcon: {
    width: 50,
    height: 50,
  },
  articleIcon: {
    width: 50,
    height: 50,
  },
  backgroundLogo: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
  },
  logo: {
    width: 80,
    height: 80,
  },
});
