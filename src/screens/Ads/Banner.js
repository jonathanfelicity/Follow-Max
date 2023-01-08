import React from 'react';
import { View } from 'react-native';
import GoogleMobileAds from 'react-native-google-mobile-ads';

const Banner = () => {
  return (
    <View>
      <GoogleMobileAds.Banner
        adSize="banner"
        adUnitID="ca-app-pub-xxxxxxxxxxxxx/xxxxxxxxxx"
        testDevices={[GoogleMobileAds.SimulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
    </View>
  );
};

export default Banner;
