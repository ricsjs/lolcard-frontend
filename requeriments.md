# Requisitos básicos:
### 1 - **Autenticação de Usuário:**
#### Os usuários devem ter a opção de fazer login com suas contas do Google e do Facebook.

### 2 - **Leitura de Dados da API do LoL:**
#### O aplicativo deve acessar a API do League of Legends para obter os dados do jogador, como estatísticas, partidas recentes e informações do perfil.

### 3 - **Construção de Gráficos:**
#### O aplicativo deve criar gráficos com base nos dados do jogador, mostrando estatísticas relevantes, como dano por minuto (DPM), ouro por minuto (GPM), etc.

### 4 - **Geração de Página de Cartão com URL:**
#### Os usuários devem poder gerar um "cartão virtual" com uma URL única que contém informações sobre o jogador e seus gráficos.

### 5 - **Contato de Usuários:**
#### Os usuários devem ter a opção de fornecer informações de contato, como e-mail ou número de telefone (WhatsApp).

### 6 - **Compartilhamento em Redes Sociais:**
#### Os usuários devem poder compartilhar seu cartão virtual em diferentes redes sociais, como Twitter, Facebook, Instagram, etc.

### 7 - **Sistema de Busca Interna:**
#### O aplicativo deve ter uma função de busca interna que permite aos usuários encontrar outros jogadores para formar duos.

# Fluxo de funcionamento:
#### 1 - O usuário faz login com sua conta do Google ou Facebook no front-end.
#### 2 - O sistema solicita dados do jogador à API do League of Legends no back-end.
#### 3 - O back-end obtém os dados do jogador, gera gráficos e cria um cartão virtual com uma URL única.
#### 4 - O usuário pode fornecer informações de contato, se desejar.
#### 5 - O usuário compartilha o cartão virtual nas redes sociais ou fornece a URL a outros jogadores.
#### 6 - O sistema de busca interna permite que os jogadores encontrem outros jogadores para formar duos.