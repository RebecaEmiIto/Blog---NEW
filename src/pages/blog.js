import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import '../style/index.scss'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h2>Blog</h2>
            <p>
            Esse projeto tem como objetivo montar um site com programas que podem ser encontrados em: [URL].
            Tentamos utilizar as ferramentas “Next.js”, o “Gatsby” e o "Hugo", e nós nos decidimos utilizar o "Gatsby", uma ferramenta que monta sites estáticos, o qual tivemos maior facilidade de utilizar.
            Nós decidimos usar a função "Live Share" de Visual Studio Code, onde um usuário pode compertilhar o código com outros integrantes, foi o modo que achamos mais fácil e rápido de fazer o projeto.
            Antes instalamos o Gatsby, pvm e o npm para conseguir mexer no site pelo terminal. Depois, instalamos o gatsby-cli. Para sim criarmos uma página com "gatsby new hello-world 'link do repositório'" e "gatsby develop" para começar a rodar o programa
            No Visual Studio Code instalamos gatsby-sass para conseguir editar certas coisas do Gatsby (que sem eles não seria possível) e digitando "npm run develop" no terminal de Visual Studio Code rodava o sitee para conferis se conseguimos alterar o site, a gente foi conferindo pelo "http://localhost:8000/"
            export default Blog
            </p>
            </Layout>
    )
}
export default Blog