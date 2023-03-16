import * as S from "./styles";

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logoReact.png"
      alt="imagem de um átomo e react avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS, Styled Components
    </S.Description>
    <S.Illustration
      src="/img/illustration.png"
      alt="pessoas trabalhando home office."
    />
  </S.Wrapper>
);

export default Main;
