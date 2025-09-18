import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { dashboardStyles as styles } from '../../styles/dashboard';

export default function Dashboard() {
  const [robotConnected, setRobotConnected] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(85);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mission Control</Text>
        <Text style={styles.subtitle}>Structural Assessment Tool</Text>
      </View>

      <View style={styles.statusCard}>
        <View style={styles.connectionStatus}>
          <Ionicons 
            name={robotConnected ? 'radio' : 'radio-outline'} 
            size={24} 
            color={robotConnected ? '#4CAF50' : '#F44336'} 
          />
          <Text style={[styles.statusText, { color: robotConnected ? '#4CAF50' : '#F44336' }]}>
            {robotConnected ? 'Robot Connected' : 'Robot Disconnected'}
          </Text>
        </View>
        
        <View style={styles.batteryStatus}>
          <Ionicons name="battery-half" size={24} color="#FF9800" />
          <Text style={styles.statusText}>Battery: {batteryLevel}%</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={[styles.deployButton, !robotConnected && styles.disabledButton]}
        disabled={!robotConnected}
        onPress={() => router.push('/building-input')}
      >
        <Ionicons name="rocket" size={24} color="white" />
        <Text style={styles.deployButtonText}>Deploy Bot</Text>
      </TouchableOpacity>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/building-input')}>
          <Ionicons name="business" size={32} color="#007AFF" />
          <Text style={styles.actionText}>Building Input</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/live-monitoring')}>
          <Ionicons name="tv" size={32} color="#007AFF" />
          <Text style={styles.actionText}>Live Monitor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/hazard-mapping')}>
          <Ionicons name="map" size={32} color="#007AFF" />
          <Text style={styles.actionText}>Hazard Map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/reports')}>
          <Ionicons name="document-text" size={32} color="#007AFF" />
          <Text style={styles.actionText}>Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

