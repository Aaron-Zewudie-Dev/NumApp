import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import CommonButton from "../../components/ui/CommonButton";
import { useState } from "react";
import Colors from "../../constants/colors";
import CommonTitle from "../../components/ui/CommonTitle";
import CommonInstraction from "../../components/ui/CommonInstraction";
import CommonCard from "../../components/ui/CommonCard";
function HomeScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const enteredValue = parseInt(enteredNumber);

    if (isNaN(enteredValue) || enteredValue <= 0 || enteredValue > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(enteredValue);
  };

  return (
    <View style={homeScreenStyle.inputContener}>
      <CommonTitle>Guess My Number</CommonTitle>
      <CommonCard>
        <CommonInstraction>Enter a Number</CommonInstraction>
        <TextInput
          style={homeScreenStyle.inputFieldStyle}
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={homeScreenStyle.buttonContainerStyle}>
          <View style={homeScreenStyle.buttonContainer}>
            <CommonButton onpress={resetInputHandler} buttonLable="Rest" />
          </View>
          <View style={homeScreenStyle.buttonContainer}>
            <CommonButton onPress={confirmInputHandler} buttonLable="Confirm" />
          </View>
        </View>
      </CommonCard>
    </View>
  );
}
export default HomeScreen;
const homeScreenStyle = StyleSheet.create({
  inputContener: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputFieldStyle: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainerStyle: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
