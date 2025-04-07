import {Text, TouchableOpacity, View} from 'react-native';
import {HomeScreenProps} from '../../@types/home';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  // const navigation = useNavigation();
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <Text>Product Screen</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
              <Text>Notifications</Text>
          </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;
