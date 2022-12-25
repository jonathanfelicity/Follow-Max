import {useState} from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors, images } from '../constants';

const slides = [
  {
    id: 1,
    title: 'Disable Two Factor Authentication',
    descreption: 'In order to use our app you will have to disable two factor authentication.',
    image: images.authentication,
  },
  {
    id: 2,
    title: 'Login with your instagram credentials',
    descreption: 'Don\'t worry this is safe with our app as we have end to end encryption and all your information is saved on your device ',
    image: images.login,
  },
  {
    id: 3,
    title: 'Get instagram engagement fast',
    descreption: 'We will bring your socail media back to live',
    image: images.followers,
  },
];

const WelcomeScreen = ({ navigation }) => {
  const [showHomePage, setShowHomePage] = useState(false);
  const buttonLabel = label => {
    return (
      <View>
        <Text style={{ 
          color: colors.darkBlue, 
          fontWeight: '600', 
          fontSize: 16
          }}>{label}</Text>
      </View>
    );
  };
  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View style={[ styles.container, {backgroundColor: colors.white } ]}>
              <Image
                style={{
                  width: Dimensions.get('window').width - 20,
                  height: 400,
                  resizeMode: 'contain',
                }}
                source={item.image}
              />
              <Text style={{fontWeight: 'bold', fontSize: 24, color: colors.black, textAlign: 'center'}}>
                {item.title}
              </Text>
              <Text>{item.descreption}</Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: colors.yellow,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={()=>buttonLabel("Skip")}
        renderDoneButton={()=>buttonLabel("Done")}
        onDone={(()=>{
          navigation.navigate('LoginScreen')
        })}
      />
    );
  }
  return (
    <View style={[styles.container, {backgroundColor: '#F5EDE2'}]}>
      <Text>Hello from me</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
