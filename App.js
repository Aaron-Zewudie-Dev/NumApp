import { useState } from "react";
import { StyleSheet, ImageBackground,SafeAreaView } from "react-native";
import HomeScreen from "./screens/home/HomeScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/game/GameScreen";
import Colors from "./constants/colors";
import GameOverlyScreen from "./screens/gameoverly/GameOverlyScreen";
import {useFonts} from 'expo-font'
import AppLoading from 'exp'
export default function App() {
  const [ userNumber,setUserNumber] = useState()
  const [gameIsOver,setGameIsOver] = useState(true)
  useFonts({})
  const pickNumberHandler = (enteredNumber)=>{
    setUserNumber(enteredNumber)
    setGameIsOver(false)
  }
    function gameOverHandler(){
    setGameISOver(true)
  }

  let appScreen = <HomeScreen onPickNumber = {pickNumberHandler}/>
  if(userNumber){
    appScreen = <GameScreen userEnteredNumber={userNumber} onGameOver = {gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    screen = <GameOverlyScreen/>
  }

  return ( 
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
      <ImageBackground
        source={require("./assets/appimages/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          {appScreen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
