import {
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity
  } from 'react-native';



import { Loader, Menu, Tool } from '../components'
import Icon from 'react-native-vector-icons/Ionicons';
import { useContext, useEffect, useState } from 'react';


  
  
import { styles, option, tools } from '../res/index'
import { colors, icons } from '../constants'
import { UserContext } from '../context/UserContext';


  
  const HomeScreen = ({ navigation }) => {
    const { userInfor } = useContext(UserContext)
    const [isVisible, setIsvisible ] = useState(false)

    const menuHandler = (id) =>{
        switch(id){
          case 1:
            navigation.navigate('CampaignScreen')
          break

          case 6:
              navigation.navigate('MineCoinScreen')
            break
          
          case 3:
                break
          default:
            console.log('am confuse bro')
        }
    }

    useEffect(()=>{
      const timer = setTimeout(()=>{
          setIsvisible(true)
      }, 2000)

      return ()=>clearTimeout(timer)
    }, [])
    if(!isVisible){
      return <Loader/>
    }
    return (
      <View style={[ styles.container, { marginBottom: 20, } ]}>
       
        <TouchableOpacity style={{ alignSelf: 'flex-end', width: 45, height: 45, borderRadius: 45/2, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={()=>navigation.navigate('ProfileScreen')}
        >
          {isVisible && (
            <Image source={{ uri:userInfor.profile_pic_url }}  style={[{height: 40, width: 40, borderRadius:40/2}]}/>
          )}
            

        </TouchableOpacity>
        {isVisible && (

         <Text style={[ styles.h1, { fontWeight: 'normal', } ]}>
          
            Hello, <Text style={[ styles.h1, { color: colors.black, fontWeight: '500' } ]}>{ userInfor.username }</Text> 
          </Text>

        )}
         
         <View style={{ marginTop: 30}}>
          <Text style={{ fontSize: 20, fontWeight: '500', color: colors.darkBlue}}>Overview</Text>
          <View style={{width: '100%', height:100, backgroundColor: colors.grey, borderRadius: 20, alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>

              <View>
                  
                <Image style={{ width: 30, height: 30 }} source={icons.coin} />
                <Text style={{ fontSize: 24, color: colors.black, fontWeight: 'bold'}}>2000.0</Text>
                  
                <Text style={{ fontSize: 16, color: colors.darkBlue}}>Current Coin Balance</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={()=> navigation.navigate('CoinStoreScreen')}
                  style={{ width: 50, height: 50, backgroundColor: colors.yellow, borderRadius: 50/2, justifyContent: 'center', alignItems: 'center'}}
                 
                >
                <Icon name="add" size={30} color={ colors.black } />
                </TouchableOpacity>
              </View>

          </View>
         </View>
        <View style={[{ marginTop: 30 }]}>
        <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 10, color: colors.darkBlue}}>Menu</Text>
        
          <FlatList
            columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 20}}
            data={option}
            renderItem={ ({item})=>(
              <Menu 
              onPress={()=> menuHandler(item.id)}
                title={item.title}
                color={item.color}
                icon={item.icon}
              />
            ) }
            numColumns={3}
            keyExtractor={option=>option.id}
          />
        </View>

      </View>
  
    );
  };
  
  
  
  export default HomeScreen
  