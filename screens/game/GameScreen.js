import { View, Text, StyleSheet } from "react-native";
import CommonTitle from "../../components/CommonTitle";
function GameScreen() {
  return (
    <View style={gameScreenStyle.screenContainerStyle}>
        <CommonTitle children="Opponent's Guess"/>
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
