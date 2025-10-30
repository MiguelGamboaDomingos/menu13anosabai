# 🎨 Guia de Personalização do Menu

## 📝 Editando o Cardápio

### Localização do Código
Abra o arquivo: `src/App.jsx`

### Estrutura do Menu

```javascript
const menuData = {
  categories: [
    {
      id: 1,                    // ID único da categoria
      name: 'Nome da Categoria', // Nome que aparece no card
      icon: '🍕',               // Emoji ou ícone
      items: [                  // Lista de itens
        { 
          name: 'Nome do Prato', 
          description: 'Descrição detalhada', 
          price: 'R$ 00,00' 
        },
      ]
    },
  ],
  location: {
    address: 'Endereço completo',
    city: 'Cidade - Estado',
    phone: 'Telefone',
    hours: 'Horário de funcionamento'
  }
}
```

### Exemplo: Adicionar Nova Categoria

```javascript
{
  id: 5,
  name: 'Cafés Especiais',
  icon: '☕',
  items: [
    { 
      name: 'Cappuccino', 
      description: 'Café expresso com leite vaporizado e espuma', 
      price: 'R$ 12,00' 
    },
    { 
      name: 'Latte', 
      description: 'Café com leite cremoso', 
      price: 'R$ 10,00' 
    },
  ]
}
```

---

## 🎨 Mudando as Cores

### Arquivo: `src/index.css`

#### Gradiente de Fundo
```css
body {
  /* Gradiente atual: roxo */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  /* Opções de cores:
  
  Azul para Verde:
  background: linear-gradient(135deg, #667eea 0%, #00d2ff 100%);
  
  Rosa para Laranja:
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  
  Verde para Azul:
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  
  Dourado:
  background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%);
  */
}
```

### Arquivo: `src/App.css`

#### Cor dos Headers das Categorias
```css
.category-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  /* Mude para suas cores preferidas */
}
```

#### Cor dos Preços
```css
.item-price {
  color: #667eea; /* Mude para a cor desejada */
}
```

#### Cor do Título da Localização
```css
.location h3 {
  color: #667eea; /* Mude para a cor desejada */
}
```

---

## 🖼️ Trocando os Logos

### Opção 1: Usar Emojis (Atual)

No arquivo `src/App.jsx`, procure:

```javascript
<div className="logo-left">
  <div className="logo-placeholder">🎂</div>
</div>
```

Troque os emojis:
- 🎂 🎉 🎊 🎈 🎁 (Festa)
- 🍰 🧁 🍾 🥂 (Comida/Bebida)
- ⭐ ✨ 💫 🌟 (Estrelas)

### Opção 2: Usar Imagens

1. Coloque suas imagens na pasta `public/` (ex: `logo-left.png`, `logo-right.png`)

2. No arquivo `src/App.jsx`, substitua:

```javascript
<div className="logo-left">
  <img src="/logo-left.png" alt="Logo" className="logo-image" />
</div>
```

3. No arquivo `src/App.css`, adicione:

```css
.logo-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .logo-image {
    width: 50px;
    height: 50px;
  }
}
```

---

## ✏️ Mudando Fontes

### Arquivo: `src/index.css`

#### Usar Google Fonts

1. Adicione no `index.html` (dentro do `<head>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
```

2. No `src/index.css`:

```css
body {
  font-family: 'Poppins', sans-serif;
}

.menu-title {
  font-family: 'Playfair Display', serif;
}
```

**Fontes Recomendadas:**
- Elegante: Playfair Display, Cormorant, Cinzel
- Moderna: Poppins, Montserrat, Raleway
- Divertida: Pacifico, Lobster, Dancing Script

---

## 🎭 Personalizando Animações

### Arquivo: `src/App.css`

#### Velocidade das Animações

```css
/* Animação de entrada dos cards */
.category-card {
  animation: floatIn 0.6s ease-out both;
  /* Mude 0.6s para mais rápido (0.3s) ou mais lento (1s) */
}

/* Delay entre cards */
.category-card {
  animation-delay: ${index * 0.1}s;
  /* Mude 0.1 para 0.2 para mais espaçamento */
}
```

#### Desativar Animações

```css
/* Remova ou comente estas linhas */
.category-card {
  /* animation: floatIn 0.6s ease-out both; */
}
```

---

## 📐 Ajustando Layout

### Número de Colunas no Desktop

No arquivo `src/App.css`:

```css
.menu-container {
  /* Atual: ajusta automaticamente com mínimo de 300px */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  /* Forçar 2 colunas: */
  grid-template-columns: repeat(2, 1fr);
  
  /* Forçar 3 colunas: */
  grid-template-columns: repeat(3, 1fr);
  
  /* Forçar 4 colunas: */
  grid-template-columns: repeat(4, 1fr);
}
```

### Espaçamento entre Cards

```css
.menu-container {
  gap: 25px; /* Mude para 15px (menor) ou 40px (maior) */
}
```

---

## 🌐 Mudando Idioma

### Arquivo: `src/App.jsx`

Procure e traduza:

```javascript
// Título
<h1 className="menu-title">MENU</h1>
// Para inglês: MENU (já está)
// Para espanhol: MENÚ

// Subtítulo
<h2>Aniversário ABAI</h2>
// Para inglês: ABAI Birthday
// Para espanhol: Cumpleaños ABAI

// Localização
<h3>📍 Localização</h3>
// Para inglês: 📍 Location
// Para espanhol: 📍 Ubicación
```

---

## 💡 Dicas Extras

### Adicionar Ícones Personalizados

Use emojis ou bibliotecas como:
- [Font Awesome](https://fontawesome.com/)
- [Material Icons](https://fonts.google.com/icons)
- [Lucide Icons](https://lucide.dev/)

### Adicionar Imagens aos Pratos

Modifique a estrutura do item:

```javascript
items: [
  { 
    name: 'Risoto', 
    description: 'Delicioso risoto',
    price: 'R$ 55,00',
    image: '/images/risoto.jpg' // Adicione esta linha
  },
]
```

E no componente, adicione a imagem:

```javascript
{item.image && <img src={item.image} alt={item.name} />}
```

---

## 🔄 Testando Mudanças

Após fazer qualquer alteração:

1. Salve o arquivo
2. O navegador atualiza automaticamente (hot reload)
3. Se não atualizar, recarregue a página (F5)

---

## 📱 Testando Responsividade

No navegador:
1. Pressione F12 (DevTools)
2. Clique no ícone de dispositivo móvel
3. Teste em diferentes tamanhos:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

---

**Divirta-se personalizando! 🎨**

