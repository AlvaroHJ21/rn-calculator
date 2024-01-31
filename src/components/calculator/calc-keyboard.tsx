import React from 'react';
import {StyleSheet, View} from 'react-native';
import CalcButton from './calc-button';
import {globalStyles} from '../../theme/appTheme';

interface Props {
  onClear(): void;
  onPressNumber(number: string): void;
  onChangeSymbol(): void;
  onDeleteLastDigit(): void;
  onPressOperator(operator: string): void;
  onPressEqual(): void;
}

export default function CalcKeyboard(props: Props) {
  const {
    onClear,
    onPressNumber,
    onChangeSymbol,
    onDeleteLastDigit,
    onPressOperator,
    onPressEqual,
  } = props;

  return (
    <View style={style.container}>
      <View style={globalStyles.row}>
        <CalcButton text="C" color="light" onPress={onClear} />
        <CalcButton text="+/-" color="light" onPress={onChangeSymbol} />
        <CalcButton text="del" color="light" onPress={onDeleteLastDigit} />
        <CalcButton text="/" color="especial" onPress={onPressOperator} />
      </View>

      <View style={globalStyles.row}>
        <CalcButton text="7" onPress={onPressNumber} />
        <CalcButton text="8" onPress={onPressNumber} />
        <CalcButton text="9" onPress={onPressNumber} />
        <CalcButton text="x" color="especial" onPress={onPressOperator} />
      </View>

      <View style={globalStyles.row}>
        <CalcButton text="4" onPress={onPressNumber} />
        <CalcButton text="5" onPress={onPressNumber} />
        <CalcButton text="6" onPress={onPressNumber} />
        <CalcButton text="-" color="especial" onPress={onPressOperator} />
      </View>

      <View style={globalStyles.row}>
        <CalcButton text="1" onPress={onPressNumber} />
        <CalcButton text="2" onPress={onPressNumber} />
        <CalcButton text="3" onPress={onPressNumber} />
        <CalcButton text="+" color="especial" onPress={onPressOperator} />
      </View>

      <View style={globalStyles.row}>
        <CalcButton text="0" colSpan={2} onPress={onPressNumber} />
        <CalcButton text="." onPress={onPressNumber} />
        <CalcButton text="=" color="especial" onPress={onPressEqual} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderColor: 'white',
    padding: 8,
  },
});
