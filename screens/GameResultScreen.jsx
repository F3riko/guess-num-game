import { View, StyleSheet, Image, Text } from "react-native";
import Title from "../components/Title";
import colors from "../constants/colors";
import CustomButton from "../components/CustomButton";

const GameResultScreen = ({ guessMeNum, roundsToWin, resetGame }) => {
  return (
    <View style={styles.mainContainer}>
      <Title
        elementColor={{
          borderColor: colors.gameScreenTitle,
          color: colors.gameScreenTitle,
        }}
      >
        GAME OVER!
      </Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/winner.jpg")} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          <Text numberOfLines={1}>
            Your phone needed{" "}
            <Text style={styles.textHighlighted}>{roundsToWin}</Text> rounds
          </Text>{" "}
          to guess the number{" "}
          <Text style={styles.textHighlighted}>{guessMeNum}</Text>.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onButtonPress={resetGame}>Start New Game</CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: { alignItems: "center" },
  image: {
    borderRadius: 500,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: colors.mainAccentGradient,
  },
  textContainer: { marginHorizontal: 15, marginVertical: 10 },
  mainText: { fontSize: 30, textAlign: "center" },
  textHighlighted: {
    fontSize: 32,
    color: colors.buttonBackgroundColor,
    fontWeight: "500",
  },
  buttonContainer: { alignItems: "center", marginTop: 20 },
});

export default GameResultScreen;
