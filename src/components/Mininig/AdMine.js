import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { colors } from "../../constants"
import { Banner } from "../../screens/Ads"
import React, { useEffect, useState } from 'react';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

const DIAMETER = 200



const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

  
const AdMine = () => {
    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setLoaded(true);
    });
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return
  }
    return (
        <View style={{ margin: 20 }}>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 32, fontWeight: "bold", color: colors.black }}>Watch few seconds ads.</Text>
                <Text style={{ fontSize: 16 }}>Watch few seconds ads to mine more coins to create your own campaigns.</Text>
            </View>


            <TouchableOpacity 
                style={{ width: DIAMETER, height: DIAMETER, borderRadius: DIAMETER / 2, backgroundColor: colors.yellow, justifyContent: "center", alignItems: "center", alignSelf: "center" }} 
                onPress={()=>{
                    rewarded.show()
                }}
            >
                    <Text style={{ fontWeight: "bold", fontSize: 32, color: colors.black }}>Watch Ads</Text>
            </TouchableOpacity>


            <Banner />
            <Banner />
            <Banner />
            <Banner />
            <Banner />
        </View>
    )
}


export default AdMine