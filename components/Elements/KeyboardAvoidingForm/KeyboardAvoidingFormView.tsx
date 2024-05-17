import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";

interface KeyboardAvoidingFormViewProps {
  children: React.ReactNode;
  dismissKeyboard: () => void;
}

const KeyboardAvoidingFormView: React.FC<KeyboardAvoidingFormViewProps> = ({
  children,
  dismissKeyboard,
}) => (
  <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <KeyboardAvoidingView
      flex={1}
      behavior="padding"
      keyboardVerticalOffset={80}
      onPointerLeave={dismissKeyboard}
      onTouchCancel={dismissKeyboard}
    >
      {children}
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
);

export default KeyboardAvoidingFormView;
