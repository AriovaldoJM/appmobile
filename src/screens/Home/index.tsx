import React, { useState} from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from '../../components/participant';

export function Home() {
    const [participants, useParticipants] = useState(['Ariovaldo'])

    function handleParticipantAdd() {
        if(participants.includes('João')) {
            return Alert.alert("Participante existe", "Já existe um participante na lista com o nome de Ariovaldo")
        }
        useParticipants(prevState => [...prevState, 'Ana'])
    }
    function handleParticipantRemove(name:string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado!"),
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        console.log(`Remover participante ${name}`);
    }

    return (
        <View style={styles.container}>
            <Text key={"1"} style={styles.eventName}>
                Nome do evento
            </Text>
            <Text key={"2"} style={styles.eventDate}>
                Quarta-feira, 2 de abril de 2025
            </Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                /> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText} >+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={(_, idx) => idx.toString()} 
                renderItem={({ item }) => (
                    <Participant 
                        key={item} 
                        name={item} 
                        onRemove={() => handleParticipantRemove(item)}
                    />  
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
        </View>
    );
}