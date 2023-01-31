import React, {useState, useRef, useEffect} from "react";
import { View, TextInput } from "react-native";
import styles from "../../styles.js";

const InputCode: React.FC = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  
  const [length, setLength] = useState(0);
  const [length2, setLength2] = useState(0);
  const [length3, setLength3] = useState(0);

  const handleChange = (e) => {
    setLength(length + 1);
  };
  const handleChange2 = (e) => {
    setLength2(length2 + 1);
  };
  const handleChange3 = (e) => {
    setLength3(length3 + 1);
  };

  useEffect(() => {
    if (!inputRef) return;
    const input = inputRef.current;
    if (length === 1) {
        input.focus();
    }
  }, [length]);

  useEffect(() => {
    if (!inputRef2) return;
    const input2 = inputRef2.current;
    if (length2 === 1) {
        input2.focus();
    }
  }, [length2]);

  useEffect(() => {
    if (!inputRef3) return;
    const input3 = inputRef3.current;
    if (length3 === 1) {
        input3.focus();
    }
  }, [length3]);

  return (
    <View style={styles.inputCodeGroup}>
        <TextInput
            style={[styles.inputCode, styles.margin10, styles.purple]}
            maxLength={1}
            keyboardType="number-pad"
            onChange={handleChange}>
        </TextInput>
        <TextInput 
            style={[styles.inputCode, styles.margin10, styles.pink]}
            maxLength={1}
            keyboardType="number-pad"
            onChange={handleChange2}
            ref={inputRef}>
        </TextInput>
        <TextInput 
            style={[styles.inputCode, styles.margin10, styles.green]}
            maxLength={1}
            keyboardType="number-pad"
            onChange={handleChange3}
            ref={inputRef2}>
        </TextInput>
        <TextInput 
            style={[styles.inputCode, styles.blue]}
            maxLength={1}
            keyboardType="number-pad"
            returnKeyType="done"
            ref={inputRef3}>
        </TextInput>
    </View>
  );
};

export default InputCode;