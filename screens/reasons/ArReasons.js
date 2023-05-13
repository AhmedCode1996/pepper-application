import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
const Reasons = () => {
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
        <Text style={styles.title}> الأسباب ؟ </Text>
        <Text style={styles.subtitle}>
          {' '}
          مرض البقع البكتيرية هو من أكثر الامراض شيوعا في محصول الفلفل بشكل خاص{' '}
        </Text>
        <View style={styles.item}>
          <Text style={styles.number}>1</Text>
          <Text style={styles.itemContent}>
            تتطور البقع البكتيرية بسرعة أكبر خلال فترات درجات الحرارة الدافئة
            والظروف الرطبة الطويلة يتطور المرض بسبب الرطوبة النسبية التي تزيد عن
            85٪ وفترات طويلة من رطوبة الأوراق وموجات الحرارة خاصة عندما تظل
            درجات الحرارة ليلاً فوق 21 درجة مئوية
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>2</Text>
          <Text style={styles.itemContent}>
            فترات قصيرة (ثلاثة أيام أو أكثر) أقل من 40٪ من الرطوبة النسبية ستقلل
            من شدة المرض وتؤخر تطوره. فترات طويلة من انخفاض الرطوبة (على الأقل
            ثلاثة أسابيع) توقفه بشكل لا رجعة فيه حتى لو عادت الظروف الرطبة
            السابقة
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>3</Text>
          <Text style={styles.itemContent}>
            تحدث العدوي في الغالب بسبب البذور الملوثة حتى البذور المجففة المصابة
            التي تم تخزينها في البرد لمدة 10 سنوات يمكن أن تنتج نباتات تظهر
            عليها أعراض البقع البكتيرية. لذلك ، تشكل البذور وسيلة مهمة للبقاء
            وانتشار العامل الممرض
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>4</Text>
          <Text style={styles.itemContent}>
            يمكن أن تتحرك البكتيريا داخل الحقول عن طريق الأمطار التي تحركها
            الرياح وقطرات الري والهباء الجوي والتعامل مع النباتات الرطبة. كلما
            طالت فترة رطوبة النباتات ، زادت فرصة الإصابة
          </Text>
        </View>
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

export default Reasons;

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
    paddingLeft: 5,
    paddingBottom: 15,
    shadowColor: '#000',
    elevation: 2,
  },
  title: {
    fontFamily: 'Tajawal-Bold',
    backgroundColor: '#243F88',
    color: 'white',
    textAlign: 'center',
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 3,
    fontSize: 16,
    position: 'absolute',
    top: -15,
    left: '27%',
  },
  subtitle: {
    fontFamily: 'Tajawal-Bold',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 16,
    fontSize: 14,
  },
  item: {
    position: 'relative',
    paddingRight: 15,
    marginBottom: 25,
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
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: 'Tajawal-Medium',
  },
  logo: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
    shadowColor: '#000',
    elevation: 4,
  },
  logoIcon: {
    width: 60,
    height: 60,
  },
});
