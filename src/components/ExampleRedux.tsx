import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {useState} from 'react';
import {
  increment,
  decrement,
  incrementByNumber,
} from '../store/slices/exampleSlice.ts';

const ExampleRedux = () => {
  const [number, setNumber] = useState('');
  const value = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();
  return (
    <>
      <View
        style={{
          marginHorizontal: 8,
          marginVertical: 20,
        }}>
        <Text>Example Redux</Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginHorizontal: 8,
          }}>
          Result: {value} --- {number}
        </Text>
      </View>

      <View>
        <Button
          title={'Збільшити на 1'}
          onPress={() => {
            dispatch(increment());
          }}
        />
        <Button
          title={'Зменшити на 1'}
          onPress={() => {
            dispatch(decrement());
          }}
        />
        <TouchableOpacity
          style={{
            marginHorizontal: 8,
            marginVertical: 8,
          }}
          onPress={() => {
            dispatch(incrementByNumber(16));
          }}>
          <Text style={{fontSize: 16}}>Додати 16</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'red',
          }}
          value={number}
          keyboardType="numeric"
          placeholder={'Введіть цифру'}
          onChangeText={setNumber}
        />
        <TouchableOpacity onPress={() => {
            dispatch(incrementByNumber(Number(number)));
        }}>
          <Text style={{fontSize: 16}}>Додати</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ExampleRedux;
