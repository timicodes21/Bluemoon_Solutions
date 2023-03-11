import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5FF",
    marginTop: 50,
    paddingHorizontal: 15,
    position: "relative",
  },
  homeHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "poppinsMedium",
    color: "#2E3A59",
  },
  noText: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "poppins",
    color: "#2E3A59",
    textAlign: "center",
  },
  cardWrapper: {
    borderRadius: 20,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: "#FFF",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  boldText: {
    color: "#242736",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "poppinsMedium",
  },
  lightText: {
    color: "#AEAEB3",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "poppins",
  },
  priceText: {
    color: "#AEAEB3",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "poppins",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },

  modalView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "rgba(255, 255, 255, 0.99)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
});
