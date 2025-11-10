import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CommonTitle from "../../components/ui/CommonTitle";
import NumberContainer from "../../components/game/NumberContainer";
function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}
function GameScreen({ userEnteredNumber }) {
  const initiaGuess = generateRandomNumber(1, 100, userEnteredNumber);
  const [currentGuess, SetCurrentGuess] = useState(initiaGuess);
  return (
    <View style={gameScreenStyle.screenContainerStyle}>
      <CommonTitle children="Opponent's Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
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
