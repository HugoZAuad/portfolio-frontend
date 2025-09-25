# Portfolio Frontend

Um portfólio pessoal moderno e responsivo construído com React, TypeScript e Material-UI, apresentando projetos, habilidades e informações de contato de forma elegante e interativa.

## 🚀 Sobre o Projeto

Este é um portfólio frontend desenvolvido para apresentar trabalhos, habilidades e experiências profissionais. O projeto utiliza tecnologias modernas para criar uma experiência de usuário fluida e visualmente atraente, com suporte a temas claro e escuro, animações cinematográficas e um dashboard administrativo para gerenciamento de conteúdo.

## 🛠️ Tecnologias Utilizadas

### Frontend Core
- **React 19.1.1** - Biblioteca principal para construção da interface
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Vite 7.1.6** - Build tool e dev server ultra-rápido
- **React Router DOM 7.9.1** - Roteamento para aplicações React

### UI/UX Framework
- **Material-UI (MUI) 7.3.2** - Componentes React baseados no Material Design
- **@emotion/react 11.14.0** & **@emotion/styled 11.14.1** - Sistema de estilização
- **@mui/icons-material 7.3.2** - Ícones do Material Design

### Animações e Interações
- **Framer Motion 12.23.19** - Biblioteca de animações para React
- **CSS3 Animations** - Transições e efeitos visuais personalizados

### Comunicação e Dados
- **Axios 1.12.2** - Cliente HTTP para requisições à API
- **Backend API** - Servidor Nest.js hospedado no Render

### Desenvolvimento e Qualidade
- **ESLint 9.35.0** - Linting de código JavaScript/TypeScript
- **TypeScript ESLint 8.43.0** - Regras específicas para TypeScript
- **@eslint/js 9.35.0** - Configurações base do ESLint

## 📁 Estrutura de Pastas

```
portfolio-frontend/
├── public/                    # Arquivos estáticos
│   └── avatar.png            # Imagem do avatar
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Common/          # Componentes compartilhados
│   │   │   ├── Button/      # Botão personalizado
│   │   │   ├── CinematicName/ # Nome com efeito cinematográfico
│   │   │   ├── FeedbackAlert/ # Alertas de feedback
│   │   │   ├── FloatingSocialMenu/ # Menu social flutuante
│   │   │   ├── Footer/      # Rodapé
│   │   │   ├── Layout/      # Layouts da aplicação
│   │   │   ├── Navbar/      # Barras de navegação
│   │   │   ├── ScrollToTopButton/ # Botão voltar ao topo
│   │   │   ├── ThemeToggle/ # Toggle de tema
│   │   │   └── Transition/  # Componentes de transição
│   │   ├── Components_About/ # Seção Sobre
│   │   ├── Components_Contact/ # Seção Contato
│   │   ├── Components_Dashboard/ # Dashboard administrativo
│   │   ├── Components_Home/ # Seção Home
│   │   ├── Components_Projects/ # Seção Projetos
│   │   └── Components_Skills/ # Seção Habilidades
│   ├── contexts/            # Contextos React
│   │   ├── AuthContext.tsx  # Gerenciamento de autenticação
│   │   ├── FeedbackContext.tsx # Feedback do usuário
│   │   └── ThemeContext.tsx # Gerenciamento de tema
│   ├── hooks/              # Hooks personalizados
│   │   └── useFeedback.ts  # Hook para feedback
│   ├── pages/              # Páginas da aplicação
│   │   ├── About/          # Página Sobre
│   │   ├── Contact/        # Página Contato
│   │   ├── Dashboard/      # Dashboard principal
│   │   ├── Home/           # Página inicial
│   │   ├── Login/          # Página de login
│   │   ├── Projects/       # Página de projetos
│   │   └── Skills/         # Página de habilidades
│   ├── routes/             # Configuração de rotas
│   │   └── ProtectedRoute/ # Rota protegida
│   ├── services/           # Serviços de API
│   │   ├── projectService/ # Serviço de projetos
│   │   └── skillService/   # Serviço de habilidades
│   ├── utils/              # Utilitários
│   │   ├── api.ts          # Configuração da API
│   │   ├── authUtils.ts    # Utilitários de autenticação
│   │   ├── format.ts       # Funções de formatação
│   │   └── validation.ts   # Validações
│   ├── App.tsx             # Componente principal
│   ├── App.css             # Estilos do App
│   ├── index.css           # Estilos globais
│   ├── main.tsx            # Ponto de entrada
│   └── vite-env.d.ts       # Definições de tipos do Vite
├── .gitignore              # Arquivos ignorados pelo Git
├── eslint.config.js        # Configuração do ESLint
├── index.html              # Template HTML
├── package.json            # Dependências e scripts
├── package-lock.json       # Lockfile do npm
├── README.md               # Este arquivo
├── tsconfig.app.json       # Configuração TypeScript para app
├── tsconfig.json           # Configuração TypeScript principal
├── tsconfig.node.json      # Configuração TypeScript para Node
└── vite.config.ts          # Configuração do Vite
```

## 🎨 Decisões de Design e Cores

### Paleta de Cores
- **Tema Escuro:**
  - Primária: `#6366f1` (Indigo 500)
  - Secundária: `#8b5cf6` (Violet 500)
  - Fundo: `#0f0f23` (Azul muito escuro)
  - Papel: `#1a1a2e` (Azul escuro)
  - Texto Primário: `#ffffff` (Branco)
  - Texto Secundário: `#a1a1aa` (Cinza claro)

- **Tema Claro:**
  - Primária: `#4f46e5` (Indigo 600)
  - Secundária: `#7c3aed` (Violet 600)
  - Fundo: `#fafafa` (Cinza muito claro)
  - Papel: `#ffffff` (Branco)
  - Texto Primário: `#1a1a1a` (Preto)
  - Texto Secundário: `#6b7280` (Cinza)

### Ideias de Design
1. **Gradientes Personalizados:** Uso de gradientes lineares para fundos, criando profundidade visual
2. **Tipografia Moderna:** Fonte Orbitron para títulos, combinada com Inter/Roboto para corpo do texto
3. **Scrollbars Customizadas:** Scrollbars estilizadas para combinar com o tema
4. **Animações Cinematográficas:** Efeitos de digitação e transições suaves
5. **Design Responsivo:** Breakpoints otimizados para mobile, tablet e desktop
6. **Microinterações:** Hover effects e transições suaves em botões e links

## 🏗️ Arquitetura e Decisões Técnicas

### Gerenciamento de Estado
- **Context API:** Utilizado para temas, autenticação e feedback
- **Local Storage:** Persistência de preferências do usuário
- **State Management:** Estados locais para componentes específicos

### Estrutura de Componentes
- **Componentes Atômicos:** Divisão em componentes pequenos e reutilizáveis
- **Feature-based Structure:** Organização por funcionalidades
- **Layouts Separados:** Layout público vs. dashboard administrativo

### Comunicação com Backend
- **RESTful API:** Endpoints para projetos, habilidades e autenticação
- **Axios Interceptors:** Configuração centralizada para requisições
- **Error Handling:** Tratamento de erros com feedback visual

### Autenticação e Segurança
- **JWT Authentication:** Autenticação baseada em tokens
- **Protected Routes:** Rotas protegidas para áreas administrativas
- **Session Management:** Gerenciamento de sessão com cookies

### Validações e Utilitários
- **Form Validation:** Validações de email e senha
- **Data Formatting:** Formatação de datas e textos
- **Type Safety:** Tipagem rigorosa com TypeScript

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Navegue para o diretório
cd portfolio-frontend

# Instale as dependências
npm install
```

### Desenvolvimento
```bash
# Execute o servidor de desenvolvimento
npm run dev
```

### Build para Produção
```bash
# Build da aplicação
npm run build

# Preview do build
npm run preview
```

### Linting
```bash
# Execute o linter
npm run lint
```

## 🌟 Funcionalidades

### Funcionalidades Públicas
- **Home:** Apresentação pessoal com animações
- **Sobre:** Informações pessoais e profissionais
- **Projetos:** Portfólio de projetos com paginação
- **Habilidades:** Lista de habilidades técnicas
- **Contato:** Formulário de contato e informações
- **Tema:** Toggle entre modo claro e escuro

### Funcionalidades Administrativas
- **Dashboard:** Painel administrativo
- **Gerenciamento de Projetos:** CRUD de projetos
- **Gerenciamento de Habilidades:** CRUD de habilidades
- **Upload de Imagens:** Sistema de upload para projetos

### UX/UI Features
- **Animações:** Transições suaves e efeitos visuais
- **Responsividade:** Design adaptável a todos os dispositivos
- **Acessibilidade:** Suporte a leitores de tela
- **Performance:** Otimizações para carregamento rápido

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run lint` - Executa o linter
- `npm run preview` - Preview da build de produção

## 📱 Responsividade

O projeto é totalmente responsivo, com breakpoints otimizados:
- **Mobile:** < 600px
- **Tablet:** 600px - 900px
- **Desktop:** > 900px

## 🌐 Deploy

O projeto está configurado para deploy na plataforma Lovable:
- URL do projeto: https://lovable.dev/projects/3c71a379-a7ee-4182-9c85-17a40707b693
- Backend hospedado em: https://portfolio-backend-pr7h.onrender.com

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e todos os direitos reservados.

## 👨‍💻 Autor

**Hugo Zeymer Auad**
- LinkedIn: https://www.linkedin.com/in/hugozauad/
- Portfólio: https://portfolio-frontend-sand-five.vercel.app/

---

*Desenvolvido com ❤️ usando React, TypeScript e Material-UI*
