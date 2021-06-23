import * as React from 'react';
import { View, Text, Image, TextInput, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import styles from "./styles";



import { MaterialCommunityIcons } from '@expo/vector-icons';

import Carts from "./carts";






function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, backgroundColor: '#191919'  }}>
      <Image
      style={{height: '75%', width: '100%'}}
      source={require('./assets/home.png')}
      />
      <Text style={{flex: 1,color: 'deepskyblue', fontSize: 40, justifyContent: 'center', textAlign: 'center',  
            textShadowColor: 'rgba(255, 255,  255, 0.50)',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 14}}>Entrar al Shop</Text>
      
      <Button
        onPress={() => navigation.navigate('Loguear')}
        title="Login" color='#602D0F' type="outline"
        buttonStyle={{
          margin: 5,
          borderRadius: 30,
        }}
      />
      <Button
        onPress={() => navigation.navigate('Register')}
        title="Register"  type='Clear'  color='white'
        buttonStyle={{
          margin: -5,
          borderRadius: 30,
        }}
      />
    </View>
  );
}

//llamo style para default, puedo cambiar los hijos adentro
function Input(props) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
}



function Login({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#191919' , width: '100%'}}>
      <Text style={[styles.textWithShadow, {flex: 1, fontSize: 30, color: 'black',justifyContent: 'center', textAlign: 'center' , marginTop: -45, backgroundColor: '#FBEEE6', paddingTop: 60, marginBottom: -90}]}>
        <MaterialCommunityIcons name="dog" size={25} color="#000" /> PetShop</Text>
      <ImageBackground source={require('./assets/login.png')} style={{height: '75%', width: '100%'}} />
        <Text style={[styles.textWithShadow, {flex: 1, fontSize: 30, color: '#ffffff', marginTop: -370}]}></Text>
        <View>
          <Input  style={{ flex: 1, fontSize: 30, color: '#FBEEE6'}}/>
          <Icon
            name='envelope-o'
            size={24}
            color='#FBEEE6'>
          <Text style={[styles.textWithShadow,{textShadowColor: 'rgba(0, 191,  255, 1)',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 14}]}>    Ingrese e-mail:</Text></Icon>
          <Input  autoCompleteType='email' style={{
                  flex: 1,
                  color: 'black',
                  backgroundColor: 'white',
                  borderColor: 'rgba(0, 191,  255, 0.25)',
                  borderWidth: 7,
                  margin: 5,
                  borderRadius: 10,
                  padding: 15,
                  fontSize: 14
          }}/>
          <Icon
            name='unlock'
            size={24}
            color='#FBEEE6'>
          <Text style={[styles.textWithShadow,{textShadowColor: 'rgba(0, 191,  255, 1)',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 14}]}>    Ingrese Password:</Text></Icon>
          <Input secureTextEntry style={{
                  flex: 1,
                  color: 'black',
                  backgroundColor: 'white',
                  borderColor: 'rgba(0, 191,  255, 0.25)',
                  borderWidth: 7,
                  margin: 5,
                  borderRadius: 10,
                  padding: 15,
                  fontSize: 14
          }}/>
          <Text margin='12'></Text>
          <Button onPress={() => navigation.navigate('Comprar')} title=" Entrar" type="outline" color='#FBEEE6' style={styles.textWithShadow}
          buttonStyle={{
            margin: 5,
            borderRadius: 10,
          }}  icon={
            <Icon
              name="shopping-cart"
              size={20}
              color="#FBEEE6"
            />}
          />
          <Text  onPress={() => navigation.navigate('Register')} style={{color: 'gray', fontSize: 15, justifyContent: 'center', textAlign: 'center' , marginBottom: 30, marginTop: -5}}>Crear cuenta</Text>
          </View>
    </View>
  );
}


//onPress={() => navigation.goBack()}

function Register({ navigation }) {
  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#191919'   }}>
      <ImageBackground source={require('./assets/register.png')} style={{height: '75%', width: '100%'}}/>
        <Text style={[styles.textWithShadow, {flex: 1, fontSize: 15, color: '#FBEEE6', marginTop: '-110%', paddingBottom: 20, textShadowColor: 'rgba(0, 191,  255, 1)',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 20}]}><MaterialCommunityIcons name="dog" size={25} color="white" /> Registrar</Text>
        <View>
        <Input  style={{ flex: 1, fontSize: 30, color: '#FBEEE6'}}/>
          <Icon
            name='user'
            size={24}
            color='#FBEEE6'
            >
          <Text style={[styles.textWithShadow,{textShadowColor: 'rgba(0, 191,  255, 1)',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 14}]}>    Ingrese Nombre:</Text></Icon>
          <Input  type='name' style={{
                  flex: 1,
                  color: 'black',
                  backgroundColor: 'white',
                  borderColor: 'rgba(0, 191,  255, 0.25)',
                  borderWidth: 7,
                  margin: 5,
                  borderRadius: 10,
                  padding: 15,
                  fontSize: 14
          }}/>
          <Input  style={{ flex: 1, fontSize: 30, color: '#FBEEE6'}}/>
          <Icon
            name='envelope-o'
            size={24}
            color='#FBEEE6'>
          <Text style={[styles.textWithShadow,{textShadowColor: 'rgba(0, 191,  255, 1)',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 14}]}>    Ingrese e-mail:</Text></Icon>
          <Input  autoCompleteType='email' style={{
                  flex: 1,
                  color: 'black',
                  backgroundColor: 'white',
                  borderColor: 'rgba(0, 191,  255, 0.25)',
                  borderWidth: 7,
                  margin: 5,
                  borderRadius: 10,
                  padding: 15,
                  fontSize: 14
          }}/>
          <Icon
            name='unlock'
            size={24}
            color='#FBEEE6'>
          <Text style={[styles.textWithShadow,{textShadowColor: 'rgba(0, 191,  255, 1)',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 14}]}>    Ingrese Password:</Text></Icon>
          <Input secureTextEntry style={{
                  flex: 1,
                  color: 'black',
                  backgroundColor: 'white',
                  borderColor: 'rgba(0, 191,  255, 0.25)',
                  borderWidth: 7,
                  margin: 5,
                  borderRadius: 10,
                  margin: 5,
                  padding: 15,
                  fontSize: 14
          }}/>
          </View>
        <Button onPress={() => navigation.navigate('Loguear')} title=" Registrar" type="outline" color='#FBEEE6' style={styles.textWithShadow}
        buttonStyle={{
          margin: 5,
          borderRadius: 30,
        }}  icon={
            <Icon
              name="check"
              size={20}
              color="#FBEEE6"
            />}/>
    </View>
  );
}












function Cart() {
  return (
    <Carts></Carts>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="PetShop"  component={HomeScreen}></MainStack.Screen>
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Loguear" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="Comprar" component={Cart} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
