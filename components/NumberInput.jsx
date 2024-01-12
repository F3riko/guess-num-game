import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import CustomButton from "./CustomButton";
import customAlert from "../utils/alertCall";
import colors from "../constants/colors";

const NumberInput = ({ setGuessMeNumber }) => {
  const [number, setNumber] = useState("");

  const onNumberSubmit = (userNumber) => {
    const parsedNumber = parseInt(userNumber);
    console.log(typeof userNumber, typeof parsedNumber, parsedNumber);
    if (isNaN(parsedNumber)) {
      customAlert(
        "Number, please!",
        "Enter a number from 0 to 99",
        setNumber.bind(this, "")
      );
      return;
    }
    setGuessMeNumber(parsedNumber);
    setNumber("");
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>Enter a Number</Text>
      <TextInput
        value={number}
        keyboardType="numeric"
        autoFocus={true}
        style={styles.inputField}
        maxLength={2}
        onChangeText={(text) => setNumber(text)}
      />
      <View style={styles.buttonGroup}>
        <View style={styles.buttonContainer}>
          <CustomButton onButtonPress={() => setNumber("")}>Reset</CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton onButtonPress={() => onNumberSubmit(number)}>
            Confirm
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.actionBlockBackground,
    alignSelf: "center",
    elevation: 50,
    borderRadius: 10,
    padding: 25,
    marginTop: 100,
    width: "80%",
    alignItems: "center",
  },
  text: { color: colors.mainText, fontSize: 24 },
  inputField: {
    color: colors.mainText,
    fontSize: 24,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.mainText,
    width: 50,
    padding: 5,
    marginVertical: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default NumberInput;
