import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LogIn() {
  return (
    <SafeAreaView>
        <View>
            <View>
                <View>
                    <Text>Log In</Text>
                    <Text>Please sign in to existing account</Text>
                </View>
            </View>
            <View>


            </View>
        </View>



        
<View style={ customStyle.box }>
  <Text variant='headlineSmall'>
    Sign up to our newsletter!
  </Text>
  <Text variant='labelLarge'>
    Get a monthly dose of fresh React Native Paper news straight to your mailbox. Just sign up to our newsletter and enjoy!
  </Text>
  <Divider />
  <View style={ customStyle.row }>
  <Chip
    onPress={
      toggleTheme
    }
    style={{ marginRight: 8 }}
    selected={ isDarkTheme }
  >
    Dark theme
  </Chip>
  <Chip
    onPress={
     toggleMD3
    }
    style={{ marginRight: 8 }}
    selected={ isV3 }
  >
    Material You
  </Chip>
  </View>
  <Divider />
  <TextInput
    style={{ marginTop: 15 }}
    label='Outlined input'
    mode='outlined'
  />
  <TextInput
    style={{ marginTop: 15 }}
    label='Flat input'
    mode='flat'
  />
  <Button
    style={{ marginTop: 15 }}
    icon='send'
    mode='contained'
    onPress={ toggleSnack }
  >
    Sign me up
  </Button>
</View>
<Snackbar
  visible={ showSnack }
  onDismiss={ toggleSnack }
  action={{
    label: 'Dismiss',
    onPress: () => {
      // Do side magic
    },
  }}
  duration={
    Snackbar.DURATION_LONG
  }
>
  Hey there! I'm a Snackbar.
</Snackbar>










    </SafeAreaView>
  )
}

