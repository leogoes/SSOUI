import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import WrapperFlex from '../../components/molecules/WrapperFlex';
import { getLocalObj } from '../../services/auth';
import { Container, Content, Title, Background } from './styles';

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      window.location.assign(
        `https://master.dq4m5pwh5e0w6.amplifyapp.com/home?authuser=${btoa(
          JSON.stringify(getLocalObj('@sso'))
        )}`
      );
    }, 3000);
  }, []);

  return (
    <Container>
      <Content>
        <WrapperFlex column>
          <Title>Olá {user.nome}, seja bem vindo!</Title>
          <Title>Você já pode acessar o Frety!</Title>
        </WrapperFlex>
      </Content>
      <Background />
    </Container>
  );
};

export default Home;
