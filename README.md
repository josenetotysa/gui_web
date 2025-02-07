# Projeto Angular - GUI Web

Este projeto é uma aplicação web desenvolvida para TYSA Telecomonicacoes em **Angular 17** que atua como uma interface intermediária entre os usuários e a API do **NPAC (Number Portability Administration Center)**, gerenciado pela **ABR Telecom**. 

A aplicação permite que múltiplas contas de usuário acessem e interajam com a API do NPAC, superando a limitação de uma única conta presente no sistema original.

---
## Funcionalidades

- **Autenticação de Usuários:** Sistema de login seguro com armazenamento de tokens no `localStorage`.
- **Gerenciamento de Bilhetes:** Criação, liberação e consulta de bilhetes de portabilidade.
- **Consulta de CNG Pré-existente:** Verificação de números de portabilidade existentes.
- **Listagem de Janelas de Broadcast:** Visualização das janelas de broadcast disponíveis.

---

## Tecnologias Utilizadas
- **Angular 17** - Framework principal
- **TypeScript** - Linguagem de programação
- **RxJS** - Programação reativa
- **Angular Material** - UI Components modernos
- **SCSS** - Estilização da aplicação
- **Ngx-Mask** - Máscaras de entrada de dados
- **Toastr** - Notificações para feedback ao usuário
- **Compodoc** - Geração de documentação

---

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- **Node.js**: `20.13.1`
- **NPM**: `10.5.2`
- **Angular CLI**: `17.3.11`

Para verificar se as versões estão corretas, utilize os comandos:

```sh
node -v       # Verifica a versão do Node.js
npm -v        # Verifica a versão do NPM
npx ng version  # Verifica a versão do Angular CLI no projeto
```

---
## Como Rodar o Projeto

### 1. Instale as dependências
```
npm install
```
### 2. Execute o projeto
```
ng serve
```
Acesse no navegador: `http://localhost:4200`

---

## Configuração do Projeto

A aplicação utiliza um **sistema de rotas standalone**, evitando a necessidade de um `AppModule`.

### Configuração de Rotas (`app.routes.ts`)
- O projeto utiliza um **sistema de layouts**, onde:
  - `LoginLayoutComponent` contém a tela de login.
  - `MainLayoutComponent` contém as páginas protegidas.
- O **`authGuard`** impede usuários não autenticados de acessar páginas internas.
- Qualquer rota inválida redireciona para **`/login`**.

```typescript
export const routes: Routes = [
  { 
    path: 'login', 
    component: LoginLayoutComponent, 
    children: [{ path: '', component: LoginComponent }]
  },
  { 
    path: 'auth', 
    component: MainLayoutComponent, 
    canActivate: [authGuard], 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'gerencia-bilhete/criar', component: CriarComponent },
      { path: 'gerencia-bilhete/liberar', component: LiberarComponent },
      { path: 'gerencia-bilhete/consultar', component: ConsultarComponent },
      { path: 'gerencia-bilhete/cng-pre-existente', component: CngPreExistenteComponent },
      { path: 'janela-broadcast/listar', component: ListarJanelaBroadcastComponent }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
```

### Configuração Global (`app.config.ts`)
- O projeto utiliza `provideRouter` para definir as rotas.
- Animações, `NgxMask` e `Toastr` são providenciados globalmente.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideEnvironmentNgxMask(), 
    provideToastr(),
  ]
};
```
---

## Autenticação

O sistema de autenticação utiliza um **token fake** armazenado no `localStorage` para simular um login.

### Como funciona a autenticação (`AuthService`)
1. O usuário insere as credenciais e clica em **Login**.
2. O sistema armazena um token fake no `localStorage`.
3. O `authGuard` verifica se o token existe antes de permitir acesso às rotas protegidas.
4. O usuário pode fazer logout, e o token será removido.

```typescript
isAuthenticated(): boolean {
  return localStorage.getItem('token') !== null;
}

login(): void {
  localStorage.setItem('token', 'fake-token');
}

logout(): void {
  localStorage.removeItem('token');
}
```

---

## Geração da Documentação

O projeto utiliza **Compodoc** para gerar a documentação automaticamente.

### Como Gerar a Documentação
1. Instale o Compodoc:

   ```
   npm install -g @compodoc/compodoc
   ```
2. Execute o comando para gerar a documentação:

   ```
   npm run compodoc
   ```
3. Acesse no navegador:

   ```
   http://localhost:8080
   ```

## Gerenciamento de Dependências

O projeto utiliza **NPM** para gerenciar pacotes.

- Para instalar pacotes adicionais:

  ```
  npm install <pacote>
  ```
- Para remover pacotes:

  ```
  npm uninstall <pacote>
  ```

---

## Gerar Build para Produção

Para compilar a aplicação para produção, utilize:
```
ng build --configuration=production
```
O código otimizado será gerado na pasta `dist`.

---
## Licença

&copy; 2025 TYSA TELECOMUNICACOES LTDA. Todos os direitos reservados.