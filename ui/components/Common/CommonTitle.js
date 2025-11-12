import { Text, StyleSheet, Platform } from "react-native";
function CommonTitle({ children }) {
  <Text style={style.titleStyle}>{children}</Text>;
}

export default CommonTitle;
const style = StyleSheet.compose({
  titleStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth:Platform.select({iso:0,android:2}),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    minWidth: "",
  },
});
