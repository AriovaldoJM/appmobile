import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Participant } from '../../components/participant';

export function Home() {

    function handleParticipantAdd() {
        console.log("Adicionar participante");
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
            <Participant />
            <Participant />
        </View>
    );
}