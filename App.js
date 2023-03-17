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
import { RootSiblingParent } from 'react-native-root-siblings';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Context>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="Scan"
              component={Scan}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="FarmScan"
              component={FarmScan}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="ScanResult"
              component={ScanResult}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="Contact"
              component={Contact}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="Copyrights"
              component={Copyrights}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="Problems"
              component={Problems}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="Behave"
              component={Behave}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="Reasons"
              component={Reasons}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="Method"
              component={Method}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="NextMethod"
              component={NextMethod}
              options={{ animation: 'slide_from_left' }}
            />
          </Stack.Navigator>
        </Context>
      </NavigationContainer>
    </RootSiblingParent>
  );
};

export default App;
