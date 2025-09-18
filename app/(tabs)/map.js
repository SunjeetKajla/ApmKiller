import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mapStyles as styles } from '../../styles/map';

export default function HazardMap() {
  const [selectedZone, setSelectedZone] = useState(null);
  
  const zones = [
    { id: 1, type: 'safe', x: 20, y: 30, label: 'Entry Point' },
    { id: 2, type: 'danger', x: 60, y: 40, label: 'Structural Damage' },
    { id: 3, type: 'hazard', x: 40, y: 60, label: 'Gas Leak' },
    { id: 4, type: 'safe', x: 80, y: 20, label: 'Clear Path' },
  ];

  const getZoneColor = (type) => {
    switch (type) {
      case 'safe': return '#4CAF50';
      case 'danger': return '#F44336';
      case 'hazard': return '#FF9800';
      default: return '#ccc';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hazard Mapping</Text>
      </View>

      <View style={styles.mapContainer}>
        <View style={styles.map}>
          <Text style={styles.mapTitle}>Building Floor Plan</Text>
          
          {zones.map((zone) => (
            <TouchableOpacity
              key={zone.id}
              style={[
                styles.zone,
                {
                  left: `${zone.x}%`,
                  top: `${zone.y}%`,
                  backgroundColor: getZoneColor(zone.type),
                }
              ]}
              onPress={() => setSelectedZone(zone)}
            />
          ))}
          
          <View style={styles.robotPosition}>
            <Ionicons name="radio" size={16} color="white" />
          </View>
        </View>
      </View>

      <View style={styles.legend}>
        <Text style={styles.legendTitle}>Legend</Text>
        <View style={styles.legendItems}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#4CAF50' }]} />
            <Text style={styles.legendText}>Safe Zone</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#F44336' }]} />
            <Text style={styles.legendText}>Danger Zone</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#FF9800' }]} />
            <Text style={styles.legendText}>Hazard Area</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#2196F3' }]} />
            <Text style={styles.legendText}>Robot Position</Text>
          </View>
        </View>
      </View>

      {selectedZone && (
        <View style={styles.zoneInfo}>
          <Text style={styles.zoneInfoTitle}>Zone Information</Text>
          <Text style={styles.zoneInfoText}>Type: {selectedZone.type.toUpperCase()}</Text>
          <Text style={styles.zoneInfoText}>Label: {selectedZone.label}</Text>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => setSelectedZone(null)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="add" size={20} color="white" />
          <Text style={styles.controlButtonText}>Add Annotation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="refresh" size={20} color="white" />
          <Text style={styles.controlButtonText}>Refresh Map</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

