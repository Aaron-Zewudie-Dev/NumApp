import { View, Text, Pressable, StyleSheet } from "react-native";
function CommonButton({ buttonLable, onPress }) {
  return (
    <View style={commonButtonStyle.buttonOuterContainerStyle}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
        style={(pressed) =>
          pressed
            ? [
                commonButtonStyle.buttonInnerContainerStyle,
                commonButtonStyle.pressed,
              ]
            : commonButtonStyle.buttonInnerContainerStyle
        }
      >
        <Text style={commonButtonStyle.buttonTextStyle}>{buttonLable}</Text>
      </Pressable>
    </View>
  );
}
export default CommonButton;
const commonButtonStyle = StyleSheet.create({
  buttonOuterContainerStyle: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainerStyle: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonTextStyle: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
