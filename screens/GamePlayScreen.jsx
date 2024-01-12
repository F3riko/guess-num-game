import { View, StyleSheet, Text, FlatList } from "react-native";
import Title from "../components/Title";
import colors from "../constants/colors";
import { useRef, useState } from "react";
import CustomButton from "../components/CustomButton";
import { FontAwesome } from "@expo/vector-icons";
import { generateRandomNumber } from "../utils/gameLogic";
import customAlert from "../utils/alertCall";

const GamePlayScreen = ({ guessMeNum, endGame }) => {
  const frames = useRef({ min: 0, max: 99 });
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(frames.current.min, frames.current.max, guessMeNum)
  );
  const [guesses, setGuesses] = useState([currentGuess]);

  const updateFrames = (newMin, newMax) => {
    frames.current = { min: newMin, max: newMax };
  };

  const giveClue = (clue) => {
    if (
      (clue === "higher" && guessMeNum < currentGuess) ||
      (clue === "lower" && guessMeNum > currentGuess)
    ) {
      customAlert("Oh, you're a liar!", "Don't you dare to lie to me...", null);
      return;
    }

    let newMin, newMax, increment;

    increment = 3;

    if (clue === "higher") {
      newMin = currentGuess;
      newMax = frames.current.max;
    } else {
      newMin = frames.current.min;
      newMax = currentGuess;
    }

    if (newMin >= newMax) {
      newMin = frames.current.min;
      newMax = frames.current.max;
    }

    updateFrames(newMin, newMax);

    const newGuess = generateRandomNumber(newMin, newMax, currentGuess);
    setGuesses((prevGuesses) => [...prevGuesses, newGuess]);
    setCurrentGuess(() => newGuess);
    if (newGuess === guessMeNum) endGame(guesses.length);
  };

  return (
    <View style={styles.mainContainer}>
      <Title
        elementColor={{
          borderColor: colors.gameScreenTitle,
          color: colors.gameScreenTitle,
        }}
      >
        Computer's Guesses
      </Title>
      <View style={styles.currentGuessContainer}>
        <Text style={styles.currentGuessText}>{currentGuess}</Text>
      </View>
      <View style={styles.decisionContainer}>
        <Text style={styles.text}>Higher or lower?</Text>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonContainer}>
            <CustomButton onButtonPress={giveClue.bind(this, "higher")}>
              <FontAwesome name="plus" />
            </CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onButtonPress={giveClue.bind(this, "lower")}>
              <FontAwesome name="minus" />
            </CustomButton>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.guessesContainer}
        data={guesses}
        renderItem={({ item, index }) => (
          <View style={styles.guessContainer}>
            <Text style={styles.guessText}>
              #{index + 1} Computer's guess: {item}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  currentGuessContainer: {
    borderWidth: 5,
    borderColor: colors.secondaryAccentGradient,
    width: "80%",
    paddingVertical: 25,
    borderRadius: 15,
  },
  currentGuessText: {
    fontWeight: "700",
    textAlign: "center",
    color: colors.secondaryAccentGradient,
    fontSize: 36,
  },
  decisionContainer: {
    backgroundColor: colors.actionBlockBackground,
    elevation: 1,
    borderRadius: 10,
    padding: 25,
    marginTop: 50,
    width: "80%",
    alignItems: "center",
  },
  text: { color: colors.mainText, fontSize: 24 },
  buttonGroup: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  guessContainer: {
    // width: "80%",
    backgroundColor: colors.secondaryAccentGradient,
    marginVertical: 8,
    padding: 15,
    borderRadius: 20,
    borderColor: colors.mainAccentGradient,
    borderWidth: 1,
  },
  guessText: { fontSize: 20 },
  guessesContainer: { width: "80%", marginTop: 10 },
});

export default GamePlayScreen;
