import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CommonTitle from "../../components/ui/CommonTitle";
import NumberContainer from "../../components/game/NumberContainer";
import CommonButton from "../../components/ui/CommonButton";
import CommonInstraction from "../../components/ui/CommonInstraction";
import CommonCard from "../../components/ui/CommonCard";
import GuessInfo from "../../components/game/GuessInfo";

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomNumber(min, max, exclude) {
  if (max <= min) return min; // prevents infinite recursion
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(() =>
    generateRandomNumber(1, 100, userNumber)
  );
  const [guessRounds, setGuessRounds] = useState([currentGuess]);

  const guessRoundsListLength = guessRounds.length;

  // reset boundaries when userNumber changes (new game)
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [userNumber]);
    useEffect(() => {
  if (currentGuess === userNumber) {
    onGameOver(guessRounds.length);
  }
}, [currentGuess, userNumber, onGameOver]);
  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);

    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  return (
    <View style={styles.screen}>
      <CommonTitle>Opponent's Guess</CommonTitle>
      <NumberContainer>{currentGuess}</NumberContainer>

      <CommonCard>
        <CommonInstraction style={styles.instructionText}>
          Higher or lower?
        </CommonInstraction>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CommonButton
              onPress={nextGuessHandler.bind(this, "lower")}
              buttonLable={"Under"}
            />
          </View>
          <View style={styles.buttonContainer}>
            <CommonButton
              onPress={nextGuessHandler.bind(this, "greater")}
              buttonLable={"Over"}
            />
          </View>
        </View>
      </CommonCard>

      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessInfo
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}


export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
