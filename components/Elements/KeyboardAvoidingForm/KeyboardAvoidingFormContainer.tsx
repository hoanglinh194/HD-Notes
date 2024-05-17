import React from "react";
import { Keyboard } from "react-native";

import KeyboardAvoidingFormView from "./KeyboardAvoidingFormView";

interface KeyboardAvoidingFormContainerProps {
  children: React.ReactNode;
}
const KeyboardAvoidingFormContainer: React.FC<
  KeyboardAvoidingFormContainerProps
> = ({ children }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingFormView dismissKeyboard={dismissKeyboard}>
      {children}
    </KeyboardAvoidingFormView>
  );
};

export default KeyboardAvoidingFormContainer;
