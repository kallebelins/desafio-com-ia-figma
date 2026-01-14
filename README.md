# Design System - Basic Design System

Sistema de design básico criado como referência para outros projetos. Este design system foi desenvolvido com base no design do Figma "Basic Design System - Community".

## 📋 Sobre o Projeto

Este projeto implementa um design system completo utilizando HTML e CSS puro, sem dependências de frameworks externos. O objetivo é fornecer uma base sólida e reutilizável de componentes e estilos que podem ser facilmente adaptados para diferentes projetos.

## 🎨 Referências do Design

**Fonte:** Figma - Basic Design System - Community

**Link do Design:**
- URL: https://www.figma.com/design/aWLMnDzEygnsGOv998MT79/Basic-Design%C2%A0System--Community-?node-id=0-1&m=dev&t=DFVy98yko1tH3PuN-1
- File Key: `aWLMnDzEygnsGOv998MT79`
- Node ID Principal: `0:1` (Page 1)
- Frame Principal: `0:2` (basic design system)

## 🏗️ Estrutura do Projeto

```
design-system-figma/
├── index.html          # Página principal de demonstração
├── docs.html           # Documentação completa do design system
├── css/
│   ├── variables.css   # Variáveis CSS (cores, espaçamentos, tipografia)
│   ├── styles.css      # Estilos principais e componentes
│   └── index.css       # Estilos auxiliares para demonstração
├── exemplos/           # Páginas de exemplo
│   ├── signup.html     # Formulário de cadastro
│   ├── dashboard.html  # Dashboard completo
│   ├── perfil.html     # Perfil do usuário
│   └── cadastro.html   # Cadastro em sistema
├── README.md           # Documentação do projeto
├── VALIDATION_REPORT.md # Relatório de validação e testes
└── tasks.md            # Lista de tarefas do projeto
```

## 🎯 Componentes Disponíveis

O design system inclui os seguintes componentes:

### Cores (Color Palette)
- **Primary**: #F34E4E
- **Secondary**: #FFF6EA
- **Action**: #7BB9FA
- **Grey**: #D0D0D0
- **Black**: #282828

### Tipografia (Typography)
- **H1**: 48px / 60px line-height
- **H2**: 34px / 50px line-height
- **H3**: 28px / 38px line-height
- **H4**: 18px / 22px line-height
- **Paragraph**: 14px / 24px line-height

### Espaçamento (Spacing System)
- **XS**: 5px
- **S**: 10px
- **M**: 15px
- **L**: 25px
- **XL**: 40px
- **XXL**: 65px

### Componentes
- Botões (Primary, Alternative - estados: default, hover, disabled)
- Formulários (Input, Checkbox, Radio Button - estados: default, focus, error)
- Tabs (Horizontal e Vertical - estados: default, hover)
- Exemplo: Formulário Sign Up completo

## 🚀 Como Usar

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em um navegador web
3. Explore os componentes e estilos disponíveis
4. Use as variáveis CSS e componentes como referência em seus projetos

## 📝 Variáveis CSS

Todas as variáveis estão definidas no arquivo `css/variables.css` e podem ser facilmente customizadas:

- Cores: `--color-primary`, `--color-secondary`, etc.
- Espaçamentos: `--spacing-xs`, `--spacing-s`, etc.
- Tipografia: `--font-size-h1`, `--line-height-h1`, etc.

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS)
- Design baseado no Figma

## 📖 Documentação

Para documentação completa sobre como usar cada componente, variáveis CSS disponíveis e exemplos de código, acesse:

**[docs.html](docs.html)** - Documentação Completa do Design System

A documentação inclui:
- Guia de uso de todos os componentes
- Referência completa de variáveis CSS
- Exemplos de código para cada componente
- Diretrizes de acessibilidade
- Melhores práticas de implementação

## ✅ Validação e Qualidade

O design system foi validado e testado seguindo os padrões da indústria:

- ✓ **HTML5 válido** - Todos os arquivos HTML seguem os padrões W3C
- ✓ **CSS3 válido** - Todo o CSS foi validado sem erros
- ✓ **WCAG 2.1 Level AA** - Acessibilidade completa garantida
- ✓ **Cross-browser** - Compatível com Chrome, Firefox, Safari e Edge
- ✓ **Keyboard Navigation** - Totalmente navegável por teclado
- ✓ **Semantic HTML** - Estrutura semântica correta

Para mais detalhes, consulte o [VALIDATION_REPORT.md](VALIDATION_REPORT.md)

## 🚀 Produção

### Otimizações Recomendadas:

1. **Minificação de CSS**: Reduza o tamanho dos arquivos CSS em ~30-40%
2. **Compressão Gzip**: Habilite compressão no servidor para reduzir tamanho em ~70%
3. **Cache**: Configure headers de cache apropriados para arquivos CSS
4. **CDN**: Considere usar um CDN para entrega global mais rápida

### Tamanhos de Arquivo:
- variables.css: ~2.7 KB
- styles.css: ~13.5 KB
- index.css: ~13.5 KB
- **Total CSS**: ~29.7 KB (não comprimido)

## 📄 Licença

Este projeto é baseado em um design da comunidade do Figma e está disponível para uso como referência em outros projetos.

## 📞 Suporte

Para questões ou sugestões sobre este design system, consulte a documentação completa ou os arquivos de código fonte.
