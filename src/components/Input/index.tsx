import { Text, TextInput, TextInputProps, View } from "react-native";

type InputProps = TextInputProps & {
  name: string;
};

import styles from "./styles";

export function Input({ name, ...rest }: InputProps) {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.textInput}>
        <TextInput {...rest} style={styles.input} />
      </View>
    </View>
  );
}
