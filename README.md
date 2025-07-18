# 🌍 Diálogo Sustentável: Um Jogo Interativo sobre os ODS

Um aplicativo mobile desenvolvido em React Native que transforma o aprendizado sobre os Objetivos de Desenvolvimento Sustentável (ODS) da ONU em uma experiência de conversação interativa. Encontre um colega de faculdade em um bate-papo descontraído e desvende as nuances de diferentes ODS a cada jogada.

---

## 🎯 Objetivo do Jogo

O **Diálogo Sustentável** visa educar e conscientizar os jogadores sobre os 17 Objetivos de Desenvolvimento Sustentável (ODS) da ONU de uma forma leve e envolvente. Através de uma conversa simulada com um amigo, o jogador explora os conceitos e desafios de blocos de ODS sorteados aleatoriamente, promovendo o conhecimento e a reflexão sobre o desenvolvimento sustentável.

---

## ✨ Funcionalidades

* **Conversa Interativa:** Participe de um diálogo dinâmico com um colega de faculdade.

* **Aprendizado Contextualizado:** Compreenda as ODS através de exemplos práticos e discussões.

* **Sorteio de Blocos de ODS:** A cada nova conversa, um conjunto diferente de 4 ou 5 ODS é sorteado, garantindo uma experiência variada.

* **Validação de Nome:** Garante que o jogador informe seu nome antes de iniciar a jornada.

* **Plano de Fundo Personalizável:** Interface com um plano de fundo visualmente agradável na tela de conversa.

---

## 🚀 Instalação e Execução

Para rodar o projeto localmente em seu ambiente de desenvolvimento, siga as instruções abaixo. Certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados.

### Pré-requisitos

* **Node.js** (versão LTS recomendada)

* **npm** (gerenciador de pacotes do Node.js) ou **Yarn**

* **Expo CLI** (Interface de Linha de Comando do Expo):

    ```bash
    npm install -g expo-cli
    ```

* **EAS CLI** (Expo Application Services CLI - para builds):

    ```bash
    npm install -g eas-cli
    ```

* **Expo Go app** no seu celular (para testar em dispositivo físico).

* Um emulador Android ou iOS configurado (opcional, para testar no computador).

### Passos para Instalação

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/IzaiasValentim/izaias-ODS.git](https://github.com/IzaiasValentim/izaias-ODS.git)
    cd izaias-ODS
    ```

2.  **Instale as dependências:**

    ```bash
    npm install # ou yarn install
    ```

3.  **Instale as dependências específicas para web (necessário para build web e manifest):**

    ```bash
    npx expo install react-native-web react-dom @expo/webpack-config
    ```

### Executando em Ambiente de Desenvolvimento

* **Para iniciar o servidor de desenvolvimento (e abrir no Expo Go ou emulador):**

    ```bash
    npm start # ou expo start
    ```

    Isso abrirá uma nova janela no seu navegador com o Expo Dev Tools. Você pode:

    * Escanear o QR Code com o aplicativo **Expo Go** no seu celular.

    * Pressionar `a` no terminal para abrir no emulador Android.

    * Pressionar `i` no terminal para abrir no simulador iOS (macOS apenas).

* **Para rodar a versão web no navegador (apenas para teste rápido):**

    ```bash
    npm run web # ou expo start --web
    ```

---

## 📦 Geração do Arquivo APK (Standalone para Android)

Para gerar um arquivo `.apk` que pode ser instalado diretamente em um dispositivo Android sem a necessidade de um servidor de desenvolvimento, você usará o **EAS Build**.

1.  **Faça login na sua conta Expo (se ainda não o fez):**

    ```bash
    eas login
    ```

2.  **Configure o EAS Build para o seu projeto (se ainda não tiver o `eas.json`):**

    ```bash
    eas build:configure
    ```

    Aceite as configurações padrão.

3.  **Edite o arquivo `eas.json`:**
    Abra o `eas.json` na raiz do seu projeto. Dentro do perfil `development`, garanta que a propriedade `developmentClient` esteja como `false` e que `buildType` esteja como `apk`. Seu `eas.json` deve ficar parecido com isto:

    ```json
    {
      "build": {
        "development": {
          "developmentClient": false, // <-- MUITO IMPORTANTE: para build standalone
          "distribution": "internal",
          "android": {
            "buildType": "apk" // <-- Para gerar um .apk
          }
        },
        "preview": {
          "distribution": "internal"
        },
        "production": {
          "android": {
            "buildType": "app-bundle" // Padrão para Google Play Store
          }
        }
      }
    }
    ```

4.  **Inicie o processo de build do APK:**
    No terminal, execute o comando:

    ```bash
    eas build -p android --profile development
    ```

    Este comando irá carregar seu código para os servidores de build do Expo. Você receberá um link no terminal para acompanhar o progresso em tempo real.

5.  **Baixe o arquivo `.apk`:**
    Quando o build estiver `SUCCESS` (concluído com sucesso) na página do Expo Build, você poderá baixar o arquivo `.apk` diretamente.

    Alternativamente, após o build finalizar, você pode listar seus builds e baixar o arquivo:

    ```bash
    eas build:list
    eas build:download --id <ID_DO_SEU_BUILD_AQUI>
    ```

6.  **Instale no seu dispositivo Android:**

    * Transfira o arquivo `.apk` baixado para o seu celular.

    * No seu celular, permita a instalação de aplicativos de fontes desconhecidas nas configurações de segurança (se necessário).

    * Vá até o local onde salvou o `.apk` e toque para instalar.

---

## 🛠️ Tecnologias Utilizadas

* **React Native**

* **Expo**

* **React Navigation**

* **AWS Amplify (para hosting web)**

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se tiver ideias para melhorar o jogo, adicionar mais conteúdo sobre ODS ou otimizar o código, sinta-se à vontade para abrir uma issue ou enviar um Pull Request.

---
