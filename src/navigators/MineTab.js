import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MineCoinScreen } from '../screens';
import { FollowMine, LikeMine,  AdMine} from '../components';

const Tab = createMaterialTopTabNavigator();



const MineTab = () =>{
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="FollowMine" component={FollowMine} />
      <Tab.Screen name="LikeMine" component={LikeMine} />
      <Tab.Screen name="AdMine" component={AdMine} />
      
    </Tab.Navigator>
  );
}


export default MineTab