import { useState } from "react";
import { Alert, Text, View } from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";

import styles from "./styles";

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const registerClient = () => {
    Alert.alert("Cliente cadastrado!");
    toggleModal();
  };

  const _renderForm = () => {
    return (
      <View style={styles.form}>
        <View style={styles.input}>
          <Input
            name="Nome"
            placeholder="Digite o nome do Cliente"
            autoCapitalize="none"
            keyboardType="default"
          />
        </View>
        <View style={styles.input}>
          <Input
            name="Idade"
            placeholder="Digite a idade do Cliente"
            autoCapitalize="none"
            keyboardType="default"
            autoCorrect={false}
          />
        </View>
        <View style={styles.input}>
          <Input
            name="CPF"
            placeholder="Digite o cpf do Cliente"
            autoCapitalize="none"
            keyboardType="numeric"
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Button title="Cadastrar cliente" onPress={toggleModal} />
      </View>

      <Modal
        headerTitle="Cadastro"
        buttonTitle="Cadastrar"
        onClose={toggleModal}
        modalVisible={modalVisible}
        onAction={registerClient}
      >
        {_renderForm()}
      </Modal>
    </>
  );
}
