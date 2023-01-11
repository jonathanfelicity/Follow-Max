import {createStackNavigator} from '@react-navigation/stack';



import { 
  CampaignScreen, 
  HomeScreen, 
  ProfileScreen

} from '../screens';
import CoinStoreScreen from '../screens/CoinStoreScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CoinStoreScreen" component={CoinStoreScreen} />
      <Stack.Screen name="CampaignScreen" component={CampaignScreen}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
