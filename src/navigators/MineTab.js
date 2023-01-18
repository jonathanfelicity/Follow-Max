import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MineCoinScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();



const MineTab = () =>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="MineCoinScreen" component={MineCoinScreen} />
      
    </Tab.Navigator>
  );
}


export default MineTab