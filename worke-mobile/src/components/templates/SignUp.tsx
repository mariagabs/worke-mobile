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
import axios from "axios";

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
      page: (
        <SignUpStep3
          onPressText={(isKeyboardVisible) =>
            setKeyboardVisible(isKeyboardVisible)
          }
          invalidInput={invalid}
        />
      ),
    },
    {
      step: 3,
      name: "password",
      page: (
        <SignUpStep4
          onPressText={(isKeyboardVisible) =>
            setKeyboardVisible(isKeyboardVisible)
          }
          invalidInput={invalid}
        />
      ),
    },
    {
      step: 4,
      name: "gender",
      page: <SignUpStep5 invalidInput={invalid} />,
    },
    {
      step: 5,
      name: "birth_date",
      page: (
        <SignUpStep6
          onPressText={(isKeyboardVisible) =>
            setKeyboardVisible(isKeyboardVisible)
          }
          invalidInput={invalid}
        />
      ),
    },
    {
      step: 6,
      name: "height",
      page: (
        <SignUpStep7
          onPressText={(isKeyboardVisible) =>
            setKeyboardVisible(isKeyboardVisible)
          }
          invalidInput={invalid}
        />
      ),
    },
    {
      step: 7,
      name: "weight",
      page: (
        <SignUpStep8
          onPressText={(isKeyboardVisible) =>
            setKeyboardVisible(isKeyboardVisible)
          }
          invalidInput={invalid}
        />
      ),
    },
    {
      step: 8,
      name: "frequency",
      page: <SignUpStep9 invalidInput={invalid} />,
    },
    {
      step: 9,
      name: "expectations",
      page: <SignUpStep10 invalidInput={invalid} />,
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
  const createGroup = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    await AsyncStorage.setItem("user", user);
    navigation.navigate("Group");
  };

  const nextStep = async () => {
    let step = currentStep + 1;

    if (step === 1) {
      let userCreate = {
        first_name: "",
        name: "",
        email: "",
        password: "",
        gender: "NONE",
        birth_date: "",
        height: 0,
        weight: 0,
        frequency: 0,
        expectations: JSON.stringify([]),
      };
      console.log(userCreate);
      await AsyncStorage.setItem("userCreate", JSON.stringify(userCreate));
    }

    if (step === 11) createGroup();
    else {
      setCurrentStep(step);
    }
  };

  const register = async () => {
    let user = await AsyncStorage.getItem("userCreate");
    console.log(user);
    let userCreate = JSON.parse(user);
    // delete userCreate.birth_date;
    // delete userCreate.expectations;
    // delete userCreate.height;
    // delete userCreate.weight;
    // delete userCreate.frequency;
    // delete userCreate.gender;
    // delete userCreate.password;
    userCreate.first_name = userCreate.name;
    const configurationObject = {
      url: "http://192.168.15.12:8000/register",
      method: "POST",
      data: userCreate,
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(userCreate);

    axios(configurationObject)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          nextStep();

          console.log(response.status);
          return response;
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
          userCreate.first_name =
            userCreate.name.indexOf(" ") !== -1
              ? userCreate.name.split(" ")[0]
              : userCreate.name;
          setInvalid(false);
          nextStep();
        }
        break;
      case "email":
        let validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!userCreate.email.trim().match(validRegex)) {
          setInvalid(true);
        } else {
          setInvalid(false);
          nextStep();
        }
        break;
      case "password":
        if (userCreate.password.trim() === "") {
          setInvalid(true);
        } else {
          setInvalid(false);
          nextStep();
        }
        break;
      case "gender":
        if (userCreate.gender.trim() === "NONE") {
          setInvalid(true);
        } else {
          setInvalid(false);
          nextStep();
        }
        break;
      case "birth_date":
        let regex =
          /^(\d{4}[\/\-](0?[1-9]|1[012])[\/\-]0?[1-9]|[12][0-9]|3[01])$/;
        let date = userCreate.birth_date;
        if (regex.test(userCreate.birth_date)) {
          var parts = date.split("/");
          var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
          var dtCurrent = new Date();

          if (dtCurrent.getFullYear() < dtDOB.getFullYear()) {
            setInvalid(true);
          } else if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 13) {
            setInvalid(true);
          } else {
            setInvalid(false);
            nextStep();
          }
        } else {
          setInvalid(true);
        }
        break;
      case "height":
        let height = userCreate.height.toString();

        if (height !== "" && height !== "0") {
          setInvalid(false);
          nextStep();
        } else setInvalid(true);
        break;
      case "weight":
        let weight = userCreate.weight.toString();

        if (weight !== "" && weight !== "0") {
          setInvalid(false);
          nextStep();
        } else setInvalid(true);
        break;
      case "frequency":
        let frequency = userCreate.frequency;
        if (frequency === 0) {
          setInvalid(true);
        } else {
          setInvalid(false);
          nextStep();
        }
        break;
      case "expectations":
        let expectations = JSON.parse(userCreate.expectations);
        if (expectations.length === 0) {
          setInvalid(true);
        } else {
          setInvalid(false);
          console.log("register");
          // nextStep();
          register();
        }
        break;
      case "end":
        nextStep();
        break;
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
