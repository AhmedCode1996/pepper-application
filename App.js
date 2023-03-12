import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Scan from './screens/Scan';
import FarmScan from './screens/FarmScan';
import ScanResult from './screens/ScanResult';
import Contact from './screens/Contact';
import Copyrights from './screens/Copyrights';
import Problems from './screens/Problems';
import Behave from './screens/Behave';
import Reasons from './screens/Reasons';
import Method from './screens/Method';
import NextMethod from './screens/NextMethod';
import { Context } from './data';
// import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Context>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Scan" component={Scan} />
          <Stack.Screen name="FarmScan" component={FarmScan} />
          <Stack.Screen name="ScanResult" component={ScanResult} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Copyrights" component={Copyrights} />
          <Stack.Screen name="Problems" component={Problems} />
          <Stack.Screen name="Behave" component={Behave} />
          <Stack.Screen name="Reasons" component={Reasons} />
          <Stack.Screen name="Method" component={Method} />
          <Stack.Screen name="NextMethod" component={NextMethod} />
        </Stack.Navigator>
      </Context>
    </NavigationContainer>
  );
};

export default App;
