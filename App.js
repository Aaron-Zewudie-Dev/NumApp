import { useState } from "react";
import { StyleSheet, ImageBackground,SafeAreaView } from "react-native";
import HomeScreen from "./screens/home/HomeScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/game/GameScreen";

export default function App() {
  const [ userNumber,setUserNumber] = useState()
  const pickNumberHandler = (enteredNumber)=>{
    setUserNumber(enteredNumber)
  }
  let appScreen = <HomeScreen onPickNumber = {pickNumberHandler}/>
  if(userNumber){
    appScreen = <GameScreen/>
  }

  return ( 
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
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
