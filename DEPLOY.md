# 🚀 Guia de Deploy no Netlify

## Método 1: Deploy Manual (Mais Rápido)

### Passo a Passo:

1. **Criar o Build de Produção**
   ```bash
   npm run build
   ```
   Isso criará uma pasta `dist` com os arquivos otimizados.

2. **Acessar o Netlify**
   - Vá para [https://www.netlify.com/](https://www.netlify.com/)
   - Faça login ou crie uma conta gratuita

3. **Deploy Manual**
   - Clique em **"Add new site"** → **"Deploy manually"**
   - Arraste a pasta `dist` para a área de upload
   - Aguarde o upload completar
   - Pronto! Seu site estará no ar em segundos

4. **Personalizar o Domínio (Opcional)**
   - Vá em **Site settings** → **Domain management**
   - Clique em **"Change site name"**
   - Escolha um nome personalizado: `seu-nome.netlify.app`

---

## Método 2: Deploy via Git (Recomendado para Atualizações Frequentes)

### Passo a Passo:

1. **Criar Repositório no GitHub**
   - Vá para [https://github.com/new](https://github.com/new)
   - Crie um novo repositório (pode ser privado ou público)

2. **Fazer Push do Código**
   ```bash
   git init
   git add .
   git commit -m "Menu Aniversário ABAI - Versão inicial"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

3. **Conectar ao Netlify**
   - No Netlify, clique em **"Add new site"** → **"Import an existing project"**
   - Escolha **"GitHub"** e autorize o acesso
   - Selecione seu repositório
   - As configurações já estão no arquivo `netlify.toml`, então apenas clique em **"Deploy"**

4. **Atualizações Automáticas**
   - Toda vez que você fizer push para o GitHub, o Netlify atualizará automaticamente!
   ```bash
   git add .
   git commit -m "Atualização do menu"
   git push
   ```

---

## Método 3: Deploy via Netlify CLI

### Instalação:

```bash
npm install -g netlify-cli
```

### Deploy:

```bash
# Login no Netlify
netlify login

# Build do projeto
npm run build

# Deploy em produção
netlify deploy --prod

# Siga as instruções:
# - Create & configure a new site
# - Escolha seu time
# - Digite um nome para o site
# - Publish directory: dist
```

---

## 🎨 Personalizações Pós-Deploy

### Domínio Personalizado

1. No Netlify, vá em **Domain settings**
2. Clique em **"Add custom domain"**
3. Digite seu domínio (ex: `menuabai.com`)
4. Siga as instruções para configurar o DNS

### HTTPS Automático

- O Netlify ativa HTTPS automaticamente
- Certificado SSL gratuito via Let's Encrypt

### Variáveis de Ambiente (se necessário)

1. Vá em **Site settings** → **Environment variables**
2. Adicione suas variáveis
3. Faça redeploy

---

## 📊 Monitoramento

Após o deploy, você pode:

- Ver estatísticas de acesso no painel do Netlify
- Configurar notificações de deploy
- Ver logs de build
- Fazer rollback para versões anteriores

---

## 🔄 Atualizando o Menu

### Se usou Deploy Manual:
1. Edite os arquivos localmente
2. Execute `npm run build`
3. Arraste a nova pasta `dist` no Netlify

### Se usou Deploy via Git:
1. Edite os arquivos localmente
2. Faça commit e push:
   ```bash
   git add .
   git commit -m "Atualização do cardápio"
   git push
   ```
3. O Netlify atualiza automaticamente!

---

## 🆘 Problemas Comuns

### Build falha no Netlify
- Verifique se o `netlify.toml` está na raiz do projeto
- Certifique-se de que `npm run build` funciona localmente

### Página em branco
- Verifique se a pasta de publicação está configurada como `dist`
- Veja os logs de build no Netlify

### Rotas não funcionam
- O arquivo `netlify.toml` já está configurado com redirects
- Se ainda tiver problemas, adicione um arquivo `_redirects` na pasta `public`:
  ```
  /*    /index.html   200
  ```

---

## 📱 Testando em Dispositivos Móveis

Após o deploy, teste em:
- Celular (iOS e Android)
- Tablet
- Desktop

O menu é totalmente responsivo e se adapta a todos os tamanhos de tela!

---

## 🎉 Pronto!

Seu menu está no ar! Compartilhe o link com seus convidados:
`https://seu-site.netlify.app`

---

**Dúvidas?** Consulte a [documentação oficial do Netlify](https://docs.netlify.com/)

