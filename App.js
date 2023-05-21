import Form from './src/components/form';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import CounterScreen from './src/components/CounterScreen';
import GeradorImagem from './src/components/GeradorImagem';
import Galeria from './src/components/Galeria';
import Filmes from './src/components/Filmes';
import Autenticacao from './src/components/Autenticacao';



const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='Contador' component={CounterScreen}/>
        <Stack.Screen name='Imagem' component={GeradorImagem}/>
        <Stack.Screen name='Galeria' component={Galeria}/>
        <Stack.Screen name='Filmes' component={Filmes}/>
        <Stack.Screen name='Autenticacao' component={Autenticacao}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
