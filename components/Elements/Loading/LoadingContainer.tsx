import {
  Center,
  Modal,
  ModalBackdrop,
  ModalContent,
} from "@gluestack-ui/themed";
import { useEffect, useMemo } from "react";
import { Animated } from "react-native";

import LoadingView from "./LoadingView";

const LoadingContainer = () => {
  const dots = [...Array(3).keys()];
  const colors = ["$primary400", "$primary500", "$primary700"];
  const animated = useMemo(() => new Animated.Value(0), []);

  const translateYEven = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [-5, 5],
  });

  const translateYOdd = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [3, -3],
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animated, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animated]);

  return (
    <Center flex={1}>
      <Modal isOpen>
        <ModalBackdrop />
        <ModalContent width="$40" height="$24">
          <LoadingView
            dots={dots}
            colors={colors}
            translateYEven={translateYEven}
            translateYOdd={translateYOdd}
          />
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default LoadingContainer;
