import React from "react";

const CompletedText = (percentage) => {
  let texts = {
    textH3: "Has completado tus tareas",
    textP1: "Felicitaciones has llegado al 100%",
    textP2: "",
  };
  let texts2 = {
    textH3: "Tienes tareas pendientes",
    textP1: "Te damos algunos tips para que tu tienda sea perfecta.",
    textP2: "Completa el 100% de toda la configuración, es muy fácil",
  };
  const calcular = (percentage) => {
    console.log(percentage);
    if (parseInt(toString(percentage)) === 100) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      {calcular(percentage) ? (
        <>
          <h3>{texts2.textH3} </h3>
          <p>{texts2.textP1}</p>
          <p>{texts2.textP2}</p>
        </>
      ) : (
        <>
          <h3>{texts.textH3} </h3>
          <p>{texts.textP1}</p>
          <p>{texts.textP2}</p>
        </>
      )}
    </div>
  );
};

export default CompletedText;
