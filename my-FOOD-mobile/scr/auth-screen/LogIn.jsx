import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { CheckBox , Icon, SocialIcon, SocialIconProps} from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, ToggleButton } from 'react-native-paper';
import PrimaryBtn from '../components/PrimaryBtn';
import _ from 'lodash';






export default function LogIn() {
  const [text, setText] = React.useState('');
  const [checked, setState] = React.useState(true);


  const toggleCheckbox = () => setState(!checked);



  

  // const [status, setStatus] = React.useState('checked');

  // const onButtonToggle = value => {
  //   setStatus(status === 'checked' ? 'unchecked' : 'checked');
  // };
  


  // social media icons action
  const dataList = [
    { type: 'facebook' },
    { type: 'twitter' },
    { type: 'apple' },
   
  ];
    
  return (
    <SafeAreaView>
        <View  style={styles.body}>
            <View  style={styles.view1}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText1}>Log In</Text>
                    <Text style={styles.headerText2}>Please sign in to existing account</Text>
                </View>
            </View>
            <View style={styles.view2}>
              <TextInput
                style={styles.inputField}
                label="Password"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
              />
              <TextInput
                style={styles.inputField}
                label="Password"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
              />
               
            </View>
            <View style={styles.view3}>
                <View>
                  <CheckBox
                    size={20}
                    checked={checked}
                    checkedIcon="heart"
                    uncheckedIcon="heart-o"
                    checkedColor={checked ? "#390d7c" : "black"}
                    onPress={toggleCheckbox}
                  />
                  <Text style={{ color: checked ? "black" : "#390d7c" }}>
                    {checked
                      ? "Your reward will be made public"
                      : "Make my reward Public"}
                  </Text>
                </View>
                <View>
                  <Text >Forgot Password</Text>
                </View>
            </View>
            <View  style={styles.view4}>
              <PrimaryBtn label="LOG In"/>
            </View>
            <View style={styles.view5}>
                <Text style={styles.forgotPasswordText}>Already have an account? <TouchableOpacity onPress={() => navigation.navigate('Login')} ><Text style={{color: "purple"}} >Sign In</Text></TouchableOpacity></Text>
            </View>
            {_.chunk(dataList, 3).map((chunk, chunkIndex) => (
              <View
                key={chunkIndex}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10,
                  backgroundColor: '#4c4c4c',
                }}
              >
                {chunk.map((social, index) => (
                  <SocialIcon
                    type={social.type}
                    iconType={social.iconType ? social.iconType : 'font-awesome'}
                    key={`${chunkIndex}-${index}`}
                  />
                ))}
              </View>
            ))}



        </View>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  body:{
    
  },
  view1 :{

  },
  headerContainer:{

  },
  headerText1:{

  },
  headerText2:{

  },
  view2 :{

  },
  inputField:{

  },
  view3 :{

  },
  checkbox:{

  },
  checkboxText:{

  },
  forgotPassword:{

  },
  forgotPasswordText:{

  },
  view4 :{

  },
  view5 :{
    alignSelf: "center",
   marginVertical: 20
  },
  view6 :{

  },


})

