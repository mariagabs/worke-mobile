import { COLORS } from "../assets/colors.js";
import { Dimensions, StyleSheet, PixelRatio, Platforms } from "react-native";

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
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
        fontFamily: "Nunito-SemiBold",
        justifyContent: "center",
    },
    eyeIcon: {
        alignSelf: "flex-end",
        position: "absolute",
        paddingRight: 18,
        paddingTop: 0,
    },
    buttonText: {
        color: COLORS.white,
        textAlign: "center",
        fontSize: 12,
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
    title: (width, letterSpacing) => ({
        fontSize: 30,
        fontFamily: "Nunito-Medium",
        letterSpacing: letterSpacing,
        width: width,
        textAlign: "center",
        color: COLORS.black,
        marginBottom: 20,
    }),
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
    textLabelButton: (color) => ({
        color: color,
        fontSize: 22,
        letterSpacing: 2.5,
        fontFamily: "Nunito-Black",
    }),
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
    step: (color, qtd) => ({
        backgroundColor: color,
        width: (Dimensions.get("window").width - (60 + (qtd - 1) * 5)) / qtd,
        height: 5,
        borderRadius: 7,
    }),
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
    gender: (gender) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginRight: gender === "MASCULINO" ? 25 : 0,
        marginLeft: gender === "FEMININO" ? 25 : 0,
        marginTop: 50,
    }),
    genderText: {
        fontFamily: "Nunito-ExtraBold",
        fontSize: 14,
        letterSpacing: 2.5,
        marginTop: 15,
        textAlign: "center",
        color: COLORS.black,
    },
    defaultText: (
        fontSize,
        align,
        fontFamily,
        width,
        letterSpacing,
        marginTop,
    ) => ({
        fontSize: fontSize,
        textAlign: align,
        fontFamily: fontFamily,
        width: width,
        letterSpacing: letterSpacing,
        marginTop: marginTop,
        color: COLORS.black,
    }),
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
    blankTextBox: (color) => ({
        fontSize: 36,
        color: color,
        fontFamily: "Nunito",
        textAlign: "center",
        marginTop: 40,
    }),
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
    errorTextBlank: (bottom) => ({
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
        bottom: bottom,
    }),
    selectionLabel: (color, selected) => ({
        borderColor: color,
        borderWidth: 1,
        width: "100%",
        padding: 20,
        borderRadius: 7,
        marginTop: 20,
        backgroundColor: selected ? color : COLORS.white,
    }),
    textSelectionLabel: (color, selected) => ({
        color: selected ? COLORS.white : color,
        fontSize: 14,
        textTransform: "uppercase",
        fontFamily: "Nunito-ExtraBold",
        letterSpacing: 2,
        whiteSpace: "nowrap",
    }),
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
    nameColor: (textColor) => ({
        color: textColor,
    }),
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
        backgroundColor: COLORS.lighterGray,
        width: "100%",
        height: 10,
        borderRadius: 7,
    },
    barLevelProgress: (progress, color) => ({
        width: progress,
        backgroundColor: color,
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
    infoColor: (textColor) => ({
        color: textColor,
        fontSize: 16,
        fontFamily: "Nunito-ExtraBold",
    }),
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
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
    },
    dividerThin: {
        width: Dimensions.get("window").width,
        height: 0.3,
        marginTop: 20,
        backgroundColor: COLORS.lighterGray,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: -30,
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
        zIndex: 1
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
        elevation: 24
    },
    navigationSelected: (color) => ({
        display: "flex",
        flexDirection: "row",
        backgroundColor: color,
        width: 4,
        height: 4,
        borderRadius: 100,
        alignSelf: "center",
        position: "absolute",
        bottom: -10,
    }),
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
    },
    headerMyExercises: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
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
        marginTop: 20,
        borderColor: COLORS.green,
        borderWidth: 1,
        width: "100%",
        height: 150,
        borderRadius: 7,
        padding: 15,
    },
    descriptionExerciseTitle: (textColor) => ({
        fontFamily: "Nunito-ExtraBold",
        fontSize: 16,
        color: textColor,
        letterSpacing: 1.5,
        textAlign: "left",
    }),
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
    exerciseCard: (cardColor, list) => ({
        borderColor: cardColor,
        borderWidth: 1,
        borderRadius: 7,
        width: (Dimensions.get("window").width - 80) / 2,
        height: list ? 80 : 110,
        padding: 15,
        marginBottom: 20,
    }),
    exerciseCardTitle: (textColor) => ({
        color: textColor,
        fontSize: 14,
        fontFamily: "Nunito-ExtraBold",
        textTransform: "uppercase",
    }),
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
    rankTextBackground: (backColor) => ({
        backgroundColor: backColor,
        width: 30,
        height: 30,
        borderRadius: 100,
        paddingTop: 6,
    }),
    rankText: (textColor) => ({
        color: textColor,
        fontFamily: "Nunito-ExtraBold",
        fontSize: 16,
        textAlign: "center",
    }),
    rankTopInfo: (horizontal) => ({
        marginTop: horizontal ? 0 : 20,
        marginLeft: horizontal ? 20 : 0,
    }),
    rankingPhotos: (horizontal) => ({
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: horizontal ? 25 : 0,
    }),
    nameRankTop: {
        fontFamily: "Nunito-ExtraBold",
        color: COLORS.black,
        letterSpacing: 1,
        fontSize: 16,
        textAlign: "center",
    },
    pointsRankTop: (textColor) => ({
        fontFamily: "Nunito-ExtraBold",
        color: textColor,
        fontSize: 14,
        textTransform: "uppercase",
        textAlign: "center",
        letterSpacing: 1,
        display: "flex",
        flexWrap: "nowrap",
    }),
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
    },
    rankingCard: (color) => ({
        borderColor: color,
        borderWidth: 1,
        borderRadius: 7,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginTop: 15,
    }),
    imageRankList: {
        width: 50,
        height: 50,
        borderRadius: 7,
        marginLeft: 20,
        marginRight: 20,
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
    pointsRankList: (textColor) => ({
        color: textColor,
        fontFamily: "Nunito-ExtraBold",
        fontSize: 12,
        letterSpacing: 1,
        textTransform: "uppercase",
        position: "absolute",
        right: 15,
    }),
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
        fontWeight: "900",
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
    achievementNumber: (textColor) => ({
        fontFamily: "Nunito-ExtraBold",
        color: textColor,
        fontSize: 38,
        letterSpacing: 2,
    }),
    achievementDescription: (textColor) => ({
        fontFamily: "Nunito-SemiBold",
        color: textColor,
        fontSize: 14,
        letterSpacing: 1,
        textTransform: "uppercase",
    }),
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
    bodyCard: (colorBorder) => ({
        borderColor: colorBorder,
        borderWidth: 1,
        padding: 15,
        width: (Dimensions.get("window").width - 80) / 2,
        borderRadius: 7,
    }),
    bodyCardTitle: (textColor) => ({
        color: textColor,
        fontFamily: "Nunito-ExtraBold",
        fontSize: 16,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 3,
    }),
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
        marginTop: 50
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
    groupPassword: {
        borderColor: COLORS.green,
        borderWidth: 1,
        borderRadius: 7,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingTop: 25,
    },
    loginPassword: {
        width: "100%",
        marginTop: 20,
    },
    passwordGroup: {
        marginTop: 30,
    },
    hasPassword: {
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
        width: "100%"
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
    listButton: (editButton) => ({
        width: "100%",
        backgroundColor: editButton ? COLORS.green : COLORS.darkWhite,
        paddingVertical: 20,
        borderRadius: 7,
        alignSelf: "center",
    }),
    listButtonText: (editButton) => ({
        fontFamily: "Nunito-Bold",
        fontSize: 14,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: editButton ? COLORS.white : COLORS.gray,
        textAlign: "center",
    }),
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
        backgroundColor: COLORS.white,
        marginLeft: 30,
        marginRight: 30,
        padding: 25,
        borderRadius: 30,
        paddingVertical: 0,
        paddingTop: 25,
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
    headerModal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    modalTitle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textTransform: "uppercase",
    },
    modalTitleText: {
        fontFamily: "Nunito-Black",
        fontSize: 32,
        letterSpacing: 2,
        textTransform: "uppercase",
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
    },
    buttonModal: {
        position: "absolute",
        width: "100%",
        bottom: 0,
        paddingVertical: 25,
        paddingTop: 0,
        paddingHorizontal: 10,
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
        flexDirection: 'row',
        alignItems: "center",
        minHeight: 110,
        position: 'relative'
    },
    imageNoInfo: {
        alignSelf: 'flex-end'
    },
    descNoInfo: {
        textAlign: "right",
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        width: (Dimensions.get('window').width - 70) / 2
    },
    titleNoInfo: {
        fontSize: 14,
        fontFamily: "Nunito-Black",
        color: COLORS.pink
    },
    textNoInfo: {
        fontSize: 12,
        fontFamily: 'Nunito-Medium',
        color: COLORS.black,
        letterSpacing: 0.5
    },
    spanFavorites: {
        color: COLORS.pink,
        fontFamily: "Nunito-Black"
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
        fontFamily: 'Nunito-Black',
        letterSpacing: 4
    },
    timerStart: {
        fontSize: 80,
        color: COLORS.white,
        fontFamily: 'Nunito-Black',
        letterSpacing: 4
    },
    buttonExercise: {
        backgroundColor: COLORS.white,
        paddingVertical: 20,
        width: Dimensions.get('window').width - 60,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 60
    },
    buttonExerciseText: {
        fontSize: 22,
        color: COLORS.blue,
        fontFamily: 'Nunito-Black',
        letterSpacing: 2,
    },
    labelExercise: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        bottom: 60,
        zIndex: 100
    },
    timerExercise: {
        width: 90,
        height: 90,
        backgroundColor: COLORS.black,
        position: 'absolute',
        top: 65,
        right: 30,
        zIndex: 100,
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textTimerExercise: {
        color: COLORS.white,
        fontSize: 50,
        fontFamily: 'Nunito-ExtraBold'
    }
});