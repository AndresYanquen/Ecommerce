import React from "react";
import {
  Root,
  CardContent,
  Saludo,
  ProgressBar,
  OnlineShop,
  OnlineShopRigth,
} from "./styled";

export const MainCard = ({ name, percentage, shopUrl }) => {
  console.log("props: " + name);
  return (
    <div>
      <Root>
        <CardContent>
          <div style={{ marginLeft: "40px", marginTop: "10px" }}>
            <Saludo> Hola, {name} </Saludo>
            <div style={{ marginTop: "8px" }}>{percentage}% de avance</div>
            <ProgressBar>
              <div style={{ width: `${percentage}%`, height: "100%" }}></div>
            </ProgressBar>
            <div> </div>
            <OnlineShop>Tu tienda online: {shopUrl} </OnlineShop>
          </div>

          <OnlineShopRigth>
            <div>
              Tu tienda online :<br></br>
              {shopUrl}
            </div>
          </OnlineShopRigth>
        </CardContent>
      </Root>
    </div>
  );
};
