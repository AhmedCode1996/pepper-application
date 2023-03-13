import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
} from 'react-native';

const NextMethod = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={require('../assets/background.png')}
    >
      <View style={styles.content}>
        <Text style={styles.title}> طرق العلاج</Text>
        <Text style={styles.subtitle}>
          {' '}
          يمكنك استخدام الطرق التالية لتقليل بقاء البكتيريا وانتشارها وتكاثرها
          وتقليل إصابة النباتات{' '}
        </Text>
        <View style={styles.item}>
          <Text style={styles.number}>4</Text>
          <Text style={styles.itemContent}>
            تجنب استخدام الري بالرش ، ولا تعمل في الحقول عندما تكون النباتات
            رطبة ، حيث يمكن أن ينتشر المرض بسهولة على ملابس العمال والأدوات
            والمعدات المستخدمة عند وجود الرطوبة الحرة{' '}
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>5</Text>
          <Text style={styles.itemContent}>
            يوصى بتناوب لمدة عام واحد على الأقل بعيدًا عن الفلفل والمحاصيل
            الباذنجانية الأخرى ، ويفضل تناوب عام واحد. يجب على المزارعين أيضًا
            تجنب زراعة الفلفل والطماطم والباذنجان والبطاطس بالقرب من بعضهم البعض
            خلال الموسم{' '}
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>6</Text>
          <Text style={styles.itemContent}>
            استخدام بذور معتمدة خالية من مسببات الأمراض وزرع خالي من الأمراض
            لمنع دخول العامل الممرض إلى الصوبات الزراعية{' '}
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={styles.homeButton}
        >
          <Text style={styles.homeText}>الصفحة الرئيسية</Text>
        </Pressable>
      </View>
      <View style={styles.logo}>
        <Image
          resizeMode="contain"
          source={require('./../assets/logo.png')}
          style={styles.logoIcon}
        />
      </View>
    </ImageBackground>
  );
};

export default NextMethod;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 20,
  },
  content: {
    backgroundColor: '#F7F8FA',
    width: '90%',
    borderRadius: 25,
    paddingTop: 25,
    paddingRight: 10,
    paddingLeft: 10,
    shadowColor: '#000',
    elevation: 3,
  },
  title: {
    backgroundColor: '#243F88',
    color: 'white',
    textAlign: 'center',
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 3,
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    top: -15,
    left: '20%',
  },
  subtitle: {
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18,
  },
  item: {
    position: 'relative',
    paddingRight: 15,
    marginBottom: 35,
  },
  number: {
    backgroundColor: '#243F88',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 100,
    fontWeight: 'bold',
    top: -23,
    right: 5,
  },
  itemContent: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  homeButton: {
    backgroundColor: '#222221',
    borderRadius: 10,
    alignSelf: 'flex-end',
    bottom: 10,
    right: 5,
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  homeText: {
    color: 'white',
  },
  logo: {
    position: 'absolute',
    zIndex: 100,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
  },
  logoIcon: {
    width: 60,
    height: 60,
  },
});
