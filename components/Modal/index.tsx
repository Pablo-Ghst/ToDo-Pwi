import { Modal as ReactModal, View, Button, TextInput, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ModalInterFace from "./ModalInterFace";
const Modal: React.FC<ModalInterFace> =
    ({ visible, input, setInput, addTodo, setVisible }) => {
        return (
            <ReactModal
                animationType="slide"
                visible={visible}
            >
                <View style={styles.modal}>
                   
                    <TextInput
                        style={styles.textarea}
                        placeholder='Nome da tarefa...'
                        value={input}
                        onChangeText={setInput}
                    />
                    <View style={styles.buttonView}>
                        <View style={styles.button}>
                            <Button title="Voltar" onPress={() => setVisible(false)} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Adicionar" onPress={addTodo} />
                        </View>
                    </View>
                </View>
            </ReactModal>
        )
    }

export default Modal;

const styles = StyleSheet.create({
    textarea: {
        backgroundColor: "#4169E1",
        marginVertical: 10,
        borderWidth: 1,
        padding: 5,
        width: "100%"
        
    },
    modal: {
        backgroundColor: "#E6E6FA",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    buttonView: {
        flexDirection: "row",
        
    },
    button: {
        backgroundColor: "#ADD8E6",
        width: "50%",
        marginHorizontal: 10
       
    }
    
})