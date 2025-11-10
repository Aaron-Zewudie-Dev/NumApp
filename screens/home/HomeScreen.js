import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import CommonButton from "../../components/CommonButton";
function HomeScreen() {
  return (
    <View style={homeScreenStyle.inputContener}>
      <TextInput
        style={homeScreenStyle.inputFieldStyle}
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <CommonButton buttonLable="Rest" />
      <CommonButton buttonLable="Confirm" />
    </View>
  );
}
export default HomeScreen;
const homeScreenStyle = StyleSheet.create({
  inputContener: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 8,
    backgroundColor: "#4e0329",
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
});
