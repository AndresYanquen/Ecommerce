import React from "react";
import { cardProduct } from "./styles";

const CardProduct = ({ title, content, step, time, icon }) => {
  const cardProductStyles = cardProduct();
  return (
    <div className={cardProductStyles.cardContainer}>
      <div
        className={`${cardProductStyles.cardItem} ${cardProductStyles.title}`}
      >
        <img src={icon && icon} alt="Icono" />
        <h3>{title && title}</h3>
      </div>
      <div
        className={`${cardProductStyles.cardItem} ${cardProductStyles.content}`}
      >
        <p>{content && content}</p>
      </div>
      <div
        className={`${cardProductStyles.cardItem} ${cardProductStyles.footer}`}
      >
        <span>{step && step}</span>
        <h4>{time && time}</h4>
      </div>
    </div>
  );
};

export default CardProduct;
