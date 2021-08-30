import { makeStyles } from "@material-ui/core/styles";

export const navBar = makeStyles((theme) => ({
  appBar: {
    background: "#4CC58B",
  },
  menu: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "5px",
    fontFamily: "Roboto",
    fontWeight: 500,
  },
  searchBar: {
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    padding: "0px 10px",
  },
  text: {
    fontSize: "18px",
    margin: "0px 15px",
  },
  search: {
    backgroundColor: "#fff",
    width: "280px",
    borderRadius: "4px",
  },
  buttonAction: {
    background: "orange",
    color: "white",
    border: "none",
    outline: "none",
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: "14px",
    textTransform: "none",
  },
  buttonUser: {
    fontSize: "30px",
  },
}));
