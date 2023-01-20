import React from "react";
import SignUpStep1 from "../organisms/SignUpStep1";

interface Props {
  navigation: any;
}
const SignUp: React.FC<Props> = ({ navigation }) => {
  return <SignUpStep1 navigation={navigation}></SignUpStep1>;
};
export default SignUp;
