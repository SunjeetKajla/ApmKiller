import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { buildingInputStyles as styles } from '../styles/buildingInput';

export default function BuildingInput() {
  const [buildingData, setBuildingData] = useState({
    length: '',
    width: '',
    height: '',
    floors: '',
    material: 'concrete',
    hasGas: false,
    hasElectricity: false,
    hasWater: false,
  });

  const materials = ['concrete', 'steel', 'wood', 'mixed'];

  const handleSubmit = () => {
    if (!buildingData.length || !buildingData.width || !buildingData.height) {
      Alert.alert('Error', 'Please fill in all required dimensions');
      return;
    }
    
    Alert.alert(
      'Building Data Saved',
      'Building information has been recorded successfully!',
      [
        { text: 'OK', onPress: () => router.back() }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Building Details</Text>
        <Text style={styles.subtitle}>Enter structural information</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.sectionTitle}>Dimensions (meters)</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Length *</Text>
          <TextInput
            style={styles.input}
            value={buildingData.length}
            onChangeText={(text) => setBuildingData({...buildingData, length: text})}
            placeholder="Enter length"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Width *</Text>
          <TextInput
            style={styles.input}
            value={buildingData.width}
            onChangeText={(text) => setBuildingData({...buildingData, width: text})}
            placeholder="Enter width"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Height *</Text>
          <TextInput
            style={styles.input}
            value={buildingData.height}
            onChangeText={(text) => setBuildingData({...buildingData, height: text})}
            placeholder="Enter height"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Number of Floors</Text>
          <TextInput
            style={styles.input}
            value={buildingData.floors}
            onChangeText={(text) => setBuildingData({...buildingData, floors: text})}
            placeholder="Enter number of floors"
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.sectionTitle}>Material Type</Text>
        <View style={styles.materialButtons}>
          {materials.map((material) => (
            <TouchableOpacity
              key={material}
              style={[
                styles.materialButton,
                buildingData.material === material && styles.materialButtonActive
              ]}
              onPress={() => setBuildingData({...buildingData, material})}
            >
              <Text style={[
                styles.materialButtonText,
                buildingData.material === material && styles.materialButtonTextActive
              ]}>
                {material.charAt(0).toUpperCase() + material.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Known Hazards</Text>
        
        <TouchableOpacity
          style={styles.hazardItem}
          onPress={() => setBuildingData({...buildingData, hasGas: !buildingData.hasGas})}
        >
          <Ionicons 
            name={buildingData.hasGas ? 'checkbox' : 'checkbox-outline'} 
            size={24} 
            color="#007AFF" 
          />
          <Text style={styles.hazardText}>Gas Pipelines</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.hazardItem}
          onPress={() => setBuildingData({...buildingData, hasElectricity: !buildingData.hasElectricity})}
        >
          <Ionicons 
            name={buildingData.hasElectricity ? 'checkbox' : 'checkbox-outline'} 
            size={24} 
            color="#007AFF" 
          />
          <Text style={styles.hazardText}>Electrical Systems</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.hazardItem}
          onPress={() => setBuildingData({...buildingData, hasWater: !buildingData.hasWater})}
        >
          <Ionicons 
            name={buildingData.hasWater ? 'checkbox' : 'checkbox-outline'} 
            size={24} 
            color="#007AFF" 
          />
          <Text style={styles.hazardText}>Water Supply</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadButton}>
          <Ionicons name="cloud-upload" size={24} color="#007AFF" />
          <Text style={styles.uploadText}>Upload Building Map (Optional)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Save Building Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

