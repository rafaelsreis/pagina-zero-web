# Página Zero — landing page

Aplicação Next.js com a apresentação do Diagramador IA e um tour de um livro fictício. O tour demonstra edição, estilos de página, capa e entregas previstas. As escolhas permanecem apenas na sessão da página; não há upload, processamento de manuscritos nem geração de arquivos finais.

## Desenvolvimento e validação

Executar em `web/`, com Node.js 20.9 ou superior:

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run start
```

A página fica em `http://localhost:3000`. Conferir o tour em desktop e celular, usando também teclado: avançar e voltar, comparar o texto, escolher estilos e cores, concluir, dispensar a oferta ainda em definição e recomeçar. A preparação de livros próprios e a contratação continuam planejadas.

## Compartilhamento e endereço público

Copiar `.env.example` para `.env.local` no desenvolvimento ou definir as variáveis no ambiente de build. Definir `SITE_URL` com a origem pública completa da aplicação, por exemplo `https://seu-dominio.com`. Essa configuração determina a URL canônica e os endereços absolutos usados no compartilhamento. Em deploys Vercel, `VERCEL_PROJECT_PRODUCTION_URL` é usado automaticamente quando `SITE_URL` não foi definido. Sem ambos, o build usa `http://localhost:3000` para desenvolvimento local e não declara uma URL canônica de produção.

`src/app/opengraph-image.tsx` gera a imagem de compartilhamento em PNG, com 1200 × 630 pixels. O favicon usa `public/pagina-zero-icon.svg`; o ícone para dispositivos Apple é gerado por `src/app/apple-icon.tsx`. Os metadados Open Graph e Twitter são definidos no layout. Conferir esses endereços após configurar o domínio e refazer o build.

## Lista de interesse

A lista ainda depende da definição de um serviço ou canal de cadastro. Para ativá-la, configurar `WAITLIST_URL` com a URL pública completa do formulário de inscrição nesse serviço e refazer o build. O bloco de lançamento passa a apresentar o botão “Quero acompanhar o lançamento”, que leva ao formulário real. A inscrição e suas condições são apresentadas pelo serviço de destino.

Sem essa variável, o site informa que as inscrições ainda não estão abertas. A aplicação não armazena contatos nem confirma inscrições por conta própria. O tour pode ser concluído sem cadastro.

## Referências do produto

Consultar a [documentação de produto](../docs-produto/README.md), o [plano de marketing](../docs-produto/marketing-landing-page.md) e a [HU-0027](../docs-produto/historias-usuario/produto1/HU-0027-tour-demonstrativo.md). A implementação do tour não representa aceite das ferramentas de preparação editorial, dos perfis de impressão ou da oferta comercial.
