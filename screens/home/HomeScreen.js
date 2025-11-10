import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import CommonButton from "../../components/CommonButton";
import { useState } from "react";
function HomeScreen() {
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

    console.log("Valid number:", enteredValue);
  };

  return (
    <View style={homeScreenStyle.inputContener}>
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
    </View>
  );
}
export default HomeScreen;
const homeScreenStyle = StyleSheet.create({
  inputContener: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 8,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { with: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  inputFieldStyle: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
