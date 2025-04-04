import { StyleSheet } from "react-native";  

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#1a1a1a',
        padding: 24
    },
    eventName: {
        color: "#fdfcfe", 
        fontWeight: "bold", 
        marginTop: 32,
    },
    eventDate: {
        color: "#6b6b6b", 
        fontSize: 14,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },  
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },
    listEmptyText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    }
});