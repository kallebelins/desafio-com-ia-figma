# Design System - Lista de Tarefas

## Referências do Design

**Fonte:** Figma - Basic Design System - Community

**Link do Design:**
- URL: https://www.figma.com/design/aWLMnDzEygnsGOv998MT79/Basic-Design%C2%A0System--Community-?node-id=0-1&m=dev&t=DFVy98yko1tH3PuN-1
- File Key: `aWLMnDzEygnsGOv998MT79`
- Node ID Principal: `0:1` (Page 1)
- Frame Principal: `0:2` (basic design system)

**Informações Técnicas:**
- Tecnologia: HTML + CSS
- Propósito: Design System de referência para outros projetos
- Última atualização do design: [Data da extração do design]

**Componentes Identificados no Design:**
- Typography (H1, H2, H3, H4, Paragraph)
- Color Palette (Primary, Secondary, Action, Grey, Black)
- Spacing System (XS, S, M, L, XL, XXL)
- Buttons (Primary, Alternative - estados: default, hover, disabled)
- Forms (Input, Checkbox, Radio Button - estados: default, focus, error)
- Tabs (Horizontal e Vertical - estados: default, hover)
- Exemplo: Formulário Sign Up completo

---

## Estrutura Base

- [x] Criar estrutura de pastas do projeto
- [x] Configurar arquivo HTML principal (index.html)
- [x] Configurar arquivo CSS principal (styles.css)
- [x] Criar arquivo de variáveis CSS (variables.css)
- [x] Criar arquivo README.md com documentação do design system

## Cores (Color Palette)

- [x] Definir variáveis CSS para cor Primary (#F34E4E)
- [x] Definir variáveis CSS para cor Secondary (#FFF6EA)
- [x] Definir variáveis CSS para cor Action (#7BB9FA)
- [x] Definir variáveis CSS para cor Grey (#D0D0D0)
- [x] Definir variáveis CSS para cor Black (#282828)
- [x] Criar seção de demonstração de cores no HTML
- [x] Estilizar cards de demonstração de cores

## Tipografia (Typography)

- [x] Definir estilos CSS para H1 (48px/60px line-height)
- [x] Definir estilos CSS para H2 (34px/50px line-height)
- [x] Definir estilos CSS para H3 (28px/38px line-height)
- [x] Definir estilos CSS para H4 (18px/22px line-height)
- [x] Definir estilos CSS para Paragraph (14px/24px line-height)
- [x] Criar seção de demonstração de tipografia no HTML
- [x] Estilizar seção de tipografia com exemplos

## Espaçamento (Spacing)

- [x] Definir variáveis CSS para espaçamento XS (5px)
- [x] Definir variáveis CSS para espaçamento S (10px)
- [x] Definir variáveis CSS para espaçamento M (15px)
- [x] Definir variáveis CSS para espaçamento L (25px)
- [x] Definir variáveis CSS para espaçamento XL (40px)
- [x] Definir variáveis CSS para espaçamento XXL (65px)
- [x] Criar seção de demonstração de espaçamentos no HTML
- [x] Estilizar visualização de espaçamentos

## Botões (Buttons)

- [x] Criar componente de botão Primary (estado default)
- [x] Criar componente de botão Primary (estado hover)
- [x] Criar componente de botão Primary (estado disabled)
- [x] Criar componente de botão Alternative (estado default)
- [x] Criar componente de botão Alternative (estado hover)
- [x] Criar componente de botão Alternative (estado disabled)
- [x] Criar seção de demonstração de botões no HTML
- [x] Estilizar todos os estados dos botões

## Formulários (Forms)

- [x] Criar componente de Input (estado default)
- [x] Criar componente de Input (estado focus)
- [x] Criar componente de Input (estado error)
- [x] Criar componente de Label para inputs
- [x] Criar componente de Checkbox (estado default)
- [x] Criar componente de Checkbox (estado checked)
- [x] Criar componente de Radio Button (estado default)
- [x] Criar componente de Radio Button (estado selected)
- [x] Criar seção de demonstração de formulários no HTML
- [x] Estilizar todos os estados dos componentes de formulário

## Tabs (Abas)

- [x] Criar componente de Tabs Horizontal (estado default)
- [x] Criar componente de Tabs Horizontal (estado hover)
- [x] Criar componente de Tabs Vertical (estado default)
- [x] Criar componente de Tabs Vertical (estado hover)
- [x] Criar seção de demonstração de tabs no HTML
- [x] Estilizar todos os estados das tabs

## Limpeza de Estilos não-Padrão (Clean-up)

- [x] Revisar seção de Cores e mover quaisquer estilos/demostrações que não pertençam ao design system para um arquivo separado chamado `index.css`.
- [x] Conferir exemplos de Tipografia e transferir para `index.css` todos os estilos auxiliares/adicionais não definidos nas variáveis ou regras do design system.
- [x] Analisar a seção de Espaçamentos e garantir que estilos inline ou adicionais aplicados apenas para visualização fiquem centralizados em `index.css` ao invés do HTML ou do design system principal.
- [x] Verificar os Botões e mover para `index.css` qualquer estilo extra aplicado apenas para demo, garantindo que o design system permaneça limpo.
- [x] Auditar Formulários (inputs, checkbox, radio, labels) e transferir para `index.css` os estilos temporários ou internos de demonstração.
- [x] Revisar os componentes de Tabs e migrar para `index.css` estilos transitórios/demonstração usados apenas no HTML de exemplo.
- [x] Criar uma checklist identificando todo uso de estilos inline ou CSS não documentado, e refatorar para que residam apenas em `index.css`.
- [x] Atualizar todos os exemplos de uso, separando claramente os estilos do design system dos estilos de visualização/auxiliares (estes somente no `index.css`), evitando customizações manuais no HTML demo.

## Páginas de Exemplo Sugeridas

- [x] Criar pasta `/exemplos` para armazenar as páginas de exemplo sugeridas.
- [x] Para cada página de exemplo criada em `/exemplos`, adicionar um link de navegação correspondente na página principal do Design System (`index.html`), facilitando o acesso direto às páginas demonstrativas pelo menu ou seção dedicada de navegação.


### Formulário Sign Up

Tem a referência dessa página como um componente em https://www.figma.com/design/aWLMnDzEygnsGOv998MT79/Basic-Design%C2%A0System--Community-?node-id=0-1&m=dev&t=DFVy98yko1tH3PuN-1

- [x] Criar página Sign Up (estrutura HTML)
- [x] Implementar tabs Individual/Agency na página Sign Up
- [x] Implementar campos de formulário (Full Name, Email, Password) na página
- [x] Implementar checkbox de termos na página
- [x] Implementar botões Sign Up e Cancel na página
- [x] Estilizar página Sign Up completa
- [x] Garantir responsividade da página Sign Up

### Dashboard

- [x] Criar página de Dashboard com layout básico usando o design system (cards, gráficos ou resumos, navegação lateral/superior).
- [x] Demonstrar uso de componentes como cards, tabelas e abas no contexto do Dashboard.
- [x] Garantir responsividade da página e uso consistente do design system.

### Perfil do Usuário

- [x] Criar página de Perfil do Usuário exibindo informações do usuário (avatar, nome, e-mail, bio, etc.).
- [x] Incluir exemplos de formulários de edição de perfil reutilizando componentes do design system.
- [x] Adicionar demonstração de listas de dados pessoais, opções de configuração e ações (botões).

### Cadastro em Sistema (Sign Up Page)

- [x] Criar página de Cadastro em Sistema separada, focada no fluxo de registro de novos usuários.
- [x] Destacar alternativas de autenticação (login social, e-mail/senha) utilizando componentes do design system para campos, botões e feedbacks.
- [x] Garantir clareza visual, validação de campos e responsividade no formulário de cadastro.

## Documentação e Finalização

- [x] Criar página de documentação completa
- [x] Documentar uso de cada componente
- [x] Documentar variáveis CSS disponíveis
- [x] Criar exemplos de código para cada componente
- [x] Validar HTML e CSS
- [x] Testar em diferentes navegadores
- [x] Garantir acessibilidade básica (ARIA labels, contraste)
- [x] Otimizar CSS para produção


## Revisão

- [x] Revisar index.html