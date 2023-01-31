import React from "react";
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import styles from "../../styles";

interface Props {
  users: { name: string; photo: ImageSourcePropType; admin: boolean }[];
}

const GroupList: React.FC<Props> = ({ users }) => {
  var list = [];

  for (var i = 0; i < users.length; i++) {
    list.push(
      <View key={users[i].name}>
        <View style={styles.groupListItem}>
          <View style={styles.groupListItemInfo}>
            <Image
              style={styles.groupListPhoto}
              source={users[i].photo}
            ></Image>
            <Text style={styles.groupListName}>{users[i].name}</Text>
          </View>
          {users[i].admin ? (
            <Text style={styles.groupListAdmin}>Admin</Text>
          ) : (
            ""
          )}
        </View>
        {i < users.length - 1 ? (
          <View style={styles.groupListItemDivider}></View>
        ) : (
          ""
        )}
      </View>,
    );
  }

  return <ScrollView style={styles.groupList}>{list}</ScrollView>;
};

export default GroupList;
