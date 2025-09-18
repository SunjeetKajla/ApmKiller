import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="building-input" options={{ title: 'Building Details' }} />
        <Stack.Screen name="live-monitoring" options={{ title: 'Live Monitoring' }} />
        <Stack.Screen name="hazard-mapping" options={{ title: 'Hazard Map' }} />
        <Stack.Screen name="control-panel" options={{ title: 'Robot Control' }} />
        <Stack.Screen name="reports" options={{ title: 'Mission Reports' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}