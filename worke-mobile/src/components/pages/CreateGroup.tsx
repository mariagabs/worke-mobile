import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import HeaderTitleButton from "../organisms/HeaderTitleButton";
import GroupCode from "../atoms/GroupCode";
import styles from "../../styles";
import GroupPassword from "../organisms/GroupPassword";
import MaxCapacityGroup from "../atoms/MaxCapacityGroup";
import CapacityAd from "../atoms/CapacityAd";
import Button from "../atoms/Button";
import DefaultModal from "../molecules/DefaultModal";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation: any;
}

const CreateGroup: React.FC<Props> = ({ navigation }) => {
  const group = () => navigation.navigate("Group");
  const menu = () => navigation.navigate("Menu");
  const [visible, setVisible] = useState(false);
  const modalVisible = () => setVisible(true);
  const [code, setCode] = useState("");

  const closeModal = (visible) => {
    setVisible(visible);
  };

  const generateCode = () => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 4) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  const createGroup = async () => {
    let group = await AsyncStorage.getItem("userGroup");
    let userGroup = JSON.parse(group);
    let user = await AsyncStorage.getItem("user");
    let userJSON = JSON.parse(user);
    const configurationObject = {
      url: "http://54.237.75.229:8000/criarGrupo/" + userJSON.id,
      method: "POST",
      data: userGroup,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(configurationObject)
      .then((response) => {
        if (response.status === 200) {
          menu();
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkCode = async () => {
    let code = generateCode();

    const configurationObject = {
      url: "http://54.237.75.229:8000/grupoCodigo/" + code,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(configurationObject)
      .then((response) => {
        if (response.status === 200) {
          if (!response.data) {
            let group = {
              codigo: code,
              qtd_participantes: 5,
            };
            AsyncStorage.setItem("userGroup", JSON.stringify(group));
            setCode(code);
          } else {
            checkCode();
          }
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    checkCode();
  }, []);

  return (
    <View style={styles.container}>
      {visible ? (
        <DefaultModal
          buttonText="ENTRE NO GRUPO"
          text={
            "SEU GRUPO FOI CRIADO, SEU CÓGIDO É " +
            code +
            "! COMPARTILHE COM SEUS AMIGOS!"
          }
          title="EBA!"
          type="shareGroup"
          onPressClose={(visible) => closeModal(visible)}
        ></DefaultModal>
      ) : (
        ""
      )}
      <HeaderTitleButton
        onPress={group}
        title="criar grupo"
      ></HeaderTitleButton>
      <View style={styles.viewList}>
        <ScrollView>
          <View style={styles.viewSection}>
            <GroupCode code={code}></GroupCode>
          </View>
          <View style={styles.viewSection}>
            <GroupPassword></GroupPassword>
          </View>
          <View style={styles.viewSection}>
            <MaxCapacityGroup></MaxCapacityGroup>
          </View>
          <View style={styles.viewSection}>
            <CapacityAd></CapacityAd>
          </View>
        </ScrollView>
        <View style={styles.buttonBottomPage}>
          <Button buttonText="criar grupo" onClick={createGroup}></Button>
        </View>
      </View>
    </View>
  );
};

export default CreateGroup;
