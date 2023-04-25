import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import styles from "../../styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";
interface Props {
  user: any;
}
const GroupList: React.FC<Props> = ({ user }) => {
  let list = [];

  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(0);

  useEffect(() => {
    const load = () => {
      const configurationObject = {
        url: "http://54.237.75.229:8000/grupoFuncionario/" + user.group,
        method: "GET",
      };
      axios(configurationObject)
        .then((response) => {
          if (response.status === 200) {
            const list = response.data;
            setUsers(list.usuarios);
            setAdmin(list.admin_id);
          } else {
            throw new Error("An error has occurred");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    load();
  }, []);
  const getList = () => {
    for (var i = 0; i < users.length; i++) {
      let imageUser =
        users[i].image !== null
          ? "data:image/png;base64," + users[i].image
          : null;
      list.push(
        <View key={users[i].id}>
          <View style={styles.groupListItem}>
            <View style={styles.groupListItemInfo}>
              {imageUser !== null && imageUser !== "" ? (
                <Image
                  style={styles.groupListPhoto}
                  source={{ uri: imageUser }}
                ></Image>
              ) : (
                <View style={styles.backgroundNoPhotoGroup}>
                  <FontAwesome5
                    name="user-alt"
                    size={40}
                    color={COLORS.lightGray}
                  />
                </View>
              )}
              <Text style={styles.groupListName}>{users[i].first_name}</Text>
            </View>
            {users[i].id === admin ? (
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

    return list;
  };
  return <View style={styles.groupList}>{getList()}</View>;
};

export default GroupList;
