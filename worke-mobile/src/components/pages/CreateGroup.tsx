import React from "react";
import { View, ScrollView } from "react-native";
import HeaderTitleButton from "../organisms/HeaderTitleButton";
import GroupCode from "../atoms/GroupCode";
import styles from "../../styles";
import GroupPassword from "../organisms/GroupPassword";
import MaxCapacityGroup from "../atoms/MaxCapacityGroup";
import CapacityAd from "../atoms/CapacityAd";
import Button from "../atoms/Button";

interface Props {
  navigation: any;
}

const CreateGroup: React.FC<Props> = ({ navigation }) => {
  const group = () => navigation.navigate("Group");
  const menu = () => navigation.navigate("Menu");

  return (
    <View style={styles.container}>
      <HeaderTitleButton
        onPress={group}
        title="criar grupo"
        search={false}
      ></HeaderTitleButton>
      <View style={styles.viewList}>
        <ScrollView>
          <View style={styles.viewSection}>
            <GroupCode code="7d6r"></GroupCode>
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
          <Button buttonText="criar grupo" onClick={menu}></Button>
        </View>
      </View>
    </View>
  );
};

export default CreateGroup;
