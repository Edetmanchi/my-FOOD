import { View, Text, TouchableOpacity, StyleSheet, ScrollView ,KeyboardAvoidingView, TextInput} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from "react-native-otp-entry";
import PrimaryBtn from '../components/PrimaryBtn';

export default function LogIn() {
  const [text, setText] = React.useState('');
  const [password, setPassword] = useState('');
  
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <KeyboardAvoidingView>
        <View  style={styles.body}>
          <View  style={styles.container1}>
                <View style={styles.view1}>
                    <Text style={styles.headerText1}>VERIFICATION</Text>
                    <Text style={styles.headerText2}>We have sent a code to your email</Text>
                    <Text style={styles.headerText2}>anything@gmail.com</Text>
                </View>
          </View>
          <View style={styles.container2}>
                <View style={styles.view2}> 
                     <OtpInput
                        numberOfDigits={4}
                        focusColor="black"
                        focusStickBlinkingDuration={500}
                        onTextChange={(text) => console.log(text)}
                        onFilled={(text) => console.log(`OTP is ${text}`)}
                        theme={{
                        // containerStyle: styles.container,
                        inputsContainerStyle: styles.inputsContainer,
                        pinCodeContainerStyle: styles.pinCodeContainer,
                        pinCodeTextStyle: styles.pinCodeText,
                        focusStickStyle: styles.focusStick,
                        focusedPinCodeContainerStyle: styles.activePinCodeContainer
                    }}  
                    />
                
                    <View  style={styles.view4}>
                    <PrimaryBtn label="VERIFY"/>
                    </View>
                </View>
               
            </View>

        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  body:{
    // backgroundColor: 'black'
  },
  pinCodeContainer:{
    color:'red'
  },

  container1:{
    backgroundColor: 'black',
    // flex: 1
    height: '40%',
    justifyContent: 'center',
    alignItems:'center',
  },
  headerText1:{
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 30

    
  },
  headerText2:{
    color: 'white',
    textAlign:'center',
    fontWeight: 'bold',
    paddingVertical: 5
  },
  container2:{
    height: '60%',
    // paddingVertical: 10,
    paddingHorizontal: 24,
    gap: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white'
  },
  view2 :{
    gap: 40,
    marginTop:40
  },



  


})








