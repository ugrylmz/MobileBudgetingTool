import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonGroupProps {
    setFilter: (filter: 'all' | 'debit' | 'credit') => void;
}

const ButtonGroup = ({
    setFilter,
}: ButtonGroupProps) => {
    const [selectedButton, setSelectedButton] = useState<'all' | 'debit' | 'credit'>('all');

    const handleButtonPress = (button: 'all' | 'debit' | 'credit') => {
        setSelectedButton(button);
        setFilter(button);
    };

    const getButtonStyle = (button: 'all' | 'debit' | 'credit') => {
        return button === selectedButton ? styles.buttonSelected : styles.button;
    };

    const getButtonTextStyle = (button: 'all' | 'debit' | 'credit') => {
        return button === selectedButton ? styles.buttonTextSelected : styles.buttonText;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={getButtonStyle('all')} onPress={() => handleButtonPress('all')}>
                <Text style={getButtonTextStyle('all')}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity style={getButtonStyle('debit')} onPress={() => handleButtonPress('debit')}>
                <Text style={getButtonTextStyle('debit')}>debit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={getButtonStyle('credit')} onPress={() => handleButtonPress('credit')}>
                <Text style={getButtonTextStyle('credit')}>credit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    button: {
        backgroundColor: '#f0f0f0', // Secondary background color
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 5,
        borderRadius: 4,
    },
    buttonSelected: {
        backgroundColor: '#007bff', // Primary background color
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 5,
        borderRadius: 4,
    },
    buttonText: {
        color: '#333', // Primary text color
        fontSize: 16,
    },
    buttonTextSelected: {
        color: '#fff', // Secondary text color
        fontSize: 16,
    },
});

export default ButtonGroup;
