import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { statusIndicatorStyles as styles } from '../styles/components';

export default function StatusIndicator({ status, label, size = 'medium' }) {
  const getStatusColor = () => {
    switch (status) {
      case 'connected': return '#4CAF50';
      case 'disconnected': return '#F44336';
      case 'warning': return '#FF9800';
      case 'loading': return '#2196F3';
      default: return '#9E9E9E';
    }
  };

  const getIconName = () => {
    switch (status) {
      case 'connected': return 'checkmark-circle';
      case 'disconnected': return 'close-circle';
      case 'warning': return 'warning';
      case 'loading': return 'time';
      default: return 'help-circle';
    }
  };

  const getSize = () => {
    switch (size) {
      case 'small': return 16;
      case 'large': return 32;
      default: return 24;
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons 
        name={getIconName()} 
        size={getSize()} 
        color={getStatusColor()} 
      />
      {label && (
        <Text style={[styles.label, { color: getStatusColor() }]}>
          {label}
        </Text>
      )}
    </View>
  );
}

