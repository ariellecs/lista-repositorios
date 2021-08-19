import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

function App(props) {
  const [usuario, setUsuario] = useState('');
  const history = useHistory();
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        localStorage.setItem('usuario', usuario);
        setErro(false);
        history.push('/repositories');
      })
      .catch(err => {
        setErro(true);
      });
  }

    return (
      <S.HomeContainer>
        <S.Content>
          <S.H1Style>Lista dos Repositórios</S.H1Style>
          <S.Paragraph>Digite um nome de usuário <b>GitHub</b> para obter a lista dos nomes dos repositórios do perfil</S.Paragraph>
          <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}>
          </S.Input>
          <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Content>
        {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
      </S.HomeContainer>
  );
}

export default App;