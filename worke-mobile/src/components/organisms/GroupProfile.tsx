import React from "react";
import { View, ScrollView } from "react-native";
import styles from "../../styles";
import GroupCode from "../atoms/GroupCode";
import GroupList from "./GroupList";
interface Props {
  user: any;
}
const Group: React.FC<Props> = ({ user }) => {
  console.log(user);
  let usersGroup = [
    {
      name: "você",
      photo: require("../../../assets/karina.png"),
      admin: false,
    },
    {
      name: "Fernanda",
      photo: require("../../../assets/fernanda.png"),
      admin: false,
    },
    {
      name: "Gabriela",
      photo: require("../../../assets/gabriela.png"),
      admin: false,
    },
    {
      name: "Guilherme",
      photo: require("../../../assets/guilherme.png"),
      admin: false,
    },
    { name: "José", photo: require("../../../assets/jose.png"), admin: true },
    {
      name: "Renata",
      photo: require("../../../assets/renata.png"),
      admin: false,
    },
    {
      name: "Ricardo",
      photo: require("../../../assets/ricardo.png"),
      admin: false,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.defaultPadding}>
        <View style={styles.listHeight}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.groupCode}>
              <GroupCode code={user.group_code}></GroupCode>
            </View>
            <GroupList users={usersGroup}></GroupList>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Group;
