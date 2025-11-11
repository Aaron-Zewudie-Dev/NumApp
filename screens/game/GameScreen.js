import { useState,useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CommonTitle from "../../components/ui/CommonTitle";
import NumberContainer from "../../components/game/NumberContainer";
import CommonButton from "../../components/ui/CommonButton";
function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}
let minBoundary = 1;
let maxBoundary;

function GameScreen({ userEnteredNumber, onGameOver }) {
  const initiaGuess = generateRandomNumber(
    1,
    100,
    userEnteredNumber
  );
  const [currentGuess, SetCurrentGuess] = useState(initiaGuess);
  useEffect(() =>{
    if(currentGuess === userEnteredNumber){
        onGameOver();
    }
  },[currentGuess,userEnteredNumber,onGameOver])
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userEnteredNumber) ||
      (direction === "greater" && currentGuess > userEnteredNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    SetCurrentGuess(newRandomNumber);
  }
  return (
    <View style={gameScreenStyle.screenContainerStyle}>
      <CommonTitle children="Opponent's Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <CommonButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </CommonButton>
          <CommonButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </CommonButton>
        </View>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const gameScreenStyle = StyleSheet.create({
  screenContainerStyle: {
    flex: 1,
    padding: 24,
  },
});
