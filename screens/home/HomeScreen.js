import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import CommonButton from "../../components/CommonButton";
function HomeScreen() {
  return (
    <View style={homeScreenStyle.inputContener}>
      <TextInput />
      <CommonButton buttonLable="Rest" />
      <CommonButton buttonLable="Confirm" />
    </View>
  );
}
export default HomeScreen;
const homeScreenStyle = StyleSheet.create({
  inputContener: {
    marginTop: 100,
    marginHorizontal:24,
    padding: 16,
    backgroundColor:"#72063c",
    borderRadius:8,
    elevation:10,

  },
});
