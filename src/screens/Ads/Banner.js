import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { string } from '../../config';
const adUnitId = __DEV__ ? TestIds.BANNER : string.BANNER_ADS_KEY;

const Banner = ()=> {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}


export default Banner