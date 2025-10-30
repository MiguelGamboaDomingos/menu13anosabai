# 🚀 Início Rápido - Menu ABAI

## ⚡ 3 Passos para Ver o Menu Funcionando

### 1️⃣ Instalar Dependências
```bash
npm install
```
⏱️ Tempo: ~1 minuto

### 2️⃣ Iniciar o Servidor
```bash
npm run dev
```
⏱️ Tempo: ~5 segundos

### 3️⃣ Abrir no Navegador
Acesse: `http://localhost:5173`

🎉 **Pronto! Seu menu está rodando!**

---

## 🌐 Deploy no Netlify (2 Minutos)

### Opção Mais Rápida: Drag & Drop

1. **Criar Build**
   ```bash
   npm run build
   ```

2. **Acessar Netlify**
   - Vá para [netlify.com](https://www.netlify.com/)
   - Faça login (ou crie conta grátis)

3. **Upload**
   - Clique em "Add new site" → "Deploy manually"
   - Arraste a pasta `dist` para a área de upload
   - Aguarde 10 segundos

4. **Pronto!**
   - Seu site está no ar!
   - URL: `https://seu-site.netlify.app`

---

## ✏️ Personalizar o Menu (1 Minuto)

### Editar Cardápio

Abra: `src/App.jsx`

Procure por `menuData` e edite:

```javascript
const menuData = {
  categories: [
    {
      id: 1,
      name: 'Sua Categoria',  // ← Mude aqui
      icon: '🍕',              // ← Mude o emoji
      items: [
        { 
          name: 'Seu Prato',           // ← Nome
          description: 'Descrição',     // ← Descrição
          price: 'R$ 00,00'            // ← Preço
        },
      ]
    },
  ],
  location: {
    address: 'Seu Endereço',    // ← Mude aqui
    city: 'Sua Cidade',         // ← Mude aqui
    phone: 'Seu Telefone',      // ← Mude aqui
    hours: 'Seu Horário'        // ← Mude aqui
  }
}
```

Salve o arquivo e veja as mudanças instantaneamente! ✨

---

## 🎨 Mudar Cores (30 Segundos)

### Abra: `src/index.css`

```css
body {
  /* Mude o gradiente de fundo */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  /* Exemplos:
  
  Azul:
  background: linear-gradient(135deg, #667eea 0%, #00d2ff 100%);
  
  Rosa:
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  
  Verde:
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  */
}
```

---

## 🖼️ Trocar Logos (1 Minuto)

### Abra: `src/App.jsx`

Procure por:

```javascript
<div className="logo-placeholder">🎂</div>
```

Troque os emojis:
- 🎂 → 🎉 🎊 🎈 🎁 🍰 🧁 ⭐ ✨ 💫

Ou use suas próprias imagens:
1. Coloque a imagem em `public/` (ex: `logo.png`)
2. Substitua por:
   ```javascript
   <img src="/logo.png" alt="Logo" style={{width: '80px'}} />
   ```

---

## 📱 Testar em Celular

### Opção 1: Mesmo WiFi
1. No terminal, veja o IP local (ex: `192.168.1.100:5173`)
2. No celular, acesse: `http://192.168.1.100:5173`

### Opção 2: Após Deploy
1. Acesse a URL do Netlify no celular
2. Adicione à tela inicial para parecer um app!

---

## 🆘 Problemas Comuns

### ❌ Erro ao instalar
```bash
# Limpe o cache e tente novamente
rm -rf node_modules package-lock.json
npm install
```

### ❌ Porta 5173 em uso
```bash
# Use outra porta
npm run dev -- --port 3000
```

### ❌ Página em branco
1. Verifique o console do navegador (F12)
2. Certifique-se de que todos os arquivos foram salvos
3. Recarregue a página (Ctrl+F5)

### ❌ Build falha
```bash
# Verifique se há erros de sintaxe
npm run build
```

---

## 📚 Documentação Completa

- **README.md** - Visão geral e instruções
- **DEPLOY.md** - Guia completo de deploy
- **PERSONALIZACAO.md** - Todas as opções de personalização
- **SOBRE-O-PROJETO.md** - Detalhes técnicos

---

## 🎯 Checklist Rápido

Antes de fazer deploy, verifique:

- [ ] Editei o cardápio com meus pratos
- [ ] Atualizei as informações de localização
- [ ] Troquei os logos (se necessário)
- [ ] Testei em diferentes tamanhos de tela
- [ ] Verifiquei se todas as categorias abrem/fecham
- [ ] Testei o build: `npm run build`
- [ ] Revisei preços e descrições

---

## 💡 Dicas Profissionais

### 🔥 Hot Reload
Ao editar arquivos, o navegador atualiza automaticamente!

### 🎨 DevTools
Pressione F12 para:
- Ver erros no console
- Testar responsividade
- Inspecionar elementos
- Modificar CSS ao vivo

### 📸 Screenshots
Tire prints do menu para compartilhar nas redes sociais!

### 🔗 QR Code
Crie um QR Code do link do Netlify para facilitar o acesso!

---

## 🎉 Pronto para Começar!

```bash
# Cole estes comandos no terminal:
npm install
npm run dev
```

Depois abra: `http://localhost:5173`

**Divirta-se! 🚀**

---

**Precisa de ajuda?** Consulte os outros arquivos de documentação!

