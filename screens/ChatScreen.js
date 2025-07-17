// src/screens/ChatScreen.js

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import conversationBlocks from '../data/conversationBlocks'; // <<< Importe os blocos de conversa

const ChatScreen = ({ navigation }) => {
  const route = useRoute();
  // Extrai o playerName E o selectedBlock dos parâmetros
  const { playerName, selectedBlock } = route.params;

  // Usa o bloco sorteado para definir o fluxo inicial da conversa
  const initialConversation = conversationBlocks[selectedBlock];

  // O ID inicial da conversa será o ID do primeiro turno do bloco sorteado
  const [currentTurnId, setCurrentTurnId] = useState(initialConversation[0].id);
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  // Encontra o turno atual DENTRO DO BLOCO SORTEADO
  const currentTurn = initialConversation.find(turn => turn.id === currentTurnId) || conversationBlocks.farewell_block; // Fallback para o farewell_block se não encontrar

  useEffect(() => {
    if (currentTurn) {
      setMessages(prevMessages => [...prevMessages, { speaker: currentTurn.speaker, text: currentTurn.text, ods: currentTurn.ods }]);
      // Se for o fim de um bloco (ou uma ramificação específica dentro dele)
      if (currentTurn.isEnd && currentTurn.id === 'farewell_block') {
         // Pode adicionar lógica para voltar ao início ou mostrar um resumo do bloco
         console.log('Fim do bloco de ODS.');
      }
    }
  }, [currentTurnId]);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleOptionPress = (option) => {
    setMessages(prevMessages => [...prevMessages, { speaker: 'player', text: option.text, playerName: playerName }]);
    setCurrentTurnId(option.nextId);
  };

  // Se o currentTurn não for encontrado, significa que chegamos a um final ou erro
  if (!currentTurn) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Fim da conversa ou erro no fluxo!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Voltar ao Início</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/background_chat.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          <ScrollView
            style={styles.messagesContainer}
            contentContainerStyle={styles.messagesContentContainer}
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          >
            {messages.map((msg, index) => (
              <View key={index} style={[styles.messageBubble, msg.speaker === 'player' ? styles.playerBubble : styles.friendBubble]}>
                {msg.speaker === 'player' && <Text style={styles.playerNameText}>{msg.playerName || 'Você'}:</Text>}
                <Text style={[styles.messageText, msg.speaker === 'player' ? styles.playerText : styles.friendText]}>
                  {msg.text}
                </Text>
                {msg.ods && msg.speaker === 'friend' && (
                  <Text style={styles.odsTag}>{msg.ods}</Text>
                )}
              </View>
            ))}
          </ScrollView>

          <View style={styles.optionsContainer}>
            {currentTurn.options && currentTurn.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleOptionPress(option)}
              >
                <Text style={styles.optionButtonText}>{option.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messagesContentContainer: {
    justifyContent: 'flex-end',
  },
  messageBubble: {
    padding: 12,
    borderRadius: 20,
    marginBottom: 8,
    maxWidth: '80%',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
  },
  friendBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 5,
  },
  playerBubble: {
    backgroundColor: 'rgba(220, 248, 198, 0.9)',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  playerText: {
    color: '#333',
  },
  friendText: {
    color: '#333',
  },
  odsTag: {
    fontSize: 11,
    color: '#607D8B',
    marginTop: 5,
    fontWeight: 'bold',
  },
  playerNameText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 2,
  },
  optionsContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(224, 224, 224, 0.7)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginVertical: 5,
    minWidth: '48%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  optionButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#28A745',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ChatScreen;