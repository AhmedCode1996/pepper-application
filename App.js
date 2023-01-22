import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Scan from './screens/Scan';
import FarmScan from './screens/FarmScan';
import ScanResult from './screens/ScanResult';
import Contact from './screens/Contact';
import Copyrights from './screens/Copyrights';
// import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Copyrights"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FarmScan" component={FarmScan} />
        <Stack.Screen name="ScanResult" component={ScanResult} />
        <Stack.Screen name="Scan" component={Scan} /> */}
        {/* <Stack.Screen name="Contact" component={Contact} /> */}
        <Stack.Screen name="Copyrights" component={Copyrights} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
