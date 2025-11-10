import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text,} from "react-native";
import HomeScreen from "./screens/home/HomeScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient color ={["#4e0329","#ddb52f"]} style={styles.container}>
      <HomeScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#ddb52f"
  },
});
