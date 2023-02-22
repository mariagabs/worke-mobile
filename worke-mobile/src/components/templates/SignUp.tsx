import React, { useEffect, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Image,
} from "react-native";
import styles from "../../styles";
import SignUpStep1 from "../organisms/SignUpStep1";
import SignUpStep2 from "../organisms/SignUpStep2";
import SignUpStep3 from "../organisms/SignUpStep3";
import SignUpStep4 from "../organisms/SignUpStep4";
import SignUpStep5 from "../organisms/SignUpStep5";
import SignUpStep6 from "../organisms/SignUpStep6";
import SignUpStep7 from "../organisms/SignUpStep7";
import SignUpStep8 from "../organisms/SignUpStep8";
import SignUpStep9 from "../organisms/SignUpStep9";
import SignUpStep10 from "../organisms/SignUpStep10";
import SignUpStep11 from "../organisms/SignUpStep11";
import Steps from "../molecules/Steps";
import LabelButton from "../atoms/LabelButton";
import { COLORS } from "../../../assets/colors";

const SignUp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const next = () => {
    let step = currentStep + 1;
    setCurrentStep(step);
  };

  let steps = [
    {
      step: 0,
      page: <SignUpStep1 />,
    },
    {
      step: 1,
      page: (
        <SignUpStep2
          onPressText={(isKeyboardVisible) =>
            setKeyboardVisible(isKeyboardVisible)
          }
        />
      ),
    },
    {
      step: 2,
      page: <SignUpStep3 />,
    },
    {
      step: 3,
      page: <SignUpStep4 />,
    },
    {
      step: 4,
      page: <SignUpStep5 />,
    },
    {
      step: 5,
      page: <SignUpStep6 />,
    },
    {
      step: 6,
      page: <SignUpStep7 />,
    },
    {
      step: 7,
      page: <SignUpStep8 />,
    },
    {
      step: 8,
      page: <SignUpStep9 />,
    },
    {
      step: 9,
      page: <SignUpStep10 />,
    },
    {
      step: 10,
      page: <SignUpStep11 />,
    },
  ];

  let buttonText =
    currentStep == 0 || currentStep == 10
      ? "INICIAR"
      : currentStep == 9
      ? "FINALIZAR"
      : "CONTINUAR";
  let colors = [COLORS.purple, COLORS.green, COLORS.pink, COLORS.blue];
  let chosenColor = COLORS.purple;
  let aux = 0;
  let step = currentStep == 0 ? currentStep : currentStep - 1;

  for (let i = 0; i <= step; i++) {
    if (currentStep >= 0 && i <= currentStep) {
      if (i >= colors.length) {
        chosenColor = colors[aux];
        aux++;
        if (aux > colors.length) {
          aux = 0;
        }
      } else {
        chosenColor = colors[i];
      }
    } else {
      chosenColor = COLORS.lighterGray;
    }
  }
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  return (
    <View>
      <Steps currentStep={currentStep} qtySteps={10} />
      <View style={styles.viewSignUp}>
        <View>{steps[currentStep].page}</View>
        {isKeyboardVisible ? (
          ""
        ) : (
          <View style={styles.labelSkipButton}>
            <LabelButton
              color={chosenColor}
              imageColor={chosenColor}
              text={buttonText}
              hideImage={currentStep == 10}
              onPress={next}
            />
          </View>
        )}
      </View>
      {currentStep == 10 ? (
        <Image
          style={styles.lines}
          source={require("../../../assets/2-lines.png")}
        ></Image>
      ) : (
        ""
      )}
    </View>
  );
};

export default SignUp;
