import { View, Image, Text, StyleSheet, Dimensions} from "react-native";
import CommonButton from "../../components/Common/CommonButton";
import CommonTitle from "../../components/Common/CommonTitle";
import Colors from "../../../utilities/constants/colors";

function GameOverlyScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <CommonTitle>GAME OVER!</CommonTitle>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/appimages/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <CommonButton onPress={onStartNewGame} buttonLable={"Start New Game"} />
    </View>
  );
}

export default GameOverlyScreen;
const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380? 150:300,
    height: deviceWidth < 380? 150:300,
    borderRadius: deviceWidth < 380? 75:150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
