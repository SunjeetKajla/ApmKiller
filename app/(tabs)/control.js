import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { controlStyles as styles } from '../../styles/control';

export default function Control() {
  const [isMoving, setIsMoving] = useState(false);
  const [autoMode, setAutoMode] = useState(false);

  const handleMovement = (direction) => {
    setIsMoving(true);
    console.log(`Moving ${direction}`);
    setTimeout(() => setIsMoving(false), 500);
  };

  const handleEmergencyStop = () => {
    Alert.alert(
      'Emergency Stop',
      'Robot has been stopped immediately!',
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Robot Control</Text>
      </View>

      <View style={styles.statusBar}>
        <View style={styles.statusItem}>
          <Ionicons name="radio" size={20} color="#4CAF50" />
          <Text style={styles.statusText}>Connected</Text>
        </View>
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
          <Ionicons name="chevron-up" size={32} color="white" />
        </TouchableOpacity>

        <View style={styles.middleRow}>
          <TouchableOpacity 
            style={styles.directionButton}
            onPress={() => handleMovement('left')}
            disabled={isMoving || autoMode}
          >
            <Ionicons name="chevron-back" size={32} color="white" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.stopButton}
            onPress={() => handleMovement('stop')}
            disabled={autoMode}
          >
            <Ionicons name="stop" size={32} color="white" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.directionButton}
            onPress={() => handleMovement('right')}
            disabled={isMoving || autoMode}
          >
            <Ionicons name="chevron-forward" size={32} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.directionButton}
          onPress={() => handleMovement('backward')}
          disabled={isMoving || autoMode}
        >
          <Ionicons name="chevron-down" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.emergencyButton}
        onPress={handleEmergencyStop}
      >
        <Ionicons name="warning" size={24} color="white" />
        <Text style={styles.emergencyText}>EMERGENCY STOP</Text>
      </TouchableOpacity>

      <View style={styles.infoPanel}>
        <Text style={styles.infoTitle}>Robot Status</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Speed:</Text>
          <Text style={styles.infoValue}>Medium</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Battery:</Text>
          <Text style={styles.infoValue}>85%</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Signal:</Text>
          <Text style={styles.infoValue}>Strong</Text>
        </View>
      </View>
    </View>
  );
}

