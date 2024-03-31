import * as React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { store } from './src/redux/store/configureStore';
import { QrCodeScreen } from './src/screens/QrCodeScreen';
import { CheckInScreen } from './src/screens/CheckInScreen';
import { CheckOutScreen } from './src/screens/CheckOutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="QrCode" component={QrCodeScreen} />
          <Stack.Screen name="CheckIn" component={CheckInScreen} />
          <Stack.Screen name="CheckOut" component={CheckOutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
