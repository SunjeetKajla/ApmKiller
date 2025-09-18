import { StyleSheet } from 'react-native';

export const controlStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    elevation: 2,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    marginLeft: 5,
    fontWeight: '500',
  },
  modeToggle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  modeToggleActive: {
    backgroundColor: '#007AFF',
  },
  modeText: {
    fontWeight: 'bold',
    color: '#666',
  },
  modeTextActive: {
    color: 'white',
  },
  controlPad: {
    alignItems: 'center',
    marginVertical: 40,
  },
  directionButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 3,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stopButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 3,
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F44336',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  emergencyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infoPanel: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    color: '#666',
  },
  infoValue: {
    fontWeight: '500',
  },
});