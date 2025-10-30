# 🎂 Menu Aniversário ABAI

<div align="center">

**Menu Digital Interativo e Elegante**

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff?logo=vite)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00c7b7?logo=netlify)](https://www.netlify.com/)

[Demo](#) • [Início Rápido](INICIO-RAPIDO.md) • [Personalização](PERSONALIZACAO.md) • [Deploy](DEPLOY.md)

</div>

---

## ✨ Características

### 🎨 Design Premium
- **Cards Flutuantes** com sombras elegantes e efeito de elevação
- **Gradiente Roxo Moderno** (#667eea → #764ba2)
- **Tipografia Limpa** e hierarquia visual clara
- **Ícones Animados** com emojis expressivos

### ⚡ Animações Suaves
- **Entrada Progressiva** dos cards com efeito cascata
- **Transições Fluidas** em todas as interações
- **Hover Effects** que dão vida aos elementos
- **Expansão Suave** das categorias tipo accordion

### 📱 100% Responsivo
- **Desktop**: Grid multi-coluna otimizado
- **Tablet**: Layout adaptativo inteligente
- **Mobile**: Interface touch-friendly
- **Testado** em todos os dispositivos principais

### 🎯 Funcionalidades
- ✅ Categorias expansíveis (clique para abrir/fechar)
- ✅ Informações completas de cada prato
- ✅ Seção de localização integrada
- ✅ Performance otimizada (~49KB gzipped)
- ✅ SEO-friendly

## 🚀 Início Rápido

### Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:5173
```

🎉 **Pronto!** O menu estará rodando localmente com hot reload ativado.

> 💡 **Dica**: Veja o [INICIO-RAPIDO.md](INICIO-RAPIDO.md) para um guia passo a passo completo!

## 📦 Como Fazer Build

Para criar a versão de produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## 🌐 Deploy no Netlify

### 🚀 Método Mais Rápido (2 minutos)

```bash
# 1. Criar build de produção
npm run build

# 2. Acessar Netlify
# https://www.netlify.com/

# 3. Arrastar pasta 'dist' para o Netlify
# Deploy manual → Drag & Drop
```

### 📚 Outros Métodos de Deploy

Veja o guia completo em [DEPLOY.md](DEPLOY.md) com:
- ✅ Deploy via Git (atualizações automáticas)
- ✅ Deploy via Netlify CLI
- ✅ Configuração de domínio personalizado
- ✅ Troubleshooting e dicas

## 🎨 Personalização

### 📝 Editar Cardápio

**Arquivo**: `src/App.jsx`

Procure por `menuData` e personalize:

```javascript
const menuData = {
  categories: [
    {
      id: 1,
      name: 'Sua Categoria',  // ← Nome da categoria
      icon: '🍕',              // ← Emoji
      items: [
        {
          name: 'Seu Prato',           // ← Nome do prato
          description: 'Descrição',     // ← Descrição
          price: 'R$ 00,00'            // ← Preço
        },
      ]
    },
  ],
  location: {
    address: 'Seu Endereço',
    city: 'Sua Cidade',
    phone: 'Seu Telefone',
    hours: 'Seu Horário'
  }
}
```

### 🎨 Mudar Cores

**Arquivo**: `src/index.css`

```css
body {
  /* Gradiente de fundo */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Exemplos de gradientes**:
- Azul: `#667eea → #00d2ff`
- Rosa: `#f093fb → #f5576c`
- Verde: `#4facfe → #00f2fe`

### 🖼️ Trocar Logos

**Arquivo**: `src/App.jsx`

```javascript
// Trocar emojis
<div className="logo-placeholder">🎉</div>

// Ou usar imagens
<img src="/logo.png" alt="Logo" style={{width: '80px'}} />
```

### 📚 Guia Completo

Veja [PERSONALIZACAO.md](PERSONALIZACAO.md) para:
- ✅ Adicionar imagens aos pratos
- ✅ Mudar fontes
- ✅ Ajustar animações
- ✅ Modificar layout
- ✅ E muito mais!

## 📱 Responsividade

O menu se adapta automaticamente a diferentes tamanhos de tela:

| Dispositivo | Layout | Colunas |
|------------|--------|---------|
| 📱 Mobile (< 480px) | Vertical | 1 coluna |
| 📱 Tablet (768px) | Adaptativo | 2 colunas |
| 💻 Desktop (> 768px) | Grid | Multi-coluna |

**Testado em**: iPhone, iPad, Android, Chrome, Firefox, Safari, Edge

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| ⚛️ React | 18.3.1 | Framework UI |
| ⚡ Vite | 7.1.7 | Build tool |
| 🎨 CSS3 | - | Estilos e animações |
| 🌐 Netlify | - | Hospedagem |

## 📂 Estrutura do Projeto

```
menu-abai/
├── 📄 src/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos e animações
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Entry point
├── 📄 public/           # Arquivos estáticos
├── 📄 dist/             # Build de produção
├── 📋 README.md         # Este arquivo
├── 📋 INICIO-RAPIDO.md  # Guia rápido
├── 📋 DEPLOY.md         # Guia de deploy
├── 📋 PERSONALIZACAO.md # Guia de personalização
└── 📋 SOBRE-O-PROJETO.md # Documentação técnica
```

## 📚 Documentação

| Arquivo | Descrição |
|---------|-----------|
| [INICIO-RAPIDO.md](INICIO-RAPIDO.md) | Comece em 3 passos |
| [DEPLOY.md](DEPLOY.md) | Guia completo de deploy |
| [PERSONALIZACAO.md](PERSONALIZACAO.md) | Todas as opções de customização |
| [SOBRE-O-PROJETO.md](SOBRE-O-PROJETO.md) | Detalhes técnicos e arquitetura |

## 🎯 Checklist Pré-Deploy

- [ ] ✏️ Editei o cardápio com meus pratos
- [ ] 📍 Atualizei informações de localização
- [ ] 🖼️ Troquei os logos (opcional)
- [ ] 🎨 Personalizei as cores (opcional)
- [ ] 📱 Testei em diferentes dispositivos
- [ ] ✅ Verifiquei que todas as categorias funcionam
- [ ] 🏗️ Testei o build: `npm run build`

## 🆘 Suporte

Encontrou algum problema? Consulte:

1. 📖 [INICIO-RAPIDO.md](INICIO-RAPIDO.md) - Problemas comuns
2. 📖 [DEPLOY.md](DEPLOY.md) - Troubleshooting de deploy
3. 🌐 [Documentação do React](https://react.dev/)
4. 🌐 [Documentação do Netlify](https://docs.netlify.com/)

## 📊 Performance

- **Build Size**: ~49 KB (gzipped)
- **Load Time**: < 1 segundo
- **Lighthouse Score**: 95+
- **Mobile-Friendly**: ✅

## 🌟 Features Futuras (Opcional)

- [ ] 🔍 Busca de pratos
- [ ] 🌙 Modo escuro
- [ ] 🌍 Múltiplos idiomas
- [ ] 📸 Imagens dos pratos
- [ ] ⭐ Sistema de favoritos
- [ ] 📱 PWA (Progressive Web App)

## 📄 Licença

Projeto criado para o aniversário da ABAI.

---

<div align="center">

**Desenvolvido com ❤️ e React**

[⬆ Voltar ao topo](#-menu-aniversário-abai)

</div>

