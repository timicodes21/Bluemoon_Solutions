import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5FF",
    marginTop: 50,
    paddingHorizontal: 15,
  },
  shadowWrapper: {
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderRadius: 15,
    paddingVertical: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "poppinsMedium",
    color: "#2E3A59",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "poppinsLight",
    color: "#2E3A59",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
