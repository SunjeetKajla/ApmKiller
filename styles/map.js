import { StyleSheet } from 'react-native';

export const mapStyles = StyleSheet.create({
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
  mapContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  map: {
    height: 300,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapTitle: {
    position: 'absolute',
    top: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  zone: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    elevation: 2,
  },
  robotPosition: {
    position: 'absolute',
    left: '30%',
    top: '50%',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  legend: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  legendItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 10,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },
  zoneInfo: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  zoneInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  zoneInfoText: {
    fontSize: 14,
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  controlButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  controlButtonText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 14,
  },
});