import { Alert } from "react-native";

const customAlert = (title, message, onClose) => {
  Alert.alert(title, message, [
    {
      text: "OK",
      onPress: onClose,
    },
  ]);
};

export default customAlert;
