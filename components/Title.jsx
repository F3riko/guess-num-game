import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const Title = ({ children, elementColor }) => {
  return (
    <View style={{ ...styles.textContainer, ...elementColor }}>
      <Text style={{ ...styles.text, ...elementColor }}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    borderWidth: 3,
    borderColor: colors.gameScreenTitle,
    alignSelf: "center",
    marginVertical: 50,
  },
  text: {
    color: colors.gameScreenTitle,
    fontWeight: "900",
    padding: 15,
    fontSize: 24,
    textAlign: "center",
  },
});

export default Title;
