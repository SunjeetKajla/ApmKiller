import React, { useState } from 'react';
import { View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { monitoringStyles as styles } from '../../styles/monitoring';

export default function Monitoring() {
  const [sensorData] = useState({
    gasLevel: 15,
    tilt: 2.3,
    distance: 45,
    temperature: 24,
    humidity: 60,
  });
  const [isMoving, setIsMoving] = useState(false);
  const [autoMode, setAutoMode] = useState(false);

  const handleMovement = (direction) => {
    setIsMoving(true);
    console.log(`Moving ${direction}`);
    setTimeout(() => setIsMoving(false), 500);
  };

  const handleEmergencyStop = () => {
    Alert.alert('Emergency Stop', 'Robot has been stopped immediately!', [{ text: 'OK' }]);
  };

  const getRiskLevel = () => {
    if (sensorData.gasLevel > 50 || sensorData.tilt > 5) return 'HIGH';
    if (sensorData.gasLevel > 25 || sensorData.tilt > 3) return 'MEDIUM';
    return 'LOW';
  };

  const getRiskColor = () => {
    const risk = getRiskLevel();
    return risk === 'HIGH' ? '#F44336' : risk === 'MEDIUM' ? '#FF9800' : '#4CAF50';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Live Monitoring</Text>
      </View>

      <View style={styles.videoFeed}>
        <Ionicons name="videocam" size={48} color="#ccc" />
        <Text style={styles.videoText}>ESP32-CAM Feed</Text>
        <Text style={styles.videoSubtext}>Connecting...</Text>
      </View>

      <View style={styles.controlSection}>
        <View style={styles.controlHeader}>
          <TouchableOpacity 
            style={[styles.modeToggle, autoMode && styles.modeToggleActive]}
            onPress={() => setAutoMode(!autoMode)}
          >
            <Text style={[styles.modeText, autoMode && styles.modeTextActive]}>
              {autoMode ? 'AUTO' : 'MANUAL'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.controlPad}>
          <TouchableOpacity 
            style={styles.directionButton}
            onPress={() => handleMovement('forward')}
            disabled={isMoving || autoMode}
          >
            <Ionicons name="chevron-up" size={24} color="white" />
          </TouchableOpacity>

          <View style={styles.middleRow}>
            <TouchableOpacity 
              style={styles.directionButton}
              onPress={() => handleMovement('left')}
              disabled={isMoving || autoMode}
            >
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.stopButton}
              onPress={() => handleMovement('stop')}
              disabled={autoMode}
            >
              <Ionicons name="stop" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.directionButton}
              onPress={() => handleMovement('right')}
              disabled={isMoving || autoMode}
            >
              <Ionicons name="chevron-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.directionButton}
            onPress={() => handleMovement('backward')}
            disabled={isMoving || autoMode}
          >
            <Ionicons name="chevron-down" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.emergencyButton}
          onPress={handleEmergencyStop}
        >
          <Ionicons name="warning" size={20} color="white" />
          <Text style={styles.emergencyText}>EMERGENCY STOP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.riskMeter}>
        <Text style={styles.riskTitle}>Structural Risk Assessment</Text>
        <View style={[styles.riskIndicator, { backgroundColor: getRiskColor() }]}>
          <Text style={styles.riskText}>{getRiskLevel()} RISK</Text>
        </View>
      </View>

      <View style={styles.sensorsGrid}>
        <View style={styles.sensorCard}>
          <Ionicons name="cloud" size={24} color="#FF5722" />
          <Text style={styles.sensorLabel}>Gas Level</Text>
          <Text style={styles.sensorValue}>{sensorData.gasLevel} ppm</Text>
        </View>

        <View style={styles.sensorCard}>
          <Ionicons name="phone-portrait" size={24} color="#2196F3" />
          <Text style={styles.sensorLabel}>Tilt Angle</Text>
          <Text style={styles.sensorValue}>{sensorData.tilt}°</Text>
        </View>

        <View style={styles.sensorCard}>
          <Ionicons name="scan" size={24} color="#9C27B0" />
          <Text style={styles.sensorLabel}>Distance</Text>
          <Text style={styles.sensorValue}>{sensorData.distance} cm</Text>
        </View>

        <View style={styles.sensorCard}>
          <Ionicons name="thermometer" size={24} color="#FF9800" />
          <Text style={styles.sensorLabel}>Temperature</Text>
          <Text style={styles.sensorValue}>{sensorData.temperature}°C</Text>
        </View>
      </View>

      <View style={styles.alertsSection}>
        <Text style={styles.alertsTitle}>Recent Alerts</Text>
        <View style={styles.alert}>
          <Ionicons name="warning" size={20} color="#FF9800" />
          <Text style={styles.alertText}>Slight tilt detected - Monitor closely</Text>
        </View>
      </View>
    </ScrollView>
  );
}

