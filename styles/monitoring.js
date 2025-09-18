import { StyleSheet } from 'react-native';

export const monitoringStyles = StyleSheet.create({
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
  videoFeed: {
    margin: 20,
    height: 200,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoText: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  videoSubtext: {
    color: '#ccc',
    fontSize: 14,
  },
  riskMeter: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  riskTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
  },
  riskIndicator: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  riskText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sensorsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  sensorCard: {
    width: '45%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
  },
  sensorLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  sensorValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  alertsSection: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  alertsTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
  },
  alert: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF3E0',
    borderRadius: 5,
  },
  alertText: {
    marginLeft: 10,
    flex: 1,
  },
});