# githubRepApp

Este projeto, chamado "githubRepApp", é uma aplicação desenvolvida como um estudo pessoal, visando aprofundar conhecimentos e habilidades em React Native, TypeScript e testes unitários. Ele é um aplicativo para buscar e visualizar repositórios do GitHub.

## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://reactnative.dev/): Uma estrutura de JavaScript para construir aplicativos móveis nativos.
- [TypeScript](https://www.typescriptlang.org/): Uma extensão de JavaScript que adiciona tipos estáticos fortes.
- [Redux Toolkit](https://redux-toolkit.js.org/): A abordagem oficial e recomendada para escrever código Redux.
- [React Navigation](https://reactnavigation.org/): Uma solução para a navegação em aplicativos React Native.
- [Jest](https://jestjs.io/): Um framework de teste de JavaScript com foco na simplicidade.
- [react-native-webview](https://github.com/react-native-webview/react-native-webview): Um componente do React Native para renderizar web content.

## Recursos

O aplicativo possui as seguintes funcionalidades:

1. **Busca de Repositórios**: Os usuários podem pesquisar por repositórios GitHub utilizando a barra de pesquisa. A pesquisa é ativada quando o usuário pressiona o botão de enviar no teclado digital ou quando o campo de busca perde o foco.

2. **Visualização de Repositórios**: Os repositórios encontrados são exibidos em uma lista. Cada item da lista inclui o avatar do criador do repositório, o nome do repositório, o nome de usuário do criador e o número de estrelas que o repositório recebeu.

3. **Detalhes do Repositório**: Ao clicar em um repositório, o aplicativo navega para uma segunda tela que exibe a página do repositório GitHub em um WebView.

## Testes

Os testes de unidade foram escritos utilizando o Jest. Os componentes e as funcionalidades principais da aplicação foram cobertos por estes testes, garantindo assim o correto funcionamento da aplicação.
