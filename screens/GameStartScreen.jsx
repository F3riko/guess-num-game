import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import colors from "../constants/colors";
import NumberInput from "../components/NumberInput";

const GameStartScreen = ({ setGuessMeNumber }) => {
  return (
    <View style={styles.mainContainer}>
      <Title
        elementColor={{
          borderColor: colors.gameScreenTitle,
          color: colors.gameScreenTitle,
        }}
      >
        Guess My Number
      </Title>
      <NumberInput setGuessMeNumber={setGuessMeNumber} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default GameStartScreen;
