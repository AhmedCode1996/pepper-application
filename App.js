import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ArScan from "./screens/scan/ArScan";
import EnScan from "./screens/scan/EnScan";
import ArFarmScan from "./screens/farmScan/ArFarmScan";
import EnFarmScan from "./screens/farmScan/EnFarmScan";
import ArScanResult from "./screens/scanResult/ArScanResult";
import EnScanResult from "./screens/scanResult/EnScanResult";
import ArContact from "./screens/contact/ArContact";
import EnContact from "./screens/contact/EnContact";
import ArCopyrights from "./screens/copyrights/ArCopyrights";
import EnCopyrights from "./screens/copyrights/EnCopyrights";
import ArProblems from "./screens/problems/ArProblems";
import EnProblems from "./screens/problems/EnProblems";
import EnBehave from "./screens/behave/EnBehave";
import ArBehave from "./screens/behave/ArBehave";
import ArReasons from "./screens/reasons/ArReasons";
import EnReasons from "./screens/reasons/EnReasons";
import ArMethod from "./screens/method/ArMethod";
import EnMethod from "./screens/method/EnMethod";
import ArNextMethod from "./screens/nextMethod/ArNextMethod";
import EnNextMethod from "./screens/nextMethod/EnNextMethod";

import { Context } from "./data";
import { RootSiblingParent } from "react-native-root-siblings";
import { I18nManager } from "react-native";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }, []);

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Context>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ArScan"
              component={ArScan}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="EnScan"
              component={EnScan}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ArFarmScan"
              component={ArFarmScan}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="EnFarmScan"
              component={EnFarmScan}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ArScanResult"
              component={ArScanResult}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="EnScanResult"
              component={EnScanResult}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ArContact"
              component={ArContact}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="EnContact"
              component={EnContact}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ArCopyrights"
              component={ArCopyrights}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="EnCopyrights"
              component={EnCopyrights}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ArProblems"
              component={ArProblems}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="EnProblems"
              component={EnProblems}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ArBehave"
              component={ArBehave}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="EnBehave"
              component={EnBehave}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ArReasons"
              component={ArReasons}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="EnReasons"
              component={EnReasons}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ArMethod"
              component={ArMethod}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="EnMethod"
              component={EnMethod}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ArNextMethod"
              component={ArNextMethod}
              options={{ animation: "slide_from_left" }}
            />
            <Stack.Screen
              name="EnNextMethod"
              component={EnNextMethod}
              options={{ animation: "slide_from_right" }}
            />
          </Stack.Navigator>
        </Context>
      </NavigationContainer>
    </RootSiblingParent>
  );
};

export default App;
