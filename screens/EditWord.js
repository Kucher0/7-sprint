import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import { useState } from "react";
import { COLORS } from "../constants";

function EditWord({ route, navigation }) {
  const { wordData } = route.params;
  const [phonetics, setPhonetics] = useState(wordData.phonetics);
  const [partOfSpeech, setPartOfSpeech] = useState(wordData.partOfSpeech);
  const [meaning, setMeaning] = useState(wordData.meaning);

  function onSave() {
    navigation.navigate("AllWords", {
      editedWord: { ...wordData, phonetics, partOfSpeech, meaning },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Phonetics:</Text>
      <TextInput
        style={styles.input}
        value={phonetics}
        onChangeText={setPhonetics}
        placeholder="phonetics"
        placeholderTextColor={COLORS.grey600}
      />

      <Text style={styles.label}>Part of speech:</Text>
      <TextInput
        style={styles.input}
        value={partOfSpeech}
        onChangeText={setPartOfSpeech}
        placeholder="part of speech"
        placeholderTextColor={COLORS.grey600}
      />

      <Text style={styles.label}>Meaning:</Text>
      <TextInput
        style={[styles.input, styles.meaningInput]}
        value={meaning}
        onChangeText={setMeaning}
        placeholder="meaning"
        placeholderTextColor={COLORS.grey600}
        multiline
      />

      <Pressable style={styles.buttonContainer} onPress={onSave}>
        <Text style={{ fontSize: 24, color: COLORS.white }}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 110,
    marginHorizontal: 12,
  },
  label: {
    fontSize: 12,
    color: COLORS.grey600,
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    fontSize: 18,
    borderColor: COLORS.primary200,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: COLORS.black,
  },
  meaningInput: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    marginTop: 24,
    borderRadius: 5,
    backgroundColor: COLORS.primary900,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditWord;