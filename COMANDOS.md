# 🛠️ Comandos Úteis - Menu ABAI

## 📦 Instalação e Desenvolvimento

### Instalar Dependências
```bash
npm install
```

### Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse: `http://localhost:5173`

### Iniciar em Porta Específica
```bash
npm run dev -- --port 3000
```

### Iniciar e Abrir Navegador Automaticamente
```bash
npm run dev -- --open
```

---

## 🏗️ Build e Preview

### Criar Build de Produção
```bash
npm run build
```
Gera pasta `dist/` com arquivos otimizados

### Visualizar Build Localmente
```bash
npm run preview
```
Acesse: `http://localhost:4173`

### Build e Preview em Sequência
```bash
npm run build && npm run preview
```

---

## 🧹 Limpeza

### Limpar node_modules
```bash
# Windows (PowerShell)
Remove-Item -Recurse -Force node_modules

# Linux/Mac
rm -rf node_modules
```

### Limpar Build
```bash
# Windows (PowerShell)
Remove-Item -Recurse -Force dist

# Linux/Mac
rm -rf dist
```

### Limpar Cache e Reinstalar
```bash
# Windows (PowerShell)
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install

# Linux/Mac
rm -rf node_modules package-lock.json
npm install
```

---

## 🔍 Verificação

### Verificar Versão do Node
```bash
node --version
```
Recomendado: v16 ou superior

### Verificar Versão do npm
```bash
npm --version
```

### Listar Dependências Instaladas
```bash
npm list --depth=0
```

### Verificar Dependências Desatualizadas
```bash
npm outdated
```

### Atualizar Dependências
```bash
npm update
```

---

## 🌐 Deploy

### Deploy Manual no Netlify
```bash
# 1. Build
npm run build

# 2. Arrastar pasta 'dist' no Netlify
```

### Deploy via Netlify CLI

#### Instalar Netlify CLI
```bash
npm install -g netlify-cli
```

#### Login no Netlify
```bash
netlify login
```

#### Inicializar Site
```bash
netlify init
```

#### Deploy de Teste
```bash
netlify deploy
```

#### Deploy em Produção
```bash
netlify deploy --prod
```

#### Deploy Completo (Build + Deploy)
```bash
npm run build && netlify deploy --prod
```

---

## 🔧 Git

### Inicializar Repositório
```bash
git init
```

### Adicionar Arquivos
```bash
git add .
```

### Commit
```bash
git commit -m "Menu Aniversário ABAI - Versão inicial"
```

### Adicionar Repositório Remoto
```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
```

### Push para GitHub
```bash
git branch -M main
git push -u origin main
```

### Atualizar Código
```bash
git add .
git commit -m "Atualização do cardápio"
git push
```

---

## 📊 Análise

### Analisar Tamanho do Build
```bash
npm run build
```
Veja os tamanhos no output do terminal

### Verificar Erros de Sintaxe
```bash
# Se tiver ESLint configurado
npm run lint
```

---

## 🐛 Troubleshooting

### Porta em Uso
```bash
# Matar processo na porta 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5173 | xargs kill -9
```

### Limpar Cache do Vite
```bash
# Windows (PowerShell)
Remove-Item -Recurse -Force node_modules/.vite

# Linux/Mac
rm -rf node_modules/.vite
```

### Reinstalar Tudo do Zero
```bash
# Windows (PowerShell)
Remove-Item -Recurse -Force node_modules, package-lock.json, dist
npm install
npm run build

# Linux/Mac
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

---

## 📱 Teste em Dispositivos

### Ver IP Local
```bash
# Windows
ipconfig

# Linux/Mac
ifconfig
```

### Acessar de Outro Dispositivo
```
http://SEU_IP_LOCAL:5173
```
Exemplo: `http://192.168.1.100:5173`

---

## 🔐 Variáveis de Ambiente (Opcional)

### Criar Arquivo .env
```bash
# Windows (PowerShell)
New-Item .env

# Linux/Mac
touch .env
```

### Exemplo de .env
```
VITE_API_URL=https://api.exemplo.com
VITE_APP_NAME=Menu ABAI
```

### Usar no Código
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 📦 Dependências

### Adicionar Nova Dependência
```bash
npm install nome-do-pacote
```

### Adicionar Dependência de Desenvolvimento
```bash
npm install --save-dev nome-do-pacote
```

### Remover Dependência
```bash
npm uninstall nome-do-pacote
```

---

## 🎨 Formatação (Opcional)

### Instalar Prettier
```bash
npm install --save-dev prettier
```

### Formatar Código
```bash
npx prettier --write "src/**/*.{js,jsx,css}"
```

---

## 📸 Screenshots

### Tirar Screenshot do Build
```bash
# Após npm run preview
# Use ferramenta de screenshot do navegador (F12 > Device Toolbar)
```

---

## 🚀 Comandos Rápidos

### Setup Completo
```bash
npm install && npm run dev
```

### Build e Deploy
```bash
npm run build && netlify deploy --prod
```

### Limpar e Reinstalar
```bash
rm -rf node_modules package-lock.json && npm install
```

### Atualizar e Fazer Push
```bash
git add . && git commit -m "Atualização" && git push
```

---

## 📋 Checklist de Comandos

### Primeira Vez
```bash
# 1. Instalar
npm install

# 2. Testar localmente
npm run dev

# 3. Criar build
npm run build

# 4. Testar build
npm run preview

# 5. Deploy
netlify deploy --prod
```

### Atualizações
```bash
# 1. Editar código
# 2. Testar
npm run dev

# 3. Build
npm run build

# 4. Deploy
netlify deploy --prod

# 5. Git (opcional)
git add .
git commit -m "Atualização"
git push
```

---

## 🆘 Comandos de Emergência

### Site não carrega
```bash
# Limpar tudo e reconstruir
rm -rf node_modules dist .vite
npm install
npm run build
```

### Erro de dependências
```bash
# Reinstalar com cache limpo
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build falha
```bash
# Verificar erros
npm run build

# Ver logs detalhados
npm run build --verbose
```

---

## 💡 Dicas

### Atalhos do Terminal
- `Ctrl + C` - Parar servidor
- `Ctrl + L` - Limpar terminal
- `↑` - Comando anterior

### Comandos Úteis
```bash
# Ver histórico de comandos
history

# Limpar terminal
clear  # Linux/Mac
cls    # Windows

# Ver diretório atual
pwd    # Linux/Mac
cd     # Windows
```

---

## 📚 Referências

- [npm Docs](https://docs.npmjs.com/)
- [Vite Docs](https://vitejs.dev/)
- [Netlify CLI Docs](https://docs.netlify.com/cli/get-started/)
- [Git Docs](https://git-scm.com/doc)

---

<div align="center">

**🛠️ Comandos Úteis para o Menu ABAI**

Mantenha este arquivo como referência rápida!

</div>

