import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Logo } from '../../components/logo'

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <Text style={styles.title}>Encontre a Receita</Text>
            <Text style={styles.title}>Que combina com Você</Text>

            <View style={styles.form}>
                <TextInput
                    placeholder='Digite o Nome da Comida...'
                    style={styles.input}
                />
                <TouchableOpacity>
                    <Ionicons name="search" size={28} color="#4CBE6C"/>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#0e0e0e"
    },
    form: {
        backgroundColor: "#FFF",
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#ECECEC",
        paddingLeft: 8, 
        paddingRight: 8, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '90%',
        maxWidth: '90%',
        height: 54
    }
})