import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { reportsStyles as styles } from '../styles/reports';

export default function Reports() {
  const [reports] = useState([
    {
      id: 1,
      date: '2024-01-15',
      time: '14:30',
      building: 'Building A - Floor 2',
      riskLevel: 'HIGH',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-01-14',
      time: '09:15',
      building: 'Building B - Floor 1',
      riskLevel: 'MEDIUM',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2024-01-13',
      time: '16:45',
      building: 'Building C - Floor 3',
      riskLevel: 'LOW',
      status: 'Completed',
    },
  ]);

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'HIGH': return '#F44336';
      case 'MEDIUM': return '#FF9800';
      case 'LOW': return '#4CAF50';
      default: return '#ccc';
    }
  };

  const generateReport = () => {
    Alert.alert(
      'Generate Report',
      'Current mission report will be generated and saved.',
      [{ text: 'OK' }]
    );
  };

  const exportReport = (reportId) => {
    Alert.alert(
      'Export Report',
      'Report will be exported as PDF to device storage.',
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mission Reports</Text>
      </View>

      <View style={styles.currentMission}>
        <Text style={styles.sectionTitle}>Current Mission</Text>
        <View style={styles.missionCard}>
          <View style={styles.missionHeader}>
            <Text style={styles.missionTitle}>Building Assessment - Live</Text>
            <View style={[styles.statusBadge, { backgroundColor: '#FF9800' }]}>
              <Text style={styles.statusText}>IN PROGRESS</Text>
            </View>
          </View>
          
          <View style={styles.missionStats}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Duration</Text>
              <Text style={styles.statValue}>15:32</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Areas Scanned</Text>
              <Text style={styles.statValue}>3/5</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Risk Level</Text>
              <Text style={[styles.statValue, { color: '#FF9800' }]}>MEDIUM</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.generateButton} onPress={generateReport}>
            <Ionicons name="document-text" size={20} color="white" />
            <Text style={styles.generateButtonText}>Generate Report</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.historySection}>
        <Text style={styles.sectionTitle}>Mission History</Text>
        
        {reports.map((report) => (
          <View key={report.id} style={styles.reportCard}>
            <View style={styles.reportHeader}>
              <View>
                <Text style={styles.reportTitle}>{report.building}</Text>
                <Text style={styles.reportDate}>{report.date} at {report.time}</Text>
              </View>
              <View style={[styles.riskBadge, { backgroundColor: getRiskColor(report.riskLevel) }]}>
                <Text style={styles.riskText}>{report.riskLevel}</Text>
              </View>
            </View>

            <View style={styles.reportActions}>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => exportReport(report.id)}
              >
                <Ionicons name="download" size={16} color="#007AFF" />
                <Text style={styles.actionButtonText}>Export PDF</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="eye" size={16} color="#007AFF" />
                <Text style={styles.actionButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.summary}>
        <Text style={styles.sectionTitle}>Summary Statistics</Text>
        <View style={styles.summaryGrid}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>12</Text>
            <Text style={styles.summaryLabel}>Total Missions</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>8</Text>
            <Text style={styles.summaryLabel}>Buildings Assessed</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>3</Text>
            <Text style={styles.summaryLabel}>High Risk Found</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>95%</Text>
            <Text style={styles.summaryLabel}>Success Rate</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

