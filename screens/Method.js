import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
} from 'react-native';

const Method = ({ navigation }) => {
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
          <Text style={styles.number}>1</Text>
          <Text style={styles.itemContent}>
            غسل البذور لمدة 40 دقيقة في كلوروكس المخفف (جزئين من كلوروكس
            بالإضافة إلى ثمانية أجزاء من الماء) فعال في تقليل عدد البكتيريا على
            سطح البذور. ومع ملاحظة ، فإن البكتيريا الموجودة داخل البذور تتأثر
            قليلاً بهذا العلاج{' '}
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>2</Text>
          <Text style={styles.itemContent}>
            يجب فحص عمليات الزرع بانتظام لتحديد الشتلات التي تظهر عليها الأعراض.
            يمكن إزالة عمليات الزرع ذات الأعراض والتخلص منها أو معالجتها
            بالستربتومايسين ، وهذا إذا تم اكتشافها في مرحلة مبكرة جدًا من تطور
            المرض{' '}
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>3</Text>
          <Text style={styles.itemContent}>
            تخلص من الصواني المجاورة لموقع التفشي لتقليل انتشار المرض. ابدأ
            دائمًا بإمدادات ومواد الدفيئة الجديدة أو المطهرة عند زراعة الفلفل.
            يجب غسل الصواني والمقاعد والأدوات وهياكل الدفيئة وتعقيمها بين شتلات
            المحاصيل{' '}
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('NextMethod')}
          style={styles.nextButton}
        >
          <Image
            style={styles.nextButtonImage}
            resizeMode="contain"
            source={require('./../assets/lessThanWhite.png')}
          />
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

export default Method;

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
    paddingBottom: 20,
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
    marginBottom: 30,
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
    top: -22,
    right: 0,
  },
  itemContent: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 16,
  },
  nextButton: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    backgroundColor: '#222221',
    borderRadius: 10,
    paddingHorizontal: 4,
  },
  nextButtonImage: {
    width: 22,
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
