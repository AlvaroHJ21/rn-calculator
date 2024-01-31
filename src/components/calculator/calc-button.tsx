import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../theme/appTheme';

type colors = 'default' | 'light' | 'especial';

interface Props {
  text: string;
  color?: colors;
  colSpan?: 1 | 2;
  onPress?(text?: string): void;
}

export default function CalcButton(props: Props) {
  const {text, color = 'default', colSpan = 1, onPress} = props;

  const backgroundColor: Record<colors, string> = {
    default: '#333',
    light: 'gray',
    especial: '#3652AD',
  };

  return (
    <View style={colSpan == 2 ? globalStyles.col2 : globalStyles.col}>
      <View style={{padding: 4}}>
        <TouchableOpacity
          onPress={() => onPress?.(text)}
          style={{...style.button, backgroundColor: backgroundColor[color]}}>
          <Text style={style.buttonText}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});
