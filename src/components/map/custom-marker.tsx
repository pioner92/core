import {Callout, Marker} from 'react-native-maps';
import FastImage from 'react-native-fast-image';
import {ImageRepository} from '../../assets/image-repository';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Config} from '../../config';
import {windowWidth} from '../../system/helpers/window-size';

const {Color, UIStyles} = Config;

interface ICustomMarker {
  latitude: number;
  addMarkerRef: (item: Marker | null) => void;
  longitude: number;
  isEnabledCallout?: boolean;
  calloutText?: string;
  onPressMarker?: () => void;
}

export const CustomMarker: React.FC<ICustomMarker> = React.memo(
  ({
    isEnabledCallout = true,
    addMarkerRef,
    calloutText,
    onPressMarker,
    ...props
  }) => {
    const onPress = () => {
      console.log('PRESS');
    };

    return (
      <Marker
        ref={val => addMarkerRef(val)}
        onPress={onPressMarker}
        coordinate={props}
        key={Math.random().toString()}>
        <FastImage
          source={ImageRepository.CustomMarker}
          style={{width: 40, height: 40}}
          resizeMode={'contain'}
        />
        {isEnabledCallout ? (
          <Callout tooltip>
            <View style={styles.callout}>
              <Text>{calloutText}</Text>
            </View>
          </Callout>
        ) : null}
      </Marker>
    );
  },
);

const styles = StyleSheet.create({
  callout: {
    width: windowWidth / 2,
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    ...UIStyles.shadowMD,
  },

  text: {
    ...UIStyles.font13,
    color: Color.DARK,
  },
});
