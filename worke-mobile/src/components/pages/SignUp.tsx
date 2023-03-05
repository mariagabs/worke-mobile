import React from "react";
import SignUpTemplate from "../templates/SignUp";

interface Props {
  navigation: any;
}
const SignUp: React.FC<Props> = ({ navigation }) => {
  return <SignUpTemplate navigation={navigation} />;
};
export default SignUp;
