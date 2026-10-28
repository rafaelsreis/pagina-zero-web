import Image from "next/image";
import { ArrowRight, ArrowUpRight, BookOpen, FileText, Headphones, Layers, LayoutTemplate, Palette, PenLine } from "lucide-react";
import { ProductTour } from "@/components/ProductTour";

const primaryLink = "button-primary";
const waitlistUrl = process.env.WAITLIST_URL?.trim() || undefined;

if (waitlistUrl && !["https:", "http:"].includes(new URL(waitlistUrl).protocol)) {
    throw new Error("WAITLIST_URL deve ser a URL completa de um formulário de interesse (HTTP ou HTTPS).");
}

const deliveries = [
    {
        format: "EPUB",
        title: "Sua edição digital",
        description: "Arquivo para distribuição digital, com estrutura e metadados a conferir. É uma entrega diferente dos arquivos de impressão.",
    },
    {
        format: "PDF",
        title: "O miolo para impressão",
        description: "As páginas internas do livro, preparadas para conferência e envio manual à UICLAP. O miolo validado poderá ser baixado antes da capa.",
    },
    {
        format: "JPG",
        title: "A capa física completa",
        description: "Frente, lombada e contracapa em uma arte aberta, conferida com o guia da UICLAP e o mesmo miolo. O pacote físico completo exige ambos validados.",
    },
];

const questions = [
    {
        question: "Já posso enviar meu manuscrito ou contratar?",
        answer: "A Página Zero está em desenvolvimento. Você já pode explorar um livro fictício no tour. Upload, edição e exportação de uma obra própria, assim como a contratação, ainda não estão disponíveis. O lançamento depende da validação das entregas.",
    },
    {
        question: "O EPUB é o arquivo que envio à UICLAP?",
        answer: "O EPUB é a edição digital. Para o livro físico, a proposta prevê miolo em PDF e capa aberta em JPG, separados e preparados para envio manual à UICLAP.",
    },
    {
        question: "A Página Zero publica por mim?",
        answer: "O autor fará o envio dos arquivos pela própria conta na plataforma de destino. A proposta da Página Zero é preparar os arquivos e orientar sua conferência.",
    },
    {
        question: "Como será conferida a capa?",
        answer: "O fluxo permite baixar o miolo validado e enviá-lo à UICLAP para obter o guia de medidas. A capa será conferida com esse guia e vinculada ao mesmo miolo. Mudanças na paginação exigem nova conferência da capa física.",
    },
    {
        question: "Existe aprovação garantida?",
        answer: "A proposta inclui validações dos arquivos, mas a aceitação depende da análise e das regras da plataforma de destino. A Página Zero não apresenta selo de aprovação externa nem garantia de publicação.",
    },
    {
        question: "Quanto vai custar e poderei alterar o livro depois?",
        answer: "Preços, limites de uso, revisões e prazo de acesso ainda estão em definição. A oferta deverá informar essas condições antes da contratação. A possibilidade de editar e regenerar arquivos seguirá o acesso contratado.",
    },
    {
        question: "E a escrita assistida e os audiolivros?",
        answer: "O Ghostwriter e o Audio Studio são evoluções planejadas para depois do produto inicial de diagramação. Ainda não há teste de voz, clonagem, síntese de áudio ou contratação desses serviços nesta página.",
    },
];

const features = [
    { icon: PenLine, title: "O texto, sob seu controle", description: "Edição e revisão com conferência do autor sobre as alterações." },
    { icon: LayoutTemplate, title: "Cada página em seu lugar", description: "Prévia da diagramação e conferência do arquivo final." },
    { icon: Palette, title: "Uma capa por inteiro", description: "Frente, lombada e contracapa pensadas para a mesma obra." },
    { icon: Layers, title: "Uma obra, diferentes edições", description: "EPUB, miolo e capa em arquivos separados para cada destino." },
];

export default function Home() {
    return (
        <div className="site-shell min-h-screen font-sans text-slate-900 selection:bg-amber-900/20">
            <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-6 focus:py-3">
                Pular para o conteúdo
            </a>
            <header className="site-header sticky top-0 z-40 backdrop-blur-xl">
                <div className="site-container flex min-h-18 items-center justify-between gap-3">
                    <a href="#inicio" className="relative block h-12 w-36 shrink-0 overflow-hidden mix-blend-multiply sm:w-48">
                        <Image src="/logo-pz-v5.jpg" alt="Página Zero — início" fill sizes="(max-width: 640px) 144px, 192px" className="object-cover" />
                    </a>
                    <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-[13px] font-medium text-slate-600 md:flex">
                        <a href="#solucoes" className="nav-link">O produto</a>
                        <a href="#etapas" className="nav-link">Tour</a>
                        <a href="#entregas" className="nav-link">Entregas</a>
                        <a href="#faq" className="nav-link">Dúvidas</a>
                    </nav>
                    <a href="#lancamento" className="header-cta">Lançamento <ArrowUpRight aria-hidden="true" size={15} /></a>
                </div>
                <nav aria-label="Navegação móvel" className="flex justify-center gap-6 border-t border-[#e4dfd4] px-4 text-xs font-medium text-slate-600 md:hidden">
                    <a href="#solucoes" className="inline-flex min-h-10 items-center">O produto</a>
                    <a href="#etapas" className="inline-flex min-h-10 items-center">Tour</a>
                    <a href="#entregas" className="inline-flex min-h-10 items-center">Entregas</a>
                    <a href="#faq" className="inline-flex min-h-10 items-center">Dúvidas</a>
                </nav>
            </header>

            <main id="conteudo" tabIndex={-1}>
                <section id="inicio" aria-labelledby="titulo-inicio" className="site-container hero-section">
                    <div className="grid items-center gap-10 md:grid-cols-[1.06fr_1fr] md:gap-8 lg:gap-16">
                        <div className="hero-copy">
                            <p className="status-label"><span aria-hidden="true" className="status-dot" /> Em desenvolvimento <span className="ml-2 border-l border-[#d8cfb9] pl-3 text-[#6e695c]">Diagramador IA</span></p>
                            <h1 id="titulo-inicio" className="hero-title mt-7 font-serif">
                                <span className="block">Seu manuscrito</span>
                                <span className="block">preparado para</span>
                                <span className="block text-[#88682f] italic">virar livro.</span>
                            </h1>
                            <p className="mt-6 max-w-lg text-base leading-7 text-[#64685f] sm:text-lg sm:leading-8">
                                Estamos desenvolvendo um lugar para revisar, diagramar e criar a capa da sua obra. Do EPUB aos arquivos para você enviar à UICLAP.
                            </p>
                            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                                <a href="#etapas" className={primaryLink}>Explorar um livro de exemplo <ArrowRight aria-hidden="true" size={17} /></a>
                                <a href="#entregas" className="text-link">Conhecer as entregas <ArrowUpRight aria-hidden="true" size={16} /></a>
                            </div>
                            <p className="mt-5 max-w-sm text-xs leading-5 text-[#66705f]">Tour com obra fictícia. A preparação de livros próprios e a contratação ainda não estão disponíveis.</p>
                        </div>
                        <figure className="hero-visual">
                            <div className="hero-photo relative overflow-hidden">
                                <Image src="/p1_lifestyle.jpg" alt="Livro aberto sobre uma mesa de madeira, ao lado de uma xícara e de uma janela" fill sizes="(max-width: 767px) calc(100vw - 40px), 50vw" className="object-cover" preload />
                                <span className="photo-label">Toda história começa<br />com uma página.</span>
                            </div>
                            <a href="#etapas" className="hero-project group">
                                <div aria-hidden="true" className="mini-book"><span>O jardim<br /><em>das horas</em></span><span className="text-[7px] tracking-wider">LIA MONTEIRO</span></div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[10px] font-medium tracking-[0.14em] text-[#806938] uppercase">Projeto demonstrativo</p>
                                    <p className="mt-2 font-serif text-xl leading-tight text-[#26322c]">O jardim das horas</p>
                                    <span className="mt-2 inline-flex items-center gap-2 text-xs text-[#6b7166]">Conheça no tour <ArrowUpRight aria-hidden="true" size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                                </div>
                            </a>
                            <figcaption className="mt-4 text-right text-[11px] leading-4 text-[#66705f]">Imagem ilustrativa · Não representa um arquivo gerado pela plataforma.</figcaption>
                        </figure>
                    </div>
                    <div className="hero-bottom mt-12 flex flex-col gap-5 border-t border-[#ddd8cb] pt-6 text-xs text-[#66705f] sm:flex-row sm:items-center sm:justify-between lg:mt-16">
                        <p className="tracking-[0.12em] uppercase">Do manuscrito à sua próxima edição</p>
                        <ul className="flex flex-wrap gap-x-6 gap-y-3 font-medium text-[#4b554b]">
                            <li className="flex items-center gap-2"><PenLine aria-hidden="true" size={14} /> Revisão</li>
                            <li className="flex items-center gap-2"><BookOpen aria-hidden="true" size={14} /> Diagramação</li>
                            <li className="flex items-center gap-2"><Palette aria-hidden="true" size={14} /> Capa</li>
                            <li className="flex items-center gap-2"><FileText aria-hidden="true" size={14} /> Exportação</li>
                        </ul>
                    </div>
                </section>

                <section id="solucoes" aria-labelledby="titulo-produto" className="section-space border-y border-[#e5e0d5] bg-[#fdfcf8]">
                    <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:gap-20">
                        <div className="max-w-lg">
                            <p className="eyebrow">01 / O produto</p>
                            <h2 id="titulo-produto" className="section-title mt-5">Mais clareza entre o texto e a publicação.</h2>
                            <p className="mt-6 text-base leading-7 text-[#626b5d]">Organizar capítulos, ajustar a impressão e preparar uma capa completa são etapas diferentes. O Diagramador IA está sendo pensado para reuni-las em um fluxo com conferência do autor.</p>
                            <a href="#etapas" className="text-link mt-6">Entender o fluxo previsto <ArrowUpRight aria-hidden="true" size={16} /></a>
                        </div>
                        <div>
                            <ul className="feature-grid grid gap-x-8 sm:grid-cols-2">
                                {features.map((feature) => (
                                    <li key={feature.title} className="border-b border-[#deded3] py-6 first:pt-0 sm:[&:nth-child(2)]:pt-0">
                                        <feature.icon aria-hidden="true" size={22} strokeWidth={1.4} className="mb-4 text-[#927640]" />
                                        <h3 className="font-serif text-2xl leading-tight text-[#27352e]">{feature.title}</h3>
                                        <p className="mt-3 text-sm leading-6 text-[#66705f]">{feature.description}</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-5 text-xs leading-5 text-[#626b5d]">Entregas planejadas para o Diagramador IA. A disponibilidade depende da implementação e da validação de cada etapa.</p>
                        </div>
                    </div>
                </section>

                <ProductTour />

                <section id="entregas" aria-labelledby="titulo-entregas" className="delivery-section section-space">
                    <div className="site-container">
                        <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-20">
                            <div>
                                <p className="eyebrow text-[#c7b282]">03 / Entregas previstas</p>
                                <h2 id="titulo-entregas" className="section-title mt-5 text-[#f5f2e9]">Cada formato<br />tem seu lugar.</h2>
                            </div>
                            <p className="max-w-md text-base leading-7 text-[#aeb7ad]">O arquivo digital e o pacote físico atendem a destinos diferentes. Você fará o envio pela sua própria conta.</p>
                        </div>
                        <div className="grid gap-5 md:grid-cols-3">
                            {deliveries.map((delivery, index) => (
                                <article key={delivery.format} className="delivery-card rounded-lg border border-white/10 p-6 sm:p-8">
                                    <div className="mb-8 flex items-start justify-between">
                                        <span aria-hidden="true" className={`file-symbol file-symbol-${index}`}>{index === 0 ? <BookOpen size={22} strokeWidth={1.4} /> : index === 1 ? <FileText size={22} strokeWidth={1.4} /> : <Layers size={22} strokeWidth={1.4} />}</span>
                                        <span className="text-xs tracking-[0.12em] text-[#9ba89d]">0{index + 1}</span>
                                    </div>
                                    <p className="text-[11px] font-medium tracking-[0.16em] text-[#d3bb83]">{delivery.format}</p>
                                    <h3 className="mt-3 font-serif text-[27px] leading-tight text-[#f5f2e9]">{delivery.title}</h3>
                                    <p className="mt-4 text-sm leading-6 text-[#b8c0b5]">{delivery.description}</p>
                                </article>
                            ))}
                        </div>
                        <p className="mt-7 max-w-3xl text-xs leading-6 text-[#a5b0a3]">A aceitação dos arquivos depende da análise e das regras da plataforma de destino. A proposta não inclui publicação automática nem garantia de aprovação.</p>
                    </div>
                </section>

                <section id="evolucoes" aria-labelledby="titulo-evolucoes" className="section-space">
                    <div className="site-container">
                        <div className="mb-9 grid gap-5 lg:grid-cols-2 lg:gap-20">
                            <div>
                                <p className="eyebrow">Próximos capítulos</p>
                                <h2 id="titulo-evolucoes" className="section-title mt-5">Outras formas de<br className="hidden sm:block" /> dar vida à sua obra.</h2>
                            </div>
                            <p className="max-w-md self-end text-base leading-7 text-[#626b5d]">Escrita assistida e audiolivros fazem parte da visão futura. O foco inicial é a preparação editorial do manuscrito.</p>
                        </div>
                        <div className="grid gap-5 md:grid-cols-2">
                            <article className="roadmap-card rounded-lg border border-[#deddd1] bg-[#fdfcf8] p-6 sm:p-8">
                                <div className="flex items-center justify-between gap-4"><PenLine aria-hidden="true" size={23} strokeWidth={1.4} className="text-[#927640]" /><span className="planned-label">Planejado</span></div>
                                <p className="mt-7 text-[11px] tracking-[0.12em] text-[#66705f] uppercase">Escrita assistida</p>
                                <h3 className="mt-2 font-serif text-3xl text-[#27352e]">Ghostwriter</h3>
                                <p className="mt-4 text-sm leading-6 text-[#66705f]">Uma proposta de escrita assistida a partir das ideias do autor, com pesquisa e revisão. Escopo, fornecedores e condições de atendimento ainda estão em definição.</p>
                            </article>
                            <article className="roadmap-card rounded-lg border border-[#deddd1] bg-[#fdfcf8] p-6 sm:p-8">
                                <div className="flex items-center justify-between gap-4"><Headphones aria-hidden="true" size={23} strokeWidth={1.4} className="text-[#927640]" /><span className="planned-label">Planejado</span></div>
                                <p className="mt-7 text-[11px] tracking-[0.12em] text-[#66705f] uppercase">Audiolivros</p>
                                <h3 className="mt-2 font-serif text-3xl text-[#27352e]">Audio Studio</h3>
                                <p className="mt-4 text-sm leading-6 text-[#66705f]">Uma proposta de produção de audiolivros, com vozes licenciadas e possibilidade de clonagem autorizada. As ferramentas de áudio ainda não estão disponíveis.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="faq" aria-labelledby="titulo-faq" className="section-space border-y border-[#e5e0d5] bg-[#fdfcf8]">
                    <div className="site-container grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div className="max-w-md lg:sticky lg:top-28">
                            <p className="eyebrow">Antes de começar</p>
                            <h2 id="titulo-faq" className="section-title mt-5">Uma boa história<br />começa com clareza.</h2>
                            <p className="mt-5 text-sm leading-7 text-[#66705f]">Tire suas dúvidas sobre o produto, os formatos e o que estamos preparando.</p>
                            <a href="#etapas" className="text-link mt-5">Conhecer na demonstração <ArrowUpRight aria-hidden="true" size={15} /></a>
                        </div>
                        <div className="divide-y divide-[#deded3] border-y border-[#deded3]">
                            {questions.map((item) => (
                                <details key={item.question} className="faq-item group py-1">
                                    <summary className="flex min-h-17 cursor-pointer list-none items-center justify-between gap-5 py-4 text-[15px] leading-6 font-medium text-[#354237] hover:text-[#88682f] [&::-webkit-details-marker]:hidden">
                                        {item.question}
                                        <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#d9d9cc] font-sans text-lg font-normal text-[#927640] group-open:hidden">+</span>
                                        <span aria-hidden="true" className="hidden size-7 shrink-0 items-center justify-center rounded-full border border-[#d9d9cc] font-sans text-lg font-normal text-[#927640] group-open:inline-flex">−</span>
                                    </summary>
                                    <p className="max-w-xl pb-6 pr-5 text-sm leading-7 text-[#626b5d]">{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="lancamento" aria-labelledby="titulo-lancamento" className="section-space">
                    <div className="site-container">
                        <div className="launch-panel grid gap-9 rounded-xl border border-[#dcd6c4] p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:p-12">
                            <div>
                                <p className="eyebrow">Um novo capítulo está sendo preparado</p>
                                <h2 id="titulo-lancamento" className="section-title mt-5">Sua história merece<br />esse próximo passo.</h2>
                                <p className="mt-5 max-w-lg text-sm leading-7 text-[#626b5d]">Estamos preparando o Diagramador IA. Antes da abertura para contratação, a oferta apresentará as entregas disponíveis, as condições de acesso e os valores.</p>
                                <a href={waitlistUrl ?? "#faq"} className={`${primaryLink} mt-7`}>{waitlistUrl ? "Quero acompanhar o lançamento" : "Consultar as dúvidas"} <ArrowUpRight aria-hidden="true" size={16} /></a>
                            </div>
                            <div className="launch-status rounded-lg border border-white/70 bg-[#fbf9f2]/70 p-6 sm:p-7">
                                <p className="status-label"><span aria-hidden="true" className="status-dot" /> Em desenvolvimento</p>
                                <dl className="mt-5 divide-y divide-[#ded9cb] text-sm">
                                    <div className="flex flex-wrap justify-between gap-2 py-4"><dt className="text-[#626b5d]">Primeiro produto</dt><dd className="font-medium text-[#3e4b3e]">Diagramador IA</dd></div>
                                    <div className="flex flex-wrap justify-between gap-2 py-4"><dt className="text-[#626b5d]">Data de lançamento</dt><dd className="font-medium text-[#3e4b3e]">Em definição</dd></div>
                                    <div className="flex flex-wrap justify-between gap-2 py-4"><dt className="text-[#626b5d]">Preços e limites</dt><dd className="font-medium text-[#3e4b3e]">Em definição</dd></div>
                                </dl>
                                <p className="mt-4 text-xs leading-6 text-[#626b5d]">{waitlistUrl ? "Acompanhe o lançamento pelo formulário de interesse. O cadastro e as condições de envio de avisos serão apresentados nesse formulário." : "Ainda não há inscrições ou lista de interesse abertas nesta página."}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-[#dedacf] py-7 text-xs text-[#626b5d]">
                <div className="site-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p><span className="mr-3 font-serif text-lg tracking-tight text-[#43503f]">Página Zero.</span> © {new Date().getFullYear()}</p>
                    <div className="flex items-center justify-between gap-6 sm:justify-start"><span>Do manuscrito ao próximo capítulo.</span><a href="#inicio" className="inline-flex min-h-10 items-center gap-2 text-[#55614f]">Voltar ao início <ArrowUpRight aria-hidden="true" size={13} /></a></div>
                </div>
                <div className="site-container mt-5">
                    <p className="max-w-3xl border-t border-[#dedacf] pt-5 text-sm leading-6">O cliente é o autor e o responsável pelo conteúdo do livro. Feito com o auxílio de inteligência artificial.</p>
                </div>
            </footer>
        </div>
    );
}
