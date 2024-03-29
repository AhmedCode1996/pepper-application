import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Behave = () => {
  const [fontsLoaded] = useFonts({
    'Tajawal-Medium': require('../../assets/fonts/Tajawal/Tajawal-Medium.ttf'),
    'Tajawal-Bold': require('../../assets/fonts/Tajawal/Tajawal-Bold.ttf'),
    'Tajawal-Regular': require('../../assets/fonts/Tajawal/Tajawal-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={require('../../assets/background.png')}
    >
      <View style={styles.content}>
        <Text style={styles.title}>تتصرف ازاى ؟ </Text>
        <Text style={styles.subTitle}>
          في حالة إصابة محصول الفلفل الخاص بك بالبقع البكتيرية وقمت بتحديدها في
          مراحلها الاولي باستخدام التطبيق أو باي طريقة اخري يمكنك القيام بالتالي{' '}
        </Text>
        <Text style={[styles.item]}>
          قم بإزالة الأجزاء المصابة من النبات وتخلص منها. إذا تأثر جزء صغير فقط
          من النبات ، قم بتقليمه بعيدًا
        </Text>
        <Text style={styles.item}>
          رش بمبيد فطري عضوي في المحلول الموجه. يمكن أن تساعد في منع انتشار
          المرض عن طريق قتل الجراثيم. ملحوظة: كن حذرًا مع مبيدات الفطريات
          النحاسية - لا تضعها على بشرتك لأنها قد تسبب حروقًا
        </Text>
        <Text style={styles.item}>
          قم بتدوير محاصيل الفلفل في مكان مختلف كل عام لمنع الجراثيم من التراكم
          بأعداد كبيرة
        </Text>
        <Text style={[styles.item, styles.noMargin]}>
          كن دائمًا نظيفًا قبل التوجه إلى الصوبة لتجنب انتشار الجراثيم من نبات
          إلى آخر. أيضا ، قم بالري في قاع النبات لتجنب الماء من الجلوس على
          الأوراق
        </Text>
      </View>
      <View style={styles.logo}>
        <Image
          resizeMode="contain"
          source={require('../../assets/logo.png')}
          style={styles.logoIcon}
        />
      </View>
    </ImageBackground>
  );
};

export default Behave;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
  },
  title: {
    fontFamily: 'Tajawal-Bold',
    backgroundColor: '#243F88',
    color: 'white',
    textAlign: 'center',
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 3,
    fontSize: 15,
    position: 'absolute',
    top: -15,
    left: '22%',
  },
  content: {
    backgroundColor: '#F7F8FA',
    width: '90%',
    borderRadius: 30,
    padding: 10,
    paddingTop: 25,
    paddingBottom: 60,
    shadowColor: '#000',
    elevation: 2,
  },
  subTitle: {
    fontFamily: 'Tajawal-Bold',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 13,
    lineHeight: 18,
  },
  item: {
    fontFamily: 'Tajawal-Medium',
    marginBottom: 15,
    fontSize: 14,
    textAlign: 'center',
    // lineHeight: 18,
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
  noMargin: {
    marginBottom: 0,
  },
});
