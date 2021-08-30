import React from "react";
import { styleMainCard } from "./stylesMainCard";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const MainCard = ({name, percentage,shopUrl }) => {
  const classes = styleMainCard();
  console.log('props: '+name);
  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <div style={{ marginLeft: "40px", marginTop: "10px" }}>
            <div className={classes.saludo}>Hola, {name}  </div>
            <div style={{ marginTop: "8px" }}>{percentage}% de avance</div>
            <div className={classes.progressbar} >
              <div
                style={{ width:`${percentage}%`, height: "100%" }}
              ></div>
            </div>
            <div> </div>
            <div style={{ marginTop: "8px" }}>Tu tienda online: {shopUrl}</div>
          </div>

          <div style={{ marginBottom: "80px", marginRight: "44px" }}>
            <div>
              Tu tienda online :<br></br>
              {shopUrl}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
