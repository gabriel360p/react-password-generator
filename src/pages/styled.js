import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #efece2;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #002c2b;
`;

export const Title = styled.h2`
  /* Cresça, mas nunca fique menor que 1.5rem ou maior que 2.5rem, o ideal é 2vw */
  font-size: clamp(1.5rem, 2vw, 2.5rem);
  font-family: Georgia, "Times New Roman", Times, serif;
`;
export const CardContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  height: clamp(300px, 50%, 500px);
  /* 
  @media screen and (max-width:) {
    
  } */
`;
export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  input {
    padding: 20px;
    width: 30vw;
  }

  @media screen and (max-width: 600px) {
   input{
    width: 70vw;
    max-width:80vw;
   }
  }
`;

export const Button = styled.span`
  border: 1px solid #002c2b;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #002c2b;
  }
  &:active {
    color: white;
    background-color: #002c2b;
    opacity: 0.5;
  }
`;
export const DivOptions = styled.div`
  display: flex;
  /* width: clamp(200px, 30vw, 500px); */
  width: 60%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: lighter;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  height: 60%;

  @media screen and (max-width: 600px) {
    width: 85vw;
    max-width: 90vw;
    font-size: 12px;
  }
`;
export const SpanRange = styled.span``;

export const DivLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
