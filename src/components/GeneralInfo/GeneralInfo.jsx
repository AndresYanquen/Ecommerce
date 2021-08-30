import React from "react";
import { generalInfoStyles } from "./styles.jsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

export const GeneralInfo = ({
  visits,
  publishedProducts,
  sales,
  totalValue,
}) => {
  const classes = generalInfoStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <div className={classes.contentCard}>
          <div className={classes.containerCard}>
            <h3 className={classes.cardItem}>{visits}</h3>
            <h3 className={classes.cardItemText}>
              Visitas <br /> Totales
            </h3>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className={classes.containerCard}>
            <h3 className={classes.cardItem}>{publishedProducts}</h3>
            <h3 className={classes.cardItemText}>
              Productos <br /> Publicados
            </h3>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className={classes.containerCard}>
            <h3 className={classes.cardItem}>{sales}</h3>
            <h3 className={classes.cardItemText}>
              Ventas <br /> Generadas
            </h3>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className={classes.containerCard}>
            <h3 className={classes.cardItem}>${totalValue}</h3>
            <h3 className={classes.cardItemText}>
              Valor <br />
              Total
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
