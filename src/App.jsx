import React from "react";
import CardProduct from "./components/CardProduct/CardProduct";
import { Navbar } from "./components/Navbar/Navbar";
import { MainCard } from "./components/MainCard/MainCard";
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import {
  CardsProductContainer,
  CenterContent,
  Container,
  Content,
  Bar,
  TasktText,
} from "./styles/AppStyles";
import Data from "./api/dummy.json";
import CompletedText from "./components/CompletedText";
function App() {
  let percentage = Data.dataUser.taksPercentage;
  const { name, visits, publishedProducts, sales, shopUrl, totalValue } =
    Data.dataUser;
  let variables = {
    name,
    visits,
    publishedProducts,
    sales,
    shopUrl,
    totalValue,
  };
  return (
    <Container>
      <Navbar />
      <Content>
        <CenterContent>
          <GeneralInfo {...variables} />
          <MainCard
            name={Data.dataUser.name}
            percentage={Data.dataUser.taksPercentage}
            shopUrl={Data.dataUser.shopUrl}
          />
          <TasktText>
            <CompletedText percentage={Data.dataUser.taksPercentage} />
            <Bar>
              <div style={{ width: `${percentage}%` }}>
                <span>{percentage}%</span>
              </div>
            </Bar>
          </TasktText>
          <img src="/icons/image.svg" alt="Design" />
        </CenterContent>
        <CardsProductContainer>
          {Data.products.map((p) => (
            <CardProduct key={p.id} {...p} />
          ))}
        </CardsProductContainer>
      </Content>
    </Container>
  );
}

export default App;
