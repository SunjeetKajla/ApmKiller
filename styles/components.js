import { StyleSheet } from 'react-native';

export const notificationStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 2,
  },
  message: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  closeButton: {
    padding: 5,
  },
});

export const statusIndicatorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});