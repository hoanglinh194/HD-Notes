import {
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  ScrollView,
  Text,
} from "@gluestack-ui/themed";
import React from "react";
// import { Control, Controller, FieldErrors } from "react-hook-form";
import { Platform, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// import { VotingButton } from "@/components/Elements";
// import CustomButton from "@/components/Elements/CustomButton";
// import Modal from "@/components/Elements/Modal";

type InputFieldType = React.ComponentProps<typeof InputField> & {
  ref?: React.Ref<TextInput> | undefined;
};

const InputFieldWithRef = InputField as React.ComponentType<InputFieldType>;

export interface CreateStudiValues {
  title: string;
  photo1: string;
  photo2: string;
  description: string;
}

interface CreateShudiViewProps {
  // isSubmitting: boolean;
  // isValid: boolean;
  // isShowModalSetting: boolean;
  // errors: any;
  // control?: any;
  // onPressModalSetting: () => void;
  // onCloseModalSetting: () => void;
  // onPressPhoto1: () => void;
  // onPressPhoto2: () => void;
  // handleSubmit: () => void;
}

const CreateShudiView: React.FC<CreateShudiViewProps> = ({
  // isSubmitting,
  // isValid,
  // isShowModalSetting,
  // errors,
  // control,
  // onPressModalSetting,
  // onCloseModalSetting,
  // onPressPhoto1,
  // onPressPhoto2,
  // handleSubmit,
}) => (
  <KeyboardAwareScrollView
    style={{ backgroundColor: "white" }}
    enableOnAndroid
    contentInsetAdjustmentBehavior="never"
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}
    enableResetScrollToCoords
    extraHeight={Platform.OS === "android" ? 150 : 70}
    extraScrollHeight={Platform.OS === "android" ? 80 : 126}
  >
    <Box flex={1} bgColor="$white" p="$4">
      {/* <Controller
        name="title"
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <FormControl size="md" isInvalid={!!errors.title?.message}>
            <FormControlLabel mb="$2">
              <FormControlLabelText fontWeight="bold" color="$primary600">
                Add Title
              </FormControlLabelText>
            </FormControlLabel>
            <Box display="flex" flexDirection="row">
              <Input
                flex={1}
                size="xl"
                shadowOffset={{ width: 0, height: 0 }}
                borderWidth="$1"
                borderRadius="$lg"
                borderColor="$primary400"
              >
                <InputFieldWithRef
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={text => {
                    text.length <= 20 && onChange(text);
                  }}
                  placeholder="Enter title ..."
                  returnKeyType="next"
                  fontSize="$lg"
                  width="$full"
                  color="$primary600"
                  maxLength={20}
                />
              </Input>
            </Box>
            <Text
              textAlign="right"
              fontSize="$sm"
              mt="$2"
              color="$primary500"
              fontWeight="$normal"
            >
              Maximum {value?.length ?? 0}/20 characters
            </Text>
          </FormControl>
        )}
      /> */}
      <Text fontWeight="bold" color="$primary600" mt="$6">
        Add Photo
      </Text>
      {/* <Box flexDirection="row" mt="$2">
        <Controller
          name="photo1"
          control={control}
          render={({ field: { value } }) => (
            <VotingButton
              isVoted
              imageURL={value}
              textPhoto="Photo 1"
              onPress={onPressPhoto1}
              isLeft
              useDefault
            />
          )}
        />
        <Controller
          name="photo2"
          control={control}
          render={({ field: { value } }) => (
            <VotingButton
              isVoted
              imageURL={value}
              textPhoto="Photo 2"
              onPress={onPressPhoto2}
              useDefault
            />
          )}
        />
      </Box>
      <Controller
        name="description"
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <FormControl
            size="md"
            isInvalid={!!errors.description?.message}
            mt="$6"
          >
            <FormControlLabel mb="$2">
              <FormControlLabelText fontWeight="bold" color="$primary600">
                Description
              </FormControlLabelText>
            </FormControlLabel>
            <Box display="flex" flexDirection="row">
              <Input
                flex={1}
                size="xl"
                h="$40"
                shadowOffset={{ width: 0, height: 0 }}
                borderWidth="$1"
                borderRadius="$lg"
                borderColor="$primary400"
              >
                <ScrollView flex={1} scrollEnabled marginVertical="$2">
                  <InputFieldWithRef
                    ref={ref}
                    onBlur={onBlur}
                    h="$40"
                    value={value}
                    onChangeText={text => {
                      text.length <= 200 && onChange(text);
                    }}
                    placeholder="Enter description ..."
                    returnKeyType="done"
                    fontSize="$md"
                    width="$full"
                    color="$primary600"
                    multiline
                    maxLength={200}
                    verticalAlign="top"
                  />
                </ScrollView>
              </Input>
            </Box>
            <Text
              textAlign="right"
              fontSize="$sm"
              mt="$2"
              mb="$6"
              color="$primary500"
              fontWeight="$normal"
            >
              Maximum {value?.length ?? 0}/200 characters
            </Text>
          </FormControl>
        )}
      />
      <CustomButton
        isSubmitting={isSubmitting}
        isDisabled={!isValid || isSubmitting}
        buttonText="Post"
        onSubmit={handleSubmit}
      />
      <Modal
        isOpen={isShowModalSetting}
        title="Permission Denied!"
        content="This app requires access to certain permissions to function properly. Unfortunately, the necessary permission has been denied. To enable it, please navigate to your device's settings."
        onClose={onCloseModalSetting}
        rightButtonText="Go to Setting"
        onPressRight={onPressModalSetting}
      /> */}
    </Box>
  </KeyboardAwareScrollView>
);

export default CreateShudiView;
