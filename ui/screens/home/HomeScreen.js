import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import CommonButton from "../../components/Common/CommonButton";
import { useState } from "react";
import Colors from "../../../utilities/constants/colors";
import CommonTitle from "../../components/Common/CommonTitle";
import CommonInstraction from "../../components/Common/CommonInstraction";
import CommonCard from "../../components/Common/CommonCard";
function HomeScreen({ onPickNumber }) {
  const { width, height } = useWindowDimensions();
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
  const mariginTop = height < 380 ? 30 : 100;
  return (
    <ScrollView style={homeScreenStyle.screen}>
      <KeyboardAvoidingView style={homeScreenStyle.screen} behavior="position">
        <View
          style={[homeScreenStyle.inputContener, { marginTop: mariginTop }]}
        >
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
                <CommonButton
                  onPress={confirmInputHandler}
                  buttonLable="Confirm"
                />
              </View>
            </View>
          </CommonCard>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default HomeScreen;
// const deviceHeight = Dimensions.get("window").height;
const homeScreenStyle = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContener: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 100,
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
