import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "./constants/colors";
import GameStartScreen from "./screens/GameStartScreen";
import { useEffect, useState } from "react";
import GamePlayScreen from "./screens/GamePlayScreen";
import GameResultScreen from "./screens/GameResultScreen";

export default function App() {
  const [gameStatus, setGuessStatus] = useState({
    guessMeNum: null,
    isFinished: false,
    roundsToWin: 0,
  });

  return (
    <LinearGradient
      colors={[colors.mainAccentGradient, colors.secondaryAccentGradient]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("./assets/dice.jpg")}
        style={styles.appContainer}
        resizeMode="cover"
        imageStyle={styles.imgBackground}
      >
        <SafeAreaView style={styles.appContainer}>
          {gameStatus.guessMeNum === null && !gameStatus.isFinished && (
            <GameStartScreen
              setGuessMeNumber={(number) =>
                setGuessStatus((prevVal) => ({
                  ...prevVal,
                  guessMeNum: number,
                }))
              }
            />
          )}
          {gameStatus.guessMeNum !== null && !gameStatus.isFinished && (
            <GamePlayScreen
              guessMeNum={gameStatus.guessMeNum}
              endGame={(rounds) =>
                setGuessStatus((prevVal) => ({
                  ...prevVal,
                  isFinished: true,
                  roundsToWin: rounds,
                }))
              }
            />
          )}
          {gameStatus.guessMeNum !== null && gameStatus.isFinished && (
            <GameResultScreen
              guessMeNum={gameStatus.guessMeNum}
              roundsToWin={gameStatus.roundsToWin}
              resetGame={() =>
                setGuessStatus(() => ({
                  guessMeNum: null,
                  isFinished: false,
                  roundsToWin: 0,
                }))
              }
            />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    opacity: 0.3,
  },
});
