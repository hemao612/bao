import * as React from 'react';
import {ImageBackground, View, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import background from "../assets/images/splash.jpg";

export default class LoginScreen extends React.Component {
  babyLogin = async () => {
    await AsyncStorage.setItem('user', '2');
    const {navigation} = this.props;
    navigation.navigate('Home');
  };

  brotherLogin = async () => {
    const {navigation} = this.props;
    await AsyncStorage.setItem('user', '1');
    navigation.navigate('Home');
  };

  render() {
    return (
      <ImageBackground source={background} style={{width: "100%", height: "100%"}}>
        <TouchableOpacity onPress={this.babyLogin} style={{left: "13%", top: "70%", width: 100, height: 50}}>
          <Image
            style={{width: 80, height: 80}}
            source={require('../assets/images/baby.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.brotherLogin} style={{left: "60%", top: "50%", width: 100, height: 50}}>
          <Image
            style={{width: 80, height: 80}}
            source={require('../assets/images/brother.jpg')}
          />
        </TouchableOpacity>
        <View style={{left: 0, top: "60%", background: 'red', height: 100, alignSelf: 'center'}}>

        </View>
      </ImageBackground>
    );
  }
}