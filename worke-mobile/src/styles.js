import { Platform } from "react-native";
import { COLORS } from "../assets/colors.js";
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  view: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  viewList: {
    height: "100%",
    alignItems: "center",
    padding: 30,
    marginTop: 100,
  },
  terms: {
    alignItems: "center",
    padding: 30,
    marginTop: 100,
    marginBottom: 30,
  },
  viewSection: {
    width: Dimensions.get("window").width - 60,
    marginBottom: 30,
  },
  defaultPadding: {
    paddingHorizontal: 30,
  },
  fullWidth: {
    width: "100%",
  },
  centerView: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    marginBottom: 60,
  },
  span: {
    color: COLORS.black,
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Nunito-Bold",
    alignSelf: "flex-end",
    marginBottom: 30,
    marginTop: 10,
  },
  clickableSpan: {
    marginBottom: -34,
    marginTop: 0,
  },
  divider: {
    width: "100%",
  },
  createAccount: {
    fontSize: 16,
    color: COLORS.black,
    marginTop: 14,
    fontFamily: "Nunito",
  },
  bottomInfoText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomInfo: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    bottom: 40,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.lightGray,
    borderRadius: 7,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 18,
    textAlign: "left",
    fontSize: 18,
    fontFamily: "Nunito-SemiBold",
    justifyContent: "center",
    color: COLORS.lightGray,
  },
  inputPassword: {
    justifyContent: "center",
  },
  inputCode: {
    width: 48,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.lightGray,
    borderRadius: 7,
    height: 62,
    paddingTop: 10,
    paddingHorizontal: 12,
    textAlign: "center",
    fontSize: 32,
    fontFamily: "Nunito-SemiBold",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  eyeIcon: {
    alignSelf: "flex-end",
    position: "absolute",
    paddingRight: 18,
  },
  paddingTop0: {
    paddingTop: 0,
  },
  paddingTop25: {
    paddingTop: 25,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 2,
    fontFamily: "Nunito-Black",
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: COLORS.black,
    width: "100%",
    borderRadius: 7,
    height: 48,
    paddingVertical: 15,
  },
  errorInput: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.red,
    borderRadius: 7,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 18,
    textAlign: "left",
    fontSize: 16,
    marginTop: 25,
    fontFamily: "Nunito-SemiBold",
    justifyContent: "center",
    color: COLORS.lightGray,
  },
  errorText: {
    position: "absolute",
    bottom: -16,
    color: COLORS.red,
    fontFamily: "Nunito-SemiBold",
    fontSize: 12,
  },
  signUpImage: {
    alignSelf: "flex-end",
    marginRight: -60,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: "Nunito-Medium",
    textAlign: "center",
    color: COLORS.black,
    marginBottom: 20,
  },
  width300: {
    width: 300,
  },
  width200: {
    width: 200,
  },
  width250: {
    width: 250,
  },
  titleBold: {
    fontFamily: "Nunito-ExtraBold",
    color: COLORS.black,
    fontSize: 28,
  },
  info: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Nunito",
    minWidth: 230,
    width: "80%",
    marginTop: 55,
  },
  textLabelButton: {
    fontSize: 22,
    letterSpacing: 2.5,
    fontFamily: "Nunito-Black",
  },
  textPink: {
    color: COLORS.pink,
  },
  textPurple: {
    color: COLORS.purple,
  },
  textBlue: {
    color: COLORS.blue,
  },
  textGreen: {
    color: COLORS.green,
  },
  iconButton: {
    color: COLORS.purple,
  },
  arrowBack: {
    position: "absolute",
    alignSelf: "flex-start",
    left: 30,
    top: 65,
    paddingVertical: 10,
    paddingRight: 10,
    zIndex: 100,
  },
  step: (qtd) => ({
    width: (Dimensions.get("window").width - (60 + (qtd - 1) * 5)) / qtd,
    height: 5,
    borderRadius: 7,
  }),
  backgroundPink: {
    backgroundColor: COLORS.pink,
  },
  backgroundPurple: {
    backgroundColor: COLORS.purple,
  },
  backgroundGreen: {
    backgroundColor: COLORS.green,
  },
  backgroundBlue: {
    backgroundColor: COLORS.blue,
  },
  backgroundLightPink: {
    backgroundColor: COLORS.lightPink,
  },
  backgroundLightPurple: {
    backgroundColor: COLORS.lightPurple,
  },
  backgroundLightGreen: {
    backgroundColor: COLORS.lightGreen,
  },
  backgroundLightBlue: {
    backgroundColor: COLORS.lightBlue,
  },
  backgroundLighterGray: {
    backgroundColor: COLORS.lighterGray,
  },
  stepsPosition: {
    position: "absolute",
    top: 70,
    alignSelf: "flex-start",
    left: 30,
  },
  steps: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 70,
    alignSelf: "center",
    paddingHorizontal: 30,
  },
  stepsCount: {
    position: "absolute",
    top: 100,
    alignSelf: "flex-end",
    right: 30,
  },
  stepsCountText: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 20,
    color: COLORS.lightGray,
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  gender: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  genderM: {
    marginLeft: 0,
  },
  genderF: {
    marginRight: 0,
  },
  genderText: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 14,
    letterSpacing: 2.5,
    marginTop: 15,
    textAlign: "center",
    color: COLORS.black,
  },
  defaultText: {
    textAlign: "center",
    color: COLORS.black,
  },
  fontBold: {
    fontFamily: "Nunito-Bold",
  },
  fontBlack: {
    fontFamily: "Nunito-Black",
  },
  fontExtraBold: {
    fontFamily: "Nunito-ExtraBold",
  },
  font32: {
    fontSize: 32,
  },
  font14: {
    fontSize: 14,
  },
  widthAuto: {
    width: "auto",
  },
  marginTop50: {
    marginTop: 50,
  },
  marginTop20: {
    marginTop: 20,
  },
  letterSpacing2: {
    letterSpacing: 2,
  },
  letterSpacing25: {
    letterSpacing: 2.5,
  },
  fontDefault: {
    fontFamily: "Nunito",
  },
  font20: {
    fontSize: 20,
  },
  width70: {
    width: "70%",
  },
  genderTextSelected: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 14,
    letterSpacing: 2.5,
    marginTop: 15,
    textAlign: "center",
    color: COLORS.white,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.green,
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: COLORS.green,
    overflow: "hidden",
  },
  defaultAnswerGender: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Nunito-ExtraBold",
    width: "auto",
    letterSpacing: 2.5,
    marginTop: 50,
    color: COLORS.white,
    backgroundColor: COLORS.green,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.green,
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 8,
    overflow: "hidden",
  },
  blankTextBox: {
    fontSize: 36,
    fontFamily: "Nunito",
    textAlign: "center",
    marginTop: 40,
  },
  blankTextBoxComp: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
  },
  complementaryText: {
    fontFamily: "Nunito",
    fontSize: 25,
  },
  labelSkipButton: {
    position: "absolute",
    bottom: 30,
    height: 70,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  labelButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  skipButton: {
    fontFamily: "Nunito-Black",
    fontSize: 16,
    letterSpacing: 2,
    color: COLORS.lighterGray,
  },
  errorTextBlank: {
    backgroundColor: COLORS.lightRed,
    color: COLORS.red,
    fontFamily: "Nunito-SemiBold",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 7,
    overflow: "hidden",
    position: "absolute",
  },
  bottom90: {
    bottom: -90,
  },
  bottom150: {
    bottom: -150,
  },
  selectionLabel: {
    borderWidth: 1,
    width: "100%",
    padding: 20,
    borderRadius: 7,
    marginTop: 20,
  },
  backgroundWhiteNoHeight: {
    backgroundColor: COLORS.white,
  },
  borderPink: {
    borderColor: COLORS.pink,
  },
  borderBlue: {
    borderColor: COLORS.blue,
  },
  borderGreen: {
    borderColor: COLORS.green,
  },
  borderPurple: {
    borderColor: COLORS.purple,
  },
  textSelectionLabel: {
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "Nunito-ExtraBold",
    letterSpacing: 2,
    // whiteSpace: Platform.OS === "android" ? "nowrap" : "",
  },
  expectations: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expect: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: (Dimensions.get("window").width - 80) / 2,
  },
  lines: {
    position: "absolute",
    alignSelf: "center",
    bottom: -10,
  },
  linesOnTop: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
    height: "18%",
  },
  userPhotoIcon: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  photoStar: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: -11,
    right: -12,
  },
  starText: {
    color: COLORS.white,
    fontFamily: "Nunito-ExtraBold",
    textAlign: "center",
    fontSize: 12,
    position: "absolute",
    top: 6,
    left: 6.5,
    width: 15,
  },
  titleHome: {
    fontSize: 20,
    fontFamily: "Nunito-ExtraBold",
    color: COLORS.black,
    textTransform: "uppercase",
  },
  notificationIndicator: {
    backgroundColor: COLORS.pink,
    width: 10,
    height: 10,
    borderRadius: 100,
    position: "absolute",
    right: 3,
    top: 4,
  },
  levelProgress: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  barLevel: {
    backgroundColor: COLORS.almostWhite,
    width: "100%",
    height: 10,
    borderRadius: 7,
  },
  barLevelProgress: (progress) => ({
    width: progress,
    position: "absolute",
    height: 10,
    borderRadius: 7,
  }),
  levelDetails: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  infoColor: {
    fontSize: 16,
    fontFamily: "Nunito-ExtraBold",
  },
  level: {
    color: COLORS.lightGray,
    fontFamily: "Nunito-Bold",
    fontSize: 16,
  },
  homeNotification: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  homePhotoName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userNameGreeting: {
    marginLeft: 20,
  },
  homeHeader: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
  dividerThin: {
    width: "150%",
    height: 0.3,
    marginTop: 20,
    backgroundColor: COLORS.lighterGray,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  navigationArea: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    bottom: 0,
  },
  navigationBar: {
    backgroundColor: COLORS.white,
    width: Dimensions.get("window").width,
    display: "flex",
    flexDirection: "row",
    height: 85,
    justifyContent: "space-between",
    paddingHorizontal: 45,
    alignItems: "center",
    paddingVertical: 10,
    paddingTop: 0,
    zIndex: 1,
  },
  boxShadow: {
    backgroundColor: COLORS.white,
    width: "100%",
    height: 120,
    shadowColor: "#000000",
    shadowOpacity: 0.03,
    shadowRadius: 10,
    shadowOffset: {
      height: -2,
      width: 2,
    },
    position: "absolute",
    elevation: 24,
  },
  navigationSelected: {
    display: "flex",
    flexDirection: "row",
    width: 4,
    height: 4,
    borderRadius: 100,
    alignSelf: "center",
    position: "absolute",
    bottom: -10,
  },
  exercisesImage: {
    width: 240,
    resizeMode: "stretch",
    height: 200,
    position: "absolute",
    right: -30,
    bottom: -25,
  },
  myExercises: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: 215,
    marginBottom: 10,
  },
  headerMyExercises: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  subtitleHome: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 18,
    letterSpacing: 1.5,
  },
  descriptionMyExercises: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    height: "100%",
    justifyContent: "flex-end",
  },
  startMyExercises: {
    display: "flex",
    flexDirection: "row",
  },
  cardMyExercises: {
    marginTop: 10,
    borderColor: COLORS.green,
    borderWidth: 1,
    width: "100%",
    height: 150,
    borderRadius: 7,
    padding: 15,
  },
  descriptionExerciseTitle: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 16,
    letterSpacing: 1.5,
    textAlign: "left",
  },
  arrowSize: {
    width: 20,
    height: 20,
    resizeMode: "stretch",
  },
  levelDescription: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 18,
    color: COLORS.black,
    marginBottom: 5,
    textTransform: "uppercase",
  },
  home: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    padding: 30,
    marginTop: 40,
  },
  exerciseCard: {
    borderWidth: 1,
    borderRadius: 7,
    width: (Dimensions.get("window").width - 80) / 2,
    padding: 15,
    marginBottom: 20,
  },
  exerciseCardSmall: {
    height: 80,
  },
  exerciseCardBig: {
    height: 110,
  },
  exerciseCardTitle: {
    fontSize: 12,
    fontFamily: "Nunito-ExtraBold",
    textTransform: "uppercase",
  },
  exerciseCardDesc: {
    fontSize: 12,
    fontFamily: "Nunito-Bold",
    color: COLORS.lightGray,
    textTransform: "uppercase",
  },
  exerciseCardImage: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  favorites: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  rankingContainer: {
    width: "100%",
    height: "100%",
    marginTop: 60,
  },
  topRankPhoto: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  starTopRank: {
    position: "absolute",
    top: -9,
    right: -9,
  },
  rank: {
    position: "absolute",
    bottom: -15,
    alignSelf: "center",
  },
  rankTextBackground: {
    width: 30,
    height: 30,
    borderRadius: 100,
    paddingTop: 4,
  },
  backgroundLightPink: {
    backgroundColor: COLORS.lightPink,
  },
  backgroundLightBlue: {
    backgroundColor: COLORS.lightBlue,
  },
  backgroundLightPurple: {
    backgroundColor: COLORS.lightPurple,
  },
  backgroundLightGreen: {
    backgroundColor: COLORS.lightGreen,
  },
  rankText: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 16,
    textAlign: "center",
  },
  rankTopInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  rankTopInfoHorizontal: {
    marginTop: 0,
    marginLeft: 15,
  },
  rankTopInfoVertical: {
    marginTop: 20,
    marginLeft: 0,
  },
  rankingPhotos: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rankingPhotosRow: {
    flexDirection: "row",
  },
  rankingPhotosColumn: {
    flexDirection: "column",
  },
  nameRankTop: {
    fontFamily: "Nunito-ExtraBold",
    color: COLORS.black,
    letterSpacing: 1,
    fontSize: 16,
    textAlign: "center",
    maxWidth: "80%",
    marginBottom: 6,
  },
  pointsRankTop: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 14,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 1,
    display: "flex",
    flexWrap: "nowrap",
  },
  descRankTop: {
    fontFamily: "Nunito-ExtraBold",
    color: COLORS.lightGray,
    textTransform: "capitalize",
    fontSize: 14,
    letterSpacing: 1,
    textAlign: "center",
  },
  ranking: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 50,
  },
  rankingTop: {},
  rankingLow: {
    marginBottom: -80,
  },
  rankingList: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  rankingCard: {
    borderWidth: 1,
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginTop: 15,
  },
  imageRankList: {
    width: 50,
    height: 50,
    borderRadius: 7,
    marginLeft: 20,
    marginRight: 20,
  },
  imageRankListNoPhoto: {
    width: 50,
    height: 50,
    borderRadius: 7,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: COLORS.almostWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  starRankList: {
    position: "absolute",
    bottom: -11,
    right: 8,
  },
  nameRankList: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  pointsRankList: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
    position: "absolute",
    right: 15,
  },
  groupTitleGroup: {
    display: "flex",
    flexDirection: "row",
  },
  groupTitle: {
    color: COLORS.black,
    fontSize: 28,
    fontFamily: "Nunito",
    marginRight: 8,
  },
  groupTitleBold: {
    color: COLORS.black,
    fontSize: 28,
    fontFamily: "Nunito-Black",
    marginBottom: 25,
  },
  inputCodeGroup: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 25,
  },
  margin10: {
    marginRight: 10,
  },
  codeGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    backgroundColor: "transparent",
  },
  width100: {
    width: 100,
  },
  purple: {
    color: COLORS.purple,
  },
  pink: {
    color: COLORS.pink,
  },
  green: {
    color: COLORS.green,
  },
  blue: {
    color: COLORS.blue,
  },
  groupLabel: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: "Nunito-Black",
    letterSpacing: 2,
    marginRight: 12,
  },
  groupLabelContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
  },
  achievementCard: {
    borderColor: COLORS.lighterGray,
    borderWidth: 1,
    borderRadius: 7,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: (Dimensions.get("window").width - 80) / 2,
    paddingVertical: 25,
    marginBottom: 20,
  },
  achievementNumber: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 38,
    letterSpacing: 2,
  },
  achievementDescription: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 14,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  subAchievementCard: {
    fontFamily: "Nunito-SemiBold",
    color: COLORS.lightGray,
    fontSize: 12,
    letterSpacing: 1,
  },
  achievementsList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 30,
  },
  achievements: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
  },
  userPhoto: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  cameraIcon: {
    position: "absolute",
    bottom: -10,
    right: -10,
    backgroundColor: COLORS.black,
    width: 35,
    borderRadius: 100,
    padding: 7,
    borderColor: COLORS.white,
    borderWidth: 3,
  },
  nameProfile: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 18,
    color: COLORS.black,
    textTransform: "uppercase",
    marginTop: 20,
  },
  profilePhoto: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  linesProfile: {
    position: "absolute",
    top: -20,
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    marginTop: 90,
    alignItems: "center",
  },
  profileTabs: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    marginTop: 25,
  },
  bodyChart: {
    backgroundColor: COLORS.white,
    margin: 30,
    marginBottom: 20,
    borderColor: COLORS.green,
    borderWidth: 1,
    borderRadius: 7,
  },
  chartTitle: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20,
    fontFamily: "Nunito-ExtraBold",
    color: COLORS.green,
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  chartHeader: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
  },
  bodyCard: {
    borderWidth: 1,
    padding: 15,
    width: (Dimensions.get("window").width - 80) / 2,
    borderRadius: 7,
  },
  bodyCardTitle: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 3,
  },
  bodyCardDescription: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 14,
    color: COLORS.lightGray,
    letterSpacing: 1,
  },
  bodyCards: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 25,
  },
  personalInfo: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingTop: 25,
    height: "100%",
  },
  personalInfoField: {
    marginBottom: 20,
  },
  fieldTitle: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 14,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 7,
  },
  buttonBottomBar: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 50,
  },
  fullHeight: {
    height: "100%",
  },
  backgroundWhite: {
    backgroundColor: COLORS.white,
    height: "100%",
  },
  cardGroupCode: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 7,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
    marginTop: 20,
  },
  cardGroupCodeTitle: {
    fontFamily: "Nunito-Black",
    fontSize: 18,
    color: COLORS.black,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  infoCardGroupCode: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  codeGroupCard: {
    fontFamily: "Nunito-Black",
    color: COLORS.blue,
    letterSpacing: 2,
    fontSize: 38,
    textTransform: "uppercase",
    paddingRight: 10,
  },
  groupList: {
    borderWidth: 1,
    borderColor: COLORS.green,
    width: "100%",
    borderRadius: 7,
    marginTop: 20,
    marginBottom: 20,
  },
  groupListItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  groupListPhoto: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 15,
    marginRight: 10,
  },
  groupListItemDivider: {
    height: 1,
    backgroundColor: COLORS.green,
    width: "100%",
  },
  groupListName: {
    textTransform: "capitalize",
    fontFamily: "Nunito-SemiBold",
    color: COLORS.black,
    letterSpacing: 0.5,
    fontSize: 16,
  },
  groupListItemInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  groupListAdmin: {
    color: COLORS.green,
    fontFamily: "Nunito-SemiBold",
    fontSize: 14,
  },
  listHeight: {
    height: Dimensions.get("window").height - 370,
  },
  groupCode: {
    marginTop: 20,
  },
  pageTitle: {
    fontFamily: "Nunito-Black",
    fontSize: 16,
    letterSpacing: 2,
    textTransform: "uppercase",
    position: "absolute",
    color: COLORS.lightGray,
    alignSelf: "center",
    top: 75,
    textAlign: "center",
  },
  hasPassword: {
    borderColor: COLORS.green,
    borderWidth: 1,
    borderRadius: 7,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  loginPassword: {
    width: "100%",
    marginTop: 20,
  },
  passwordGroup: {
    marginTop: 30,
  },
  groupPassword: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 35,
  },
  headerGroupPassword: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleGroupPassword: {
    fontFamily: "Nunito-Black",
    fontSize: 14,
    color: COLORS.black,
    textTransform: "uppercase",
    marginLeft: 15,
    letterSpacing: 1,
  },
  maxCapacityGroup: {
    borderColor: COLORS.purple,
    borderWidth: 1,
    borderRadius: 7,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoMaxCapacity: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleMaxCapacity: {
    fontFamily: "Nunito-Black",
    fontSize: 14,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginLeft: 15,
  },
  maxCapacity: {
    fontFamily: "Nunito-Black",
    fontSize: 14,
    color: COLORS.purple,
    backgroundColor: COLORS.lightPurple,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    overflow: "hidden",
  },
  capacityAd: {
    backgroundColor: COLORS.darkWhite,
    borderRadius: 7,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  infoCapacityAd: {
    marginLeft: 15,
    fontFamily: "Nunito-Medium",
    fontSize: 14,
    letterSpacing: 1,
  },
  infoCapacityAdSpan: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 14,
    letterSpacing: 1,
    color: COLORS.purple,
  },
  buttonBottomPage: {
    position: "absolute",
    width: "100%",
    bottom: 150,
  },
  exercisesList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
  },
  myExercisesList: {
    height: Dimensions.get("window").height - 280,
  },
  searchHeaderTitle: {
    position: "absolute",
    top: 75,
    right: 30,
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    zIndex: 2,
  },
  listButton: {
    width: "100%",
    paddingVertical: 20,
    borderRadius: 7,
    alignSelf: "center",
  },
  backgroundDarkWhite: {
    backgroundColor: COLORS.darkWhite,
  },
  listButtonText: {
    fontFamily: "Nunito-Bold",
    fontSize: 14,
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
  },
  textWhite: {
    color: COLORS.white,
  },
  textGray: {
    color: COLORS.gray,
  },
  buttonEditList: {
    backgroundColor: COLORS.white,
    width: "100%",
    position: "absolute",
    paddingTop: 30,
    bottom: 0,
    height: 140,
  },
  cardExerciseEdit: {
    display: "flex",
    flexDirection: "row",
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 7,
    width: "100%",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  exerciseEditInfo: {
    display: "flex",
    flexDirection: "column",
  },
  exerciseEditTitle: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: COLORS.black,
  },
  exerciseEditDesc: {
    fontFamily: "Nunito-Medium",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: COLORS.gray,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 30,
    paddingVertical: 0,
    paddingTop: 25,
    zIndex: 100,
  },
  modalNoBackground: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
    zIndex: 99,
  },
  modalTextSmall: {
    fontFamily: "Nunito-Medium",
    fontSize: 14,
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  modalBackground: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "100%",
    zIndex: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  exerciseBackgroundWaiting: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 0,
  },
  headerModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    paddingRight: 25,
  },
  headerModalTwoButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  modalTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textTransform: "uppercase",
    paddingHorizontal: 25,
  },
  modalTitleText: {
    fontFamily: "Nunito-Black",
    fontSize: 32,
    letterSpacing: 2,
    textTransform: "uppercase",
    paddingHorizontal: 25,
  },
  modalText: {
    fontFamily: "Nunito-Black",
    fontSize: 14,
    letterSpacing: 2,
    textAlign: "center",
    textTransform: "uppercase",
  },
  imageModal: {
    marginTop: 20,
    resizeMode: "stretch",
    width: "100%",
  },
  buttonModal: {
    width: "100%",
    bottom: 0,
    paddingVertical: 25,
    paddingTop: 0,
    paddingHorizontal: 25,
  },
  positionAbsolute: {
    position: "absolute",
  },
  secondTextBox: {
    marginTop: 20,
  },
  backButtonSignUp: {
    position: "absolute",
    top: 23,
  },
  viewSignUp: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: 30,
  },
  stepsSignUp: {
    zIndex: 2,
  },
  backgroundNoPhoto: {
    backgroundColor: COLORS.almostWhite,
    padding: 15,
    borderRadius: 10,
  },
  backgroundNoPhotoProfile: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: COLORS.almostWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  noInfo: {
    borderColor: COLORS.lighterGray,
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 20,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 110,
    position: "relative",
  },
  imageNoInfo: {
    alignSelf: "flex-end",
  },
  descNoInfo: {
    textAlign: "right",
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    width: (Dimensions.get("window").width - 70) / 2,
  },
  titleNoInfo: {
    fontSize: 14,
    fontFamily: "Nunito-Black",
    color: COLORS.pink,
  },
  textNoInfo: {
    fontSize: 12,
    fontFamily: "Nunito-Medium",
    color: COLORS.black,
    letterSpacing: 0.5,
  },
  spanFavorites: {
    color: COLORS.pink,
    fontFamily: "Nunito-Black",
  },

  textExerciseStart: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  textStart: {
    fontSize: 38,
    color: COLORS.white,
    fontFamily: "Nunito-Black",
    letterSpacing: 4,
  },
  timerStart: {
    fontSize: 80,
    color: COLORS.white,
    fontFamily: "Nunito-Black",
    letterSpacing: 4,
  },
  buttonExercise: {
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    width: Dimensions.get("window").width - 60,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 60,
  },
  buttonExerciseText: {
    fontSize: 22,
    color: COLORS.blue,
    fontFamily: "Nunito-Black",
    letterSpacing: 2,
  },
  labelExercise: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    bottom: 60,
    zIndex: 100,
  },
  timerExercise: {
    width: 90,
    height: 90,
    backgroundColor: COLORS.black,
    position: "absolute",
    top: 65,
    right: 30,
    zIndex: 100,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textTimerExercise: {
    color: COLORS.white,
    fontSize: 50,
    fontFamily: "Nunito-ExtraBold",
  },
  backgroundExercisePoints: {
    position: "absolute",
    backgroundColor: "#EEF5DE",
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
  imageExercisePoints: {
    position: "absolute",
    bottom: 0,
  },
  pointsExercise: {
    display: "flex",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    zIndex: 101,
    justifyContent: "flex-start",
    marginTop:
      Platform.OS === "ios"
        ? Dimensions.get("window").height - 353
        : Dimensions.get("window").height - 323,
  },
  textPoints: {
    fontFamily: "Nunito-Black",
    fontSize: 38,
    letterSpacing: 2,
    color: COLORS.black,
  },
  points: {
    fontFamily: "Nunito-Bold",
    fontSize: 22,
    letterSpacing: 2,
    color: COLORS.black,
  },
  iconNavigationBar: {
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "ios" ? 0 : 5,
  },
  root: { padding: 20, minHeight: 300 },
  codeFieldRoot: {
    marginBottom: 25,
  },
  focusCell: {
    borderColor: COLORS.lightGray,
  },
  backgroundNoPhotoGroup: {
    backgroundColor: COLORS.almostWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 15,
    marginRight: 10,
  },
  workoutBackgroundImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  infoWorkoutCard: {
    marginLeft: 10,
    display: "flex",
    // flexWrap: "wrap",
    flexShrink: 1,
  },
  workoutNumber: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 10,
    color: COLORS.white,
    borderRadius: 3,
    letterSpacing: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  workoutTitle: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 13,
    color: COLORS.black,
    marginTop: 5,
    flexWrap: "wrap",
    flexShrink: 1,
    alignSelf: "flex-start",
  },
  workoutObj: {
    marginTop: 5,
    fontSize: 11,
    fontFamily: "Nunito",
  },
  workoutDesc: {
    fontFamily: "Nunito-Bold",
    fontSize: 11,
  },
  workoutCard: {
    borderRadius: 7,
    borderWidth: 1,
    width: Dimensions.get("window").width - 60,
    paddingHorizontal: 15,
    paddingVertical: 17,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  workouts: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 20,
    marginTop: 80,
    marginLeft: 30,
    marginBottom: 10,
    color: COLORS.black,
  },
  workoutsList: {
    display: "flex",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  workoutListHeight: {
    height: Dimensions.get("window").height - 175,
  },
  marginBottom25: {
    marginBottom: 25,
  },
  configIcon: {
    top: 55,
    right: 30,
    position: "absolute",
    zIndex: 100,
  },
  notification: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    marginTop: 25,
    paddingHorizontal: 30,
  },
  notificationOption: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  notificationDesc: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 16,
  },
  marginTop100: {
    marginTop: 100,
  },
  dividerNotification: {
    width: "100%",
    height: 1,
    marginTop: 2,
    backgroundColor: COLORS.lighterGray,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  logout: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 25,
  },
  logoutText: {
    width: "100%",
    color: COLORS.pink,
    fontSize: 16,
    textAlign: "left",
    alignSelf: "flex-start",
    fontFamily: "Nunito-SemiBold",
  },
  titleTerms: {
    fontFamily: "Nunito-Black",
    color: COLORS.pink,
    fontSize: 14,
    textAlign: "left",
    width: "100%",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  textTerms: {
    fontFamily: "Nunito",
    fontSize: 12,
    color: COLORS.black,
  },
});
