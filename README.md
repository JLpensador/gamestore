# 🎮 GameStore

Uma aplicação web moderna e interativa de loja de jogos desenvolvida em **React** e integrada com **Vite**. O projeto simula a experiência completa de e-commerce de games, incluindo catálogo de produtos, páginas de detalhes, gerenciamento de carrinho e um quiz interativo para os usuários.

---

## 🚀 Funcionalidades

*   **Catálogo de Jogos:** Listagem dinâmica de jogos com base em dados estruturados.
*   **Página de Detalhes:** Informações detalhadas sobre cada jogo selecionado.
*   **Carrinho Dinâmico (Context API):** Adicionar, remover e atualizar itens do carrinho com persistência de estado global através de uma barra lateral (`CartSidebar`).
*   **Sistema de Avaliação:** Exibição de notas dos jogos por meio de estrelas interativas (`StarRating`).
*   **Quiz Interativo:** Uma seção divertida baseada em perguntas e respostas sobre o universo dos games.
*   **Rotas Dinâmicas:** Navegação fluida entre páginas sem recarregamento (Single Page Application).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ferramentas:

*   **[React](https://react.dev/):** Biblioteca principal para construção da interface de usuário.
*   **[Vite](https://vitejs.dev/):** Ferramenta de build rápida para o ecossistema frontend.
*   **JavaScript (ES6+):** Linguagem de programação base.
*   **React Context API:** Gerenciamento de estado global para o carrinho de compras.
*   **CSS3 / Custom Styles:** Estilização modular e global da aplicação.
*   **ESLint:** Padronização e qualidade de código.

---

## 📁 Estrutura de Pastas

A arquitetura do projeto está organizada da seguinte forma:

```text
gamestore/
├── public/                 # Arquivos estáticos (ícones e favicons)
└── src/
    ├── assets/             # Imagens e mídias do projeto (ex: hero banner)
    ├── components/         # Componentes reutilizáveis (Navbar, Cards, Sidebar)
    ├── context/            # Contexto global da aplicação (Carrinho de compras)
    ├── data/               # Banco de dados mockado (Lista de jogos e perguntas do quiz)
    ├── pages/              # Telas principais da aplicação (Home, Detalhes, Produtos, Quiz)
    ├── styles/             # Arquivos de estilização global
    ├── routes.js           # Configuração de rotas da aplicação
    ├── App.jsx             # Componente raiz
    └── main.jsx            # Ponto de entrada do React
```
## 🔧 Como Executar o Projeto

Certifique-se de ter o Node.js instalado em seu sistema de desenvolvimento.

### 1. Clonar o repositório

```sh
git clone [https://github.com/joaoluiz/gamestore.git](https://github.com/joaoluiz/gamestore.git)
cd gamestore
```

### 2. Instalar as dependências

```sh
npm install
```

### 3. Rodar em ambiente de desenvolvimento

```sh
npm run dev
```
Após executar o comando, abra o navegador e acesse o endereço local exibido no terminal (geralmente http://localhost:5173).

### 4. Build para a produção
Para gerar os arquivos otimizados para produção dentro da pasta dist:
```sh
npm run build
```
