import {createStackNavigator} from '@react-navigation/stack';



import { 
  BuyCoinScreen, 
  CampaignScreen, 
  HomeScreen, 
  ProfileScreen

} from '../screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BuyCoinScreen" component={BuyCoinScreen} />
      <Stack.Screen name="CampaignScreen" component={CampaignScreen}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
