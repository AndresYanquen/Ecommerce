import { makeStyles } from "@material-ui/core/styles";

export const cardProduct = makeStyles((theme) => ({
  cardContainer: {
    width: "380px",
    height: "140px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    background: "white",
    borderRadius: "10px",
    padding: "10px 20px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    margin: "10px",
  },
  cardItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    "& img": {
      width: "35px",
      height: "35px",
    },
    "& h3": {
      fontFamily: "Roboto",
      fontWeight: "700",
      margin: "0",
      padding: "0",
    },
  },
  content: {
    "& p": {
      width: "80%",
      fontFamily: "Roboto",
      fontSize: "12px",
      color: "grey",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
  },
  footer: {
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 0px",
    "& span": {
      color: "#4CC58B",
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "500",
      margin: "0",
      padding: "0",
    },
    "& h4": {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "500",
      margin: "0",
      padding: "0",
    },
  },
}));
