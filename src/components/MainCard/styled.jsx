import styled from "@emotion/styled";

export const Root = styled.div`
  min-width: 275;
  width: 100%;
  height: 300px;
  background: linear-gradient(to right, #4cc58b 100%, #0f9e59 51%);
  color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 400px) {
    width: 93%;
    margin-left: 10px;
    margin-right: 10px;
    background: linear-gradient(to right, #4cc58b 100%, #0f9e59 51%);
    height: 300px;
    border-radius: 5px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Saludo = styled.div`
  font-size: 40px;
  margin-top: 60px;
  font-weight: bold;
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 308px;
  height: 11px;
  background-color: #ffeda8;
  border-radius: 10px;
  margin-top: 10px;
  @media (max-width: 400px) {
    position: relative;
    width: 250px;
    height: 11px;
    background-color: #ffeda8;
    border-radius: 10px;
    margin-top: 15px;
  }

  div {
    border-radius: 10px;
    background-color: #ffac30;
    height: 100%;
    width: 60%;
  }
`;

export const OnlineShop = styled.div`
  margin-top: 10px;
  @media (max-width: 400px) {
    display: none;
  }
`;

export const OnlineShopRigth = styled.div`
  margin-bottom: 80px;
  margin-right: 44px;
  @media (max-width: 400px) {
    margin-top: 20px;
  }
`;
