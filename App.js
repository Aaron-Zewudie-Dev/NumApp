import { useState } from "react";
import { StyleSheet, ImageBackground,SafeAreaView } from "react-native";
import HomeScreen from "./screens/home/HomeScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/game/GameScreen";
import Colors from "./constants/colors";
import GameOverlyScreen from "./screens/gameoverly/GameOverlyScreen";
import {useFonts} from 'expo-font'
// import * as SplashScreen from "expo-splash-screen";
export default function App() {
const [userNumber, setUserNumber] = useState(null);
const [gameIsOver, setGameIsOver] = useState(false);
const [guessRounds, setGuessRounds] = useState(0);

const [fontsLoaded] = useFonts({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
});

function pickNumberHandler(enteredNumber) {
  setUserNumber(enteredNumber);
  setGameIsOver(false);
}

function gameOverHandler(numberOfRounds) {
  setGameIsOver(true);
  setGuessRounds(numberOfRounds);
}

function startNewGameHandler() {
  setUserNumber(null);
  setGuessRounds(0);
  setGameIsOver(false);
}

let appScreen = <HomeScreen onPickNumber={pickNumberHandler} />;

if (userNumber && !gameIsOver) {
  appScreen = (
    <GameScreen
      userNumber={userNumber} 
      onGameOver={gameOverHandler}
    />
  );
}

if (gameIsOver && userNumber) {
  appScreen = (
    <GameOverlyScreen
      userNumber={userNumber}
      roundsNumber={guessRounds}
      onStartNewGame={startNewGameHandler}
    />
  );
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
