import React from'react'
//import{ Link } from 'gatsby'

import Layout from '../components/layout'
import '../style/index.scss'

const Problema = () => {
    return (
        <Layout>
            <h1>Problemas</h1>
            <h2>As dificuldades que encontramos ao desenvolver esse projeto</h2>

        <h3>Achar um programa</h3>
        <p>Nós tentamos fazer o site por 3 ferramentas diferentes, tais como o Gatsby, Next.js e o Hugo, por sere os que despertaram mais nossa atenção e por ser recomendações por parte dos professores.
            Tentamos fazer pelo Gatsby, mas os códigos não carregava e isso dificultava o
        desenvolvimento do projeto.
            Tentamos em seguida usar o Next.js, mas não conseguimos passar da intalação.
            Tentamos usar o Hugo, mas dois membros não conseguia intalar ele.
            Por fim, tentamos usar o Gatsby de novo, por várias recomendações, e fnalmente conseguimos iniciar o projeto.
        </p>

        <h3>Rodar um site</h3>
        <p>Esse problema ocorreu 2 vezes, a primeira foi quando tentamos utilizar o Gatsby pela primeira vez, nós conseguimos fazer a instalação e tudo, mas não estavamos conseguir abrir o site. 
            
        A segunda vez foi com o Hugo, o integrante que conseguiu fazer a instalação não conseguia ver o site, ele só aparecia uma tela branca, mesmo criando um conteúd para ela.</p>
    
        <h3>Conseguir instalar os programas</h3>
        <p>Foi difícil achar um programa onde todos conseguisse instalar sem nenhum problema, ora alguêm não conseguia instalar, ora o programa dava problemas. Gatsby foi o único que todos conseguiram instalar, mas para a simplicidade resolvemos usar o Live Share (o que aprenddemos mais para frente).</p>
        </Layout>
    
    )
}

export default Problema