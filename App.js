import 'react-native-gesture-handler';
import Home from './screens/Home';
import NoteAdd from './screens/NoteAdd';
import Header from './screens/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator   } from '@react-navigation/stack';

const Stack = createStackNavigator();
 
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //    <Stack.Screen
    //    component={Home}
    //    name='Home'
    //    options={{
    //     headerTitle: () => <Header name="Notes" />,
    //     headerStyle:{
    //       backgroundColor: '#7733FF',
    //       height:120,
    //     }
    //    }}
    //    />

    //    <Stack.Screen
    //    component={NoteAdd}
    //    name='NoteAdd'
    //    options={{
    //     headerTitle: () => <Header name="Add Notes" />,
    //     headerStyle:{
    //       backgroundColor:'#33A4FF',
    //       height:120,
    //     }
    //    }}
    //    />
    //   </Stack.Navigator>
    // </NavigationContainer>


    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NoteAdd" component={NoteAdd} />
      <Stack.Screen name="Header" component={Header} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}


