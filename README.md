# Portfólio João Paulo

Site estático (HTML, CSS e JS puros). Sem instalação nem build.

## Rodar localmente
Abra `index.html` no navegador ou, na pasta, rode `python3 -m http.server 8000` e acesse http://localhost:8000.

## Publicar (Netlify)
Arraste a pasta em app.netlify.com/drop ou conecte o repositório do GitHub (build vazio, pasta de publicação `/`). Depois, em `index.html`, troque `SEU-DOMINIO` na meta `og:image` pelo endereço final.

## O que editar
- `index.html`: textos, projetos e links.
- `css/style.css`: cores (variáveis em `:root`) e layout.
- `assets/isotipo.png`: isotipo fiel ao original, transparente; a cor vem do CSS (`.mark`). Original em `assets/isotipo-original.png`.
- `assets/og.png`, `favicon.ico`: imagem de compartilhamento e favicon.

## Pendências
Prints reais dos projetos (hoje cada projeto tem uma placa tipográfica com link ao vivo) e link do código do Rosângela (depende de o repositório ser público).
