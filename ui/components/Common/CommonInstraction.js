import { Text, StyleSheet } from "react-native";
import Colors from "../../../utilities/constants/colors";
function CommonInstraction({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default CommonInstraction;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
