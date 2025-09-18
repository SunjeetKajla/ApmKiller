import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { notificationStyles as styles } from '../styles/components';

export default function NotificationAlert({ type, message, onClose }) {
  const getAlertStyle = () => {
    switch (type) {
      case 'danger':
        return { backgroundColor: '#FFEBEE', borderColor: '#F44336' };
      case 'warning':
        return { backgroundColor: '#FFF3E0', borderColor: '#FF9800' };
      case 'success':
        return { backgroundColor: '#E8F5E8', borderColor: '#4CAF50' };
      default:
        return { backgroundColor: '#E3F2FD', borderColor: '#2196F3' };
    }
  };

  const getIconName = () => {
    switch (type) {
      case 'danger': return 'alert-circle';
      case 'warning': return 'warning';
      case 'success': return 'checkmark-circle';
      default: return 'information-circle';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'danger': return '#F44336';
      case 'warning': return '#FF9800';
      case 'success': return '#4CAF50';
      default: return '#2196F3';
    }
  };

  return (
    <View style={[styles.container, getAlertStyle()]}>
      <Ionicons name={getIconName()} size={24} color={getIconColor()} />
      <Text style={[styles.message, { color: getIconColor() }]}>{message}</Text>
      {onClose && (
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Ionicons name="close" size={20} color={getIconColor()} />
        </TouchableOpacity>
      )}
    </View>
  );
}

