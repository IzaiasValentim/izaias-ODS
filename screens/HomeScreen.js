// src/screens/HomeScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [playerName, setPlayerName] = useState('');
  const [showNameError, setShowNameError] = useState(false);
  const [lastDiceRoll, setLastDiceRoll] = useState(null); // Novo estado para exibir o dado sorteado

  const handleStartConversation = () => {
    const trimmedName = playerName.trim();

    if (trimmedName === '') {
      setShowNameError(true);
      return;
    }

    setShowNameError(false);

    // --- Lógica do Sorteio do Dado ---
    const diceOptions = ['dice1', 'dice2', 'dice3', 'dice4']; // Nomes dos seus blocos de ODS
    const randomIndex = Math.floor(Math.random() * diceOptions.length);
    const selectedDice = diceOptions[randomIndex];
    setLastDiceRoll(selectedDice); // Armazena para exibição, se quiser

    console.log('Dado sorteado:', selectedDice);

    // Passa o nome do jogador E o bloco de ODS sorteado para a tela Chat
    navigation.navigate('Chat', { playerName: trimmedName, selectedBlock: selectedDice });
  };

  return (
    <ImageBackground
      source={require('../assets/background_home.png')}
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Diálogo Sustentável</Text>
          <Text style={styles.subtitle}>Informe seu nome e role o dado para iniciar a nossa conversa =)</Text>

          <TextInput
            style={[styles.nameInput, showNameError && styles.nameInputError]}
            placeholder="Digite seu nome"
            placeholderTextColor="#A7FFEB"
            value={playerName}
            onChangeText={(text) => {
              setPlayerName(text);
              if (showNameError && text.trim() !== '') {
                setShowNameError(false);
              }
            }}
            maxLength={20}
          />

          {showNameError && (
            <Text style={styles.errorText}>
              Por favor, informe seu nome para iniciar o jogo.
            </Text>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={handleStartConversation}
          >
            <Text style={styles.buttonText}>
              {lastDiceRoll ? `Iniciar Conversa (${lastDiceRoll})` : 'Rolar o Dado e Iniciar'}
            </Text>
          </TouchableOpacity>

          {lastDiceRoll && (
            <Text style={styles.rollResultText}>
              Você rolou o dado: **{lastDiceRoll.replace('dice', 'Bloco ')}**!
            </Text>
          )}

          <Text style={styles.infoText}>
            Explore os Objetivos de Desenvolvimento Sustentável (ODS) da ONU através de um bate-papo descontraído. Cada escolha leva a uma nova descoberta!
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#E0F2F1',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#B2DFDB',
    marginBottom: 40,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  nameInput: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#B2DFDB',
  },
  nameInputError: {
    borderColor: '#FF6347',
    borderWidth: 2,
  },
  errorText: {
    color: '#FF6347',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#28A745',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20, // Ajustado para dar espaço ao texto do dado
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rollResultText: { // Novo estilo para o resultado do dado
    color: '#B2DFDB',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  infoText: {
    fontSize: 14,
    color: '#A7FFEB',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: '85%',
  },
});

export default HomeScreen;