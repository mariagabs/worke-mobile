import React, { useEffect, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
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
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation: any;
}

const SignUp: React.FC<Props> = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [invalid, setInvalid] = useState(false);

  let steps = [
    {
      step: 0,
      name: "start",
      page: <SignUpStep1 />,
    },
    {
      step: 1,
      name: "name",
      page: (
        <SignUpStep2
          onPressText={(isKeyboardVisible) =>
            setKeyboardVisible(isKeyboardVisible)
          }
          invalidInput={invalid}
        />
      ),
    },
    {
      step: 2,
      name: "email",
      page: <SignUpStep3 />,
    },
    {
      step: 3,
      name: "password",
      page: <SignUpStep4 />,
    },
    {
      step: 4,
      name: "sex",
      page: <SignUpStep5 />,
    },
    {
      step: 5,
      name: "birthDate",
      page: <SignUpStep6 />,
    },
    {
      step: 6,
      name: "height",
      page: <SignUpStep7 />,
    },
    {
      step: 7,
      name: "weigth",
      page: <SignUpStep8 />,
    },
    {
      step: 8,
      name: "frequency",
      page: <SignUpStep9 />,
    },
    {
      step: 9,
      name: "expectations",
      page: <SignUpStep10 />,
    },
    {
      step: 10,
      name: "end",
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
  let userCreate = {
    name: "",
    email: "",
    password: "",
    sex: "",
    birthDate: "",
    height: 0,
    weigth: 0,
    frequency: 0,
    expec: 0,
  };

  const next = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    let userCreate = JSON.parse(user);

    switch (steps[currentStep].name) {
      case "start":
        nextStep();
        break;
      case "name":
        if (userCreate.name === "") {
          setInvalid(true);
        } else {
          setInvalid(false);
          nextStep();
        }
    }
  };

  const nextStep = () => {
    let step = currentStep + 1;

    if (step === 11) createGroup();
    else {
      setCurrentStep(step);
    }
  };

  for (let i = 0; i <= step; i++) {
    if (currentStep >= 0 && i <= currentStep) {
      if (i >= colors.length) {
        chosenColor = colors[aux];
        aux++;
        if (aux >= colors.length) {
          aux = 0;
        }
      } else {
        chosenColor = colors[i];
      }
    } else {
      chosenColor = COLORS.lighterGray;
    }
  }

  if (currentStep === 10) chosenColor = COLORS.purple;

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const backHome = () => navigation.navigate("Login");
  const createGroup = () => navigation.navigate("Group");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setKeyboardVisible(false);
        }}
      >
        <View>
          <View style={styles.stepsSignUp}>
            <Steps
              currentStep={currentStep}
              qtySteps={10}
              onPress={(currentStep) => {
                setCurrentStep(currentStep);
                currentStep == 0 ? backHome() : "";
              }}
            />
          </View>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
