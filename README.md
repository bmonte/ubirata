# Teste Ubirata

## 📖 Sobre

Esse é um projeto de um sistema Web que exibe os dados populacionais de alguns bairros e para cada um mostra sua evolução habitacional ao longo dos anos.

## 🚀 Começando

Para iniciar o projeto, siga os passos abaixo:

- Clone o repositório em sua máquina local.
- Faça a execução do `yarn` para instalação das dependências.
- Rode o comando `yarn dev` para iniciar o servidor local
- Abra seu navegador e acesse http://localhost:8080

### ⚡ Outros comandos

- `yarn dev` - Inicializa o servidor de desenvolvimento
- `yarn build` - Compila o projeto para a pasta `dist`
- `yarn test` - Roda o suíte de testes
- `yarn coverage` - Roda a cobertura de testes
- `yarn lint` - Roda o linter do projeto

## 🌳 Estrutura

```
ubirata
├── public
├── src
│   ├── __tests__                   # Guarda as configurações/mocks dos testes
│   ├── api                         # Arquivos .json que simulam a API
│   ├── components                  # Componentes utilizados globalmente
│   ├── hooks                       # Grupo de Hooks personalizados
│   ├── layouts                     # Componentes especificos para composição do layout
│   ├── models                      # Conjunto de Tipos e Interfaces personalizadas
│   ├── pages                       # Páginas utilizadas no sistema
│   ├── routes                      # Configuração do roteamento da aplicação
│   ├── services                    # Funções responsáveis pela acesso a API
│   ├── styles                      # Arquivos de estilização global e tema
│   ├── types                       # Tipos personalizados para configuração do Typescript
│   ├── App.tsx
│   └── index.tsx
├── .eslintrc.json
├── .prettierrc
├── jest.config.js
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```

## 🛠️ Construído com

- React - Framework Javascript.
- Typescript - Um superset para javascript, que oferece um conjunto de ferramentas e formas mais eficientes de escrever código javascript, adicionando recursos que não estão presentes de maneira nativa na linguagem. O typeScript oferece recursos como, tipagem estática, forte e automática, orientação a objetos e a possibilidade de descobrir e corrigir erros em tempo real durante o desenvolvimento.
- Styled Components - uma biblioteca para React que ajuda a escrever CSS com escopo definido para um único componente e não se aplica em nenhum outro elemento da página.
- Jest - um framework de testes em JavaScript projetado para garantir a correção de qualquer código JavaScript.
- Testing Library - ferramenta que oferece uma família de pacotes para ajudar a testar os componentes da UI de uma maneira centrada no usuário.
- Eslint - um linter, ou seja, um fiscalizador de código que possui plugins para inúmeros editores de texto, para tasks runners e afins. Basicamente o ESLint, irá olhar o seu código e vai te acusar os erros baseados na regra que você definir, ou que vem em uma regra de código popular, como a da AirBnb.
- Prettier - um code formatter livre (MIT) e de código aberto, que tem por finalidade "forçar" um padrão de código. Ele realiza isso analisando o seu código e alterando-o de acordo com regras pré-definidas.
- Esbuild - um empacotador de JavaScript extremamente rápido, sendo utilizado apenas a sua ferramenta de transpilação no projeto.
- Webpack - um empacotador de módulos estáticos para aplicações JavaScript modernas.
