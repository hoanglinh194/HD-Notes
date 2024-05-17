import { Stack } from "expo-router";
import { config } from "@/configs/gluestack";

export default function RootLayout() {
  return (
    <Stack initialRouteName="login" screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="enter-phone-number"
        options={{
          title: "Send text with Code",
          headerTitleAlign: "center",
          headerShown: true,
          headerBackVisible: true,
          fullScreenGestureEnabled: true,
          headerBackTitleVisible: false,
          headerTintColor: config.tokens.colors.primary600,
          headerTitleStyle: {
            fontWeight: "600",
            color: config.tokens.colors.primary700,
          },
        }}
      />
      <Stack.Screen
        name="confirm-sms-code"
        options={{
          title: "Confirm Phone Number",
          headerTitleAlign: "center",
          headerShown: true,
          headerBackVisible: true,
          fullScreenGestureEnabled: true,
          headerBackTitleVisible: false,
          headerTintColor: config.tokens.colors.primary600,
          headerTitleStyle: {
            fontWeight: "600",
            color: config.tokens.colors.primary700,
          },
        }}
      />
      <Stack.Screen
        name="feedback"
        options={{
          title: "You are logged out",
          headerTitleAlign: "center",
          headerShown: true,
          headerBackVisible: false,
          fullScreenGestureEnabled: true,
          headerBackTitleVisible: false,
          headerTintColor: config.tokens.colors.primary600,
          headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen
        name="loading"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      /> */}
    </Stack>
  );
}
