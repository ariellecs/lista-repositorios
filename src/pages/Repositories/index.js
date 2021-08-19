import React, {useEffect, useState} from 'react';
import * as S from './styled';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


export default function Repositories(){
    const [repositories, setRepositories] = useState([]);
    const [userName, setUserName] = useState();
    const history = useHistory();
    useEffect(()=>{
        let userName = localStorage.getItem('usuario');
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            setUserName(userName);
            localStorage.clear();
        }
        else{
            history.push('/');
        }
        
    }, []);

    return(
        
            <S.Container>
                <S.Title>REPOSITÓRIOS DO(A) <i>{userName}</i></S.Title>
                <S.List>
                    {repositories.map(repository => {
                        return(
                            <S.ListItem>Repositório: {repository}</S.ListItem>
                        )
                    })}
                </S.List>
                <S.LinkHome to="/">Voltar</S.LinkHome>
            </S.Container>
    )
}