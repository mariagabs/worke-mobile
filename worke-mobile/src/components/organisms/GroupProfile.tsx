import React from "react";
import { View, ScrollView } from "react-native";
import styles from "../../styles";
import GroupCode from "../atoms/GroupCode";
import GroupList from "./GroupList";
interface Props {
  user: any;
}
const Group: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.defaultPadding}>
        <View style={styles.listHeight}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.groupCode}>
              <GroupCode code={user.group_code}></GroupCode>
            </View>
            <GroupList user={user}></GroupList>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Group;
