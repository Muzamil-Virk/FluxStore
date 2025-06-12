import {View, Text, Image} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import Butons from '../../components/commons/Butons';
import {useNavigation} from '@react-navigation/native';

interface PropType {
  ison?: any;
  isOnpress?: () => void;
}

export default function RBsheetss(props: PropType) {
  const {isOnpress, ison} = props;

  const navigation = useNavigation();
  return (
    <RBSheet
      ref={ison}
      useNativeDriver={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}>
      <View style={{flex: 1}}>
        <Image
          style={{width: 47, height: 57}}
          source={require('../../assists/icons/Success.png')}></Image>
        <Text>Your password has been changed</Text>
        <Text>Welcome back! Discover now!</Text>
        <Butons text={'Browse home'} onpressNavigation={isOnpress} />
      </View>
    </RBSheet>
  );
}
