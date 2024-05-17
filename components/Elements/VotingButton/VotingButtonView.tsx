import {
  Box,
  Button,
  CheckIcon,
  Icon,
  ImageBackground,
  Text,
} from "@gluestack-ui/themed";
import { ImageIcon } from "lucide-react-native";
import React from "react";

import { config } from "@/config/gluestack";

interface VotingButtonProps {
  isVoted: boolean;
  imageURL: string | undefined;
  textPhoto?: string;
  useDefault?: boolean;
  isLeft?: boolean;
  onPress: () => void;
}

const VotingButtonView: React.FC<VotingButtonProps> = ({
  isVoted,
  imageURL,
  textPhoto = null,
  useDefault = false,
  isLeft = false,
  onPress,
}) => (
  <Box flex={1} height={textPhoto != null ? "$64" : "$56"}>
    <Button
      flex={1}
      display="flex"
      bgColor="$white"
      borderWidth={1}
      borderColor="$primary400"
      height="$56"
      ml={!isLeft ? "$2" : "$0"}
      mr={isLeft ? "$2" : "$0"}
      borderRadius="$2xl"
      p="$0"
      onPress={onPress}
      shadowColor={isVoted && !useDefault ? "$primary600" : "$transparent"}
      shadowOffset={{
        width: 0,
        height: 7,
      }}
      shadowOpacity={0.5}
    >
      {!useDefault || imageURL !== "" ? (
        <ImageBackground
          source={{ uri: imageURL }}
          resizeMode="cover"
          overflow="hidden"
          flex={1}
          position="absolute"
          top="$0"
          bottom="$0"
          right="$0"
          left="$0"
          borderRadius="$2xl"
        />
      ) : (
        <Box
          flex={1}
          position="absolute"
          top="$0"
          bottom="$0"
          right="$0"
          left="$0"
          bgColor="$primary300"
          alignItems="center"
          justifyContent="center"
          borderRadius="$2xl"
        >
          <ImageIcon
            color={config.tokens.colors.primary400}
            size={56}
            strokeWidth={1}
          />
          <Text
            textAlign="center"
            fontWeight="$medium"
            fontSize="$sm"
            color="$primary500"
            lineHeight="$xs"
            mt="$1.5"
          >
            Select photo from{"\n"}camera roll
          </Text>
        </Box>
      )}
      <Box
        position="absolute"
        top="$0"
        bottom="$0"
        right="$0"
        left="$0"
        bgColor={isVoted ? "$transparent" : "$grayLight500"}
        borderRadius="$2xl"
      />
      {!useDefault && (
        <Box
          bgColor="$transparent"
          flexDirection="row"
          alignItems="center"
          position="absolute"
          top={10}
          left={10}
        >
          <Box
            p="$0.5"
            bgColor="$primary400"
            overflow="hidden"
            w={50}
            alignItems="center"
            borderRadius="$lg"
          >
            <Box
              flex={1}
              position="absolute"
              bgColor="$primary600"
              w={10}
              top={0}
              left={0}
              bottom={0}
            />
            <Text color="$black" fontWeight="$semibold">
              18%
            </Text>
          </Box>
          <Text color="$primary600" ml="$1" fontWeight="$medium">
            Votes
          </Text>
        </Box>
      )}
      {isVoted && !useDefault && (
        <Box
          bgColor="$primary600"
          borderRadius="$full"
          w="$6"
          h="$6"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          bottom={14}
        >
          <Icon
            as={CheckIcon}
            size="md"
            color="$white"
            tintColor="$primary600"
          />
        </Box>
      )}
    </Button>
    {textPhoto != null && (
      <Text fontWeight="bold" color="$primary600" textAlign="center" mt="$2">
        {textPhoto}
      </Text>
    )}
  </Box>
);

export default VotingButtonView;
