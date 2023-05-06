import React from "react";
import { COLORS } from "../../../../assets/colors.js";
import { View, Pressable } from "react-native";
import { useTogglePasswordVisibility } from "./useTogglePasswordVisibility";
import { Ionicons } from "@expo/vector-icons";
import TextBox from "../../atoms/TextBox";
import styles from "../../../styles.js";

interface Props {
  passwordVisibility?: boolean;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  handlePasswordVisibility?: () => void;
  onChangeText?: (text: any) => void;
  errorInput?: boolean;
  errorText?: string;
  top?: number;
  submitEdit?: () => void;
  placeholder: string;
  onBlur?: () => void;
  onTouchStart?: () => void;
  text?: string;
}

const PasswordTextBox: React.FC<Props> = ({
  onChangeText,
  errorInput,
  errorText,
  top,
  submitEdit,
  placeholder,
  onBlur,
  onTouchStart,
  text,
}) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  // const [password, setPassword] = useState("");

  return (
    <View style={styles.inputPassword}>
      <TextBox
        inputPlaceHolder={placeholder}
        secureTextEntry={passwordVisibility}
        autoCorrect={false}
        onChangeText={onChangeText}
        errorInput={errorInput}
        errorText={errorText}
        top={top}
        submitEdit={submitEdit}
        onTouchStart={onTouchStart}
        onBlur={onBlur}
        text={text}
      />
      <Pressable
        onPress={handlePasswordVisibility}
        style={[
          styles.eyeIcon,
          errorInput ? styles.paddingTop25 : styles.paddingTop0,
        ]}
      >
        <Ionicons name={rightIcon} size={22} color={COLORS.lightGray} />
      </Pressable>
    </View>
  );
};

export default PasswordTextBox;
