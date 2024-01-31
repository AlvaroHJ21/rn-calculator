import React from 'react';
import {View} from 'react-native';
import CalcDisplay from '../components/calculator/calc-display';
import CalcKeyboard from '../components/calculator/calc-keyboard';
import useCalculator from '../hooks/useCalculator';

export default function CalculatorScreen() {
  const {
    number,
    beforeNumber,
    handleClear,
    handleAddDigitToNumber,
    handleChangeSymbol,
    handleDeleteLastDigit,
    handlePressOperator,
    calculate,
  } = useCalculator();

  return (
    <View style={{flex: 1}}>
      <CalcDisplay mainText={number} smallText={beforeNumber} />
      <CalcKeyboard
        onClear={handleClear}
        onPressNumber={handleAddDigitToNumber}
        onChangeSymbol={handleChangeSymbol}
        onDeleteLastDigit={handleDeleteLastDigit}
        onPressOperator={handlePressOperator}
        onPressEqual={calculate}
      />
    </View>
  );
}
