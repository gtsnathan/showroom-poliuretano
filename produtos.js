/* =====================================================================
   LISTA DE PRODUTOS DO SITE
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa mexer para trocar produtos,
   textos, fotos e modelos 3D. Abra com o Bloco de Notas.

   Cada produto fica entre { e }. Campos:

   nome       → título do produto
   etiqueta   → selo pequeno (ex.: "Rígido")
   filtro     → "rigido", "semi" ou "mp" (botões de filtro do site)
   descricao  → texto curto
   destaques  → lista de vantagens
   ficha      → tabela que aparece em "Detalhes"
   cores      → duas cores do cartão (fundo e detalhe)

   COMO O PRODUTO APARECE NO SHOWROOM 3D (use só UM dos três):

   1) fotos360: { pasta: "fotos360/nome-da-pasta/", quantidade: 24 }
      → fotos tiradas girando o produto, nomeadas 1.jpg, 2.jpg, 3.jpg...
      (veja o guia COMO-COLOCAR-FOTOS-E-3D.txt)

   2) modelo: "modelos/nome-do-arquivo.glb"
      → arquivo 3D gerado por app de celular (Polycam, KIRI Engine, etc.)

   3) forma: "painel" | "telha" | "bau" | "boia" | "moldado" | "tambor"
      → ilustração 3D pronta, usada enquanto não houver fotos.

   Atenção: não apague vírgulas, aspas nem chaves. Se o site parar de
   mostrar os produtos, provavelmente faltou uma vírgula.
   ===================================================================== */

window.PRODUTOS = [
  {
    nome: "Sistema PU Rígido para Refrigeração",
    etiqueta: "Rígido",
    filtro: "rigido",
    descricao: "Espuma de células fechadas com alto poder de isolamento térmico para câmaras frias, balcões, freezers e equipamentos de refrigeração.",
    destaques: ["Baixa condutividade térmica", "Alta estabilidade dimensional", "Boa aderência a chapas metálicas"],
    ficha: [["Tipo", "Bicomponente (poliol + isocianato)"], ["Estrutura", "Células fechadas"], ["Processo", "Injeção / máquina de alta ou baixa pressão"], ["Aplicações", "Câmaras, balcões, painéis frigoríficos"]],
    cores: ["#1b4d6b", "#3fc1c9"],
    forma: "painel"
  },
  {
    nome: "Sistema PU Rígido para Painéis e Construção",
    etiqueta: "Rígido",
    filtro: "rigido",
    descricao: "Sistemas para painéis sanduíche, telhas termoacústicas e isolamento de edificações, com foco em leveza e desempenho térmico.",
    destaques: ["Isolamento termoacústico", "Leve e resistente", "Processo contínuo ou descontínuo"],
    ficha: [["Tipo", "Bicomponente"], ["Estrutura", "Células fechadas"], ["Processo", "Linha contínua, prensa ou injeção"], ["Aplicações", "Painéis, telhas, divisórias"]],
    cores: ["#5a3b12", "#f5a524"],
    forma: "telha"
  },
  {
    nome: "Sistema PU Rígido para Transportes",
    etiqueta: "Rígido",
    filtro: "rigido",
    descricao: "Formulações para isolamento de baús frigoríficos, carrocerias e contêineres, aliando isolamento e resistência mecânica.",
    destaques: ["Resistência à compressão", "Isolamento para cadeia do frio", "Aderência a fibra e metal"],
    ficha: [["Tipo", "Bicomponente"], ["Estrutura", "Células fechadas"], ["Processo", "Injeção em molde / painel"], ["Aplicações", "Baús, carrocerias, contêineres"]],
    cores: ["#203a2e", "#5fd38d"],
    forma: "bau"
  },
  {
    nome: "Sistema PU para Flutuação Naval",
    etiqueta: "Rígido",
    filtro: "rigido",
    descricao: "Espuma de preenchimento para embarcações, garantindo flutuabilidade e reforço estrutural de cascos e compartimentos.",
    destaques: ["Baixa absorção de água", "Flutuabilidade", "Preenchimento de cavidades"],
    ficha: [["Tipo", "Bicomponente"], ["Estrutura", "Células fechadas"], ["Processo", "Vazamento / injeção"], ["Aplicações", "Cascos, compartimentos, boias"]],
    cores: ["#132a4f", "#5b8def"],
    forma: "boia"
  },
  {
    nome: "Sistema PU Semi-rígido Moldado",
    etiqueta: "Semi-rígido",
    filtro: "semi",
    descricao: "Sistemas para peças moldadas com bom equilíbrio entre rigidez e flexibilidade, para a indústria moveleira e componentes.",
    destaques: ["Acabamento de superfície", "Absorção de impacto", "Moldagem de peças complexas"],
    ficha: [["Tipo", "Bicomponente"], ["Estrutura", "Semi-rígida"], ["Processo", "Moldagem em molde fechado"], ["Aplicações", "Componentes moveleiros, apoios, peças técnicas"]],
    cores: ["#4a1f3d", "#e46fb3"],
    forma: "moldado"
  },
  {
    nome: "Isocianato (MDI)",
    etiqueta: "Matéria-prima",
    filtro: "mp",
    descricao: "Componente B dos sistemas de poliuretano, fornecido para uso em conjunto com os polióis formulados.",
    destaques: ["Componente reativo do sistema", "Uso em espumas rígidas e semi-rígidas", "Fornecimento em tambores e IBCs"],
    ficha: [["Função", "Componente B"], ["Uso", "Reação com poliol formulado"], ["Embalagem", "Tambor / IBC (a confirmar)"], ["Armazenagem", "Local seco e protegido de umidade"]],
    cores: ["#3a3a1a", "#d6c64a"],
    forma: "tambor"
    // Quando tiver as fotos, troque a linha de cima por:
    // fotos360: { pasta: "fotos360/exemplo-tambor/", quantidade: 24 }
  }
];
