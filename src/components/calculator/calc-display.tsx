import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  mainText: string;
  smallText?: string;
}

export default function CalcDisplay(props: Props) {
  const {mainText, smallText} = props;
  return (
    <View style={style.container}>
      <View style={{flex: 1}} />
      <Text style={style.smallText}>{smallText}</Text>
      <Text style={style.text} numberOfLines={1} adjustsFontSizeToFit>
        {mainText}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    // borderRadius: 24,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    padding: 8,
  },

  text: {
    fontSize: 56,
    textAlign: 'right',
  },
  smallText: {
    fontSize: 32,
    textAlign: 'right',
    color: 'rgba(255,255,255,0.5)',
  },
});
