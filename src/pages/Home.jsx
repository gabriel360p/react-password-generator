import { useState } from "react";
import { useRef } from "react";
import {
  Container,
  Title,
  CardContainer,
  DivOptions,
  Button,
  DivLabel,
  SpanRange,
  DivPassword,
} from "./styled.js";

import CustumerInput from "../components/Input/CustumerInput.jsx"; //configurar meu component botão

function App() {
  //inciando minha variável do tipo state
  const [password, setPassword] = useState("");
  const [passwordLenght, setPasswordLenght] = useState(8); //consigo passar um valor base assim;

  const lettersUpString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lettersDownString = "abcdefghijklmnopqrstuvwxyz";
  const numbersString = "0123456789";
  const specialCharsString = "@?!_=+^~.,/*|<>;{}[]()`&#'";

  const generatePassword = useRef();

  const lettersUpOn = useRef();
  const lettersDownOn = useRef();
  const charOn = useRef();
  const numbersOn = useRef();

  const passwordLenghtInput = useRef();

  function updateLenght() {
    setPasswordLenght(passwordLenghtInput.current.value);
  }

  function createPassword() {
    let choices = "";
    let newPassword = "";

    if (lettersDownOn.current.checked) {
      choices += lettersDownString;
      // console.log(choices);
    }
    if (lettersUpOn.current.checked) {
      choices += lettersUpString;
      // console.log(choices);
    }
    if (charOn.current.checked) {
      choices += specialCharsString;
      // console.log(choices);
    }
    if (numbersOn.current.checked) {
      choices += numbersString;
      // console.log(choices);
    }

    if (choices == "") {
      return alert("Marque alguma opção!");
    }

    for (let index = 0; index < passwordLenght; index++) {
      newPassword += choices[Math.floor(Math.random() * choices.length)];
    }

    setPassword(newPassword);
  }

  function copyPassword() {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Senha Copiada!");
    } else {
      alert("Nehuma opção de senha foi informada!");
    }
  }

  return (
    <Container>
      <CardContainer>
        <Title>Gerador de Senhas</Title>
        <DivOptions>
          <DivLabel>
            {/* letras */}
            <CustumerInput
              id="lettersDown"
              defaultChecked
              type="checkbox"
              ref={lettersDownOn}
            />
            <label htmlFor="lettersDown">Letras Minúsculas</label>
          </DivLabel>

          <DivLabel>
            {/* letras */}
            <CustumerInput
              defaultChecked
              id="lettersUp"
              type="checkbox"
              ref={lettersUpOn}
            />
            <label htmlFor="lettersUp">Letras Maiúsculas</label>
          </DivLabel>

          <DivLabel>
            {/* numeros */}
            <CustumerInput id="numbers" type="checkbox" ref={numbersOn} />
            <label htmlFor="numbers">Números</label>
          </DivLabel>

          <DivLabel>
            {/* caracteres especiais */}
            <CustumerInput id="chars" type="checkbox" ref={charOn} />
            <label htmlFor="chars">Carecteres especiais</label>
          </DivLabel>

          <DivLabel>
            {/* Tamanho da senha */}
            <label htmlFor="lenght">Tamanho de senha</label>
            <CustumerInput
              id="lenght"
              type="range"
              onChange={updateLenght}
              max="64"
              value={passwordLenght}
              ref={passwordLenghtInput}
            />
            <SpanRange>{passwordLenght}</SpanRange>
          </DivLabel>
        </DivOptions>

        <Button onClick={createPassword}>Gerar Senha</Button>

        <DivPassword>
          <CustumerInput
            placeholder="Senha Gerada"
            id="generatePassword"
            ref={generatePassword}
            value={password}
            readOnly={true}
          />
          <Button onClick={copyPassword}>Copiar Senha</Button>
        </DivPassword>
      </CardContainer>
    </Container>
  );
}

export default App;
