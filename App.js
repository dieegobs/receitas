import { View, Text, StyleSheet } from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Meu Primeiro App!!!</Text>
      <Nome nome="Diego Bittencourt"/>
      <Nome nome="Junior dos Santos"/>
      <Nome nome="Bianca"/>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{ 
      
      height: 400
    },
    title: {
      fontSize: 24,
      marginTop: 100,
      
    }
})


function Nome ({nome}){
  return(
    <Text>Olá, {nome}</Text>
  )
}