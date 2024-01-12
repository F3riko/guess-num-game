import { View, StyleSheet, Pressable, Text } from "react-native";
import colors from "../constants/colors";

const CustomButton = ({ children, onButtonPress }) => {
  return (
    <View style={styles.buttonOuterWrapper}>
      <Pressable
        onPress={onButtonPress}
        android_ripple={{ color: colors.transparency }}
        style={styles.buttonInnerWrapper}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonInnerWrapper: {
    backgroundColor: colors.buttonBackgroundColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonOuterWrapper: {
    overflow: "hidden",
    margin: 5,
    borderRadius: 20,
  },
  buttonText: { color: colors.gameScreenTitle, textAlign: "center" },
});

export default CustomButton;
