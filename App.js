import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";


import Home from './screens/Home';
import Detail from './screens/Detail';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();


export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/font/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/font/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/font/Inter-Medium.ttf"),
    InterRegular: require("./assets/font/Inter-Regular.ttf"),
    InterLight: require("./assets/font/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


