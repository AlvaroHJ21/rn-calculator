import {useRef, useState} from 'react';

export default function useCalculator() {
  const [number, setNumber] = useState('0');
  const [beforeNumber, setBeforeNumber] = useState('0');
  const operatorRef = useRef('');

  function handleClear() {
    setNumber('0');
    setBeforeNumber('0');
  }

  function handleAddDigitToNumber(newDigit: string) {
    // no acepta colocar . si ya hay un .
    if (number.includes('.') && newDigit === '.') return;

    if (number === '0' || number === '-0') {
      // no acepta colocar 0's si ya hay un 0
      if (newDigit === '0') return;

      // reemplaza el 0 por el nuevo digito si es diferente de .
      if (newDigit != '.') {
        if (number === '-0') {
          return setNumber('-' + newDigit);
        }
        return setNumber(newDigit);
      }
    }

    setNumber(number + newDigit);
  }

  function handleChangeSymbol() {
    setNumber(prev => {
      if (prev.includes('-')) {
        return prev.replace('-', '');
      } else {
        return '-' + prev;
      }
    });
  }

  function handleDeleteLastDigit() {
    if (number.length === 1) return setNumber('0');
    if (number.length === 2 && number.includes('-')) return setNumber('0');
    setNumber(number.slice(0, -1));
  }

  function handlePressOperator(operator: string) {
    setBeforeNumber(number);
    setNumber('0');
    operatorRef.current = operator;
  }

  function calculate() {
    switch (operatorRef.current) {
      case '+':
        setNumber((parseFloat(beforeNumber) + parseFloat(number)).toString());
        break;
      case '-':
        setNumber((parseFloat(beforeNumber) - parseFloat(number)).toString());
        break;
      case 'x':
        setNumber((parseFloat(beforeNumber) * parseFloat(number)).toString());
        break;
      case '/':
        setNumber((parseFloat(beforeNumber) / parseFloat(number)).toString());
        break;
    }

    setBeforeNumber('0');
    operatorRef.current = '';
  }

  return {
    number,
    beforeNumber,
    handleClear,
    handleAddDigitToNumber,
    handleChangeSymbol,
    handleDeleteLastDigit,
    handlePressOperator,
    calculate,
  };
}
