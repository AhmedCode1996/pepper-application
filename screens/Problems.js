<script src="http://localhost:8097"></script>;
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  Pressable,
} from 'react-native';
const Problems = ({ navigation }) => {
  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.backgroundContainer}
      source={require('../assets/problems.png')}
    >
      <View style={styles.clickButton}>
        <Image
          style={styles.clickImage}
          resizeMode="contain"
          source={require('./../assets/أضغط.png')}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Behave')}
        style={styles.behaveButton}
      >
        <Image
          style={styles.behaveImage}
          resizeMode="contain"
          source={require('./../assets/howbehave.png')}
        />
      </Pressable>
      <View style={styles.methodsButton}>
        <Pressable onPress={() => navigation.navigate('Method')}>
          <Image
            style={styles.methodsImage}
            resizeMode="contain"
            source={require('./../assets/methods.png')}
          />
        </Pressable>
      </View>
      <View style={styles.reasonsButton}>
        <Pressable onPress={() => navigation.navigate('Reasons')}>
          <Image
            style={styles.reasonsImage}
            resizeMode="contain"
            source={require('./../assets/reasons.png')}
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Problems;

const styles = StyleSheet.create({
  backgroundContainer: {
    height: '100%',
    position: 'relative',
  },
  clickButton: {
    position: 'absolute',
    top: -20,
    left: '20%',
  },
  clickImage: {
    width: 200,
  },
  behaveButton: {
    position: 'absolute',
    top: '-18%',
  },
  behaveImage: {
    width: 150,
  },
  methodsButton: {
    right: '-38%',
    top: '-8%',
    width: 50,
    height: 50,
  },
  methodsImage: {
    width: 150,
  },
  reasonsButton: {
    position: 'absolute',
    right: 0,
    top: '5%',
    width: 120,
    height: 50,
  },
  reasonsImage: {
    width: '100%',
  },
});
