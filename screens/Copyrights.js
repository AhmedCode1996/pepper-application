import { useEffect } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native';

const Copyrights = () => {
  
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="stretch"
      source={require('../assets/Copyrights.png')}
    >
      <View style={styles.content}>
        <Text style={styles.introText}>
          هذا التطبيق تم تنفيذه من ضمن مشروع التخرج الخاص بالفرقة الرابعة كلية
          الحاسبات وتكنولوجيا المعلومات{' '}
        </Text>
        <Text style={styles.universityText}>
          الجامعة المصرية للتعلم الإلكترونى الأهلية
        </Text>
        <View style={styles.list}>
          <FlatList
            data={[
              { key: 'أعضاء الفريق' },
              { key: 'أحمد محمد كامل عبد الهادى جميل' },
              { key: 'بهاء محمود عبد الحافظ' },
              { key: 'أحمد خالد عبد الوهاب السيد حرب' },
              { key: 'أحمد ناصر أحمد إبراهيم' },
              { key: 'عبد الخالق محمد محمود' },
              { key: 'عبد العزيز أسامة عبد العزيز' },
              { key: 'حسن محمد حسن أحمد نصر' },
              { key: 'قديس وردى منصور' },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>
        <Text style={styles.contactText}>
          يمكنكم التواصل مع الفريق عبر الإيميل الإلكترونى
        </Text>
        <Text style={styles.contactEmail}>Contact@hafedk.org</Text>
        <Text style={styles.copyrightText}>
          All Copyright reserved@2022-2023
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Copyrights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: "58%",
    marginBottom: 5,
  },

  introText: {
    fontWeight: 'bold',
  },
  universityText: {
    color: '#243F88',
    fontWeight: 'bold',
  },
  list: {
    fontWeight: 'bold',
    height: '45%',
    borderColor: '#243F88',
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 5,
    marginTop: 10,
  },
  item: {
    borderBottomColor: '#243F88',
    borderBottomWidth: 2,
    textAlign: 'center',
    paddingVertical: 3,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  contactText: {
    fontWeight: 'bold',
  },
  contactEmail: {
    color: '#243F88',
    fontWeight: 'bold',
    fontSize: 11,
  },
  copyrightText: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 5,
    marginTop: 10,
  },
});
