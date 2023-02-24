import { StyleSheet, Text, TextInput, View } from 'react-native';
import{styles,mytexts} from './assets/styles/styles1';
export default function App() {
  return (
    <View style={[styles.container,styles.borders,mytexts.Text,{borderRadius:10}]}>
      <Text style={mytexts.Text}>Hola mundo</Text>
     */**/</View> {*<Text>{'\n'}<Text/>}
      <TextInput
      placeholder='ingresa nombre'
      style={{marginTop:20}}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borders:{
    borderwidth:3,
    borderColor:'black'
  }
});


const mytexts = StyleSheet.create({
Text:{
color:'red'
}
}
)