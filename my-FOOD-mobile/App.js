import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'


import Preview from './scr/onboarding-screen/Preview';
import Home from './scr/pages/home/Home';
import PrimaryBtn from './scr/components/PrimaryBtn';
import LogIn from './scr/auth-screen/LogIn';
import ForgotPassworrd from './scr/auth-screen/ForgotPassword'
import Verification from './scr/auth-screen/Verification'
import SignUp from './scr/auth-screen/SignUp'
import Practive from './scr/auth-screen/Practive';



// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [isOnboard, setIsOnboard] = useState(false)

//   useEffect(() => { 
//     AsyncStorage.getItem('alreadyOnboarded')
//         .then((value) =>{
//             if(value === null){ 
//                 AsyncStorage.setItem('alreadyOnboarded', 'true');
//                 setIsOnboard(true)
//             }
//             else{setIsOnboard(false)}
//         }) },[]
//         );

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {!isOnboard && (
//           <Stack.Screen options={{headerShown: false}} name="onboardingScreen" component={Preview} />
//         )}
//         <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
export default function(){
  return(
    <View>
      {/* <PrimaryBtn/> */}
      {/* <ForgotPassworrd/> */}
      {/* <LogIn/> */}
      {/* <Verification/> */}
      {/* <SignUp/> */}
      <Home />
      {/* <Practive/> */}
    </View>
  )
}

