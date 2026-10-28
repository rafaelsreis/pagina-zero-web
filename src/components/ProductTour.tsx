"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
    { title: "Edição", shortTitle: "Texto", heading: "O texto continua nas suas mãos.", description: "Compare o trecho original com uma sugestão de revisão preparada para este exemplo." },
    { title: "Diagramação", shortTitle: "Páginas", heading: "Encontre o ritmo da página.", description: "Alterne o estilo para conhecer duas apresentações do mesmo trecho fictício." },
    { title: "Capa", shortTitle: "Capa", heading: "Uma obra, uma capa completa.", description: "Veja como frente, lombada e contracapa compõem uma única arte para o livro físico." },
    { title: "Exportação", shortTitle: "Arquivos", heading: "Entenda o destino de cada arquivo.", description: "Conheça as entregas previstas para a edição digital e para a impressão." },
];

const original = "Clara voltou à casa depois de muitos anos. No quintal, encontrou o relógio que o avô guardava. Ele estava parado. Mesmo assim, ela teve a impressão de ouvir o tempo passar.";
const suggestion = "Depois de muitos anos, Clara voltou à casa. No quintal, encontrou o relógio que o avô guardava. Os ponteiros estavam imóveis; ainda assim, ela teve a impressão de ouvir o tempo passar.";
const buttonClass = "tour-button inline-flex min-h-11 items-center justify-center border px-5 py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40";

export function ProductTour() {
    const [activeStep, setActiveStep] = useState(0);
    const [finished, setFinished] = useState(false);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [pageStyle, setPageStyle] = useState("classico");
    const [coverColor, setCoverColor] = useState("noite");
    const headingRef = useRef<HTMLHeadingElement>(null);
    const shouldFocus = useRef(false);

    useEffect(() => {
        if (shouldFocus.current) {
            headingRef.current?.focus({ preventScroll: true });
            headingRef.current?.scrollIntoView({ block: "start" });
            shouldFocus.current = false;
        }
    }, [activeStep, finished]);

    function goToStep(index: number) {
        if (index === activeStep && !finished) return;
        shouldFocus.current = true;
        setActiveStep(index);
        setFinished(false);
    }

    function restart() {
        setShowSuggestion(false);
        setPageStyle("classico");
        setCoverColor("noite");
        goToStep(0);
    }

    const step = steps[activeStep];

    return (
        <section id="etapas" aria-labelledby="titulo-tour" className="section-space tour-section">
            <div className="site-container">
                <div className="mb-9 grid gap-5 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p className="eyebrow">02 / Explore a proposta</p>
                        <h2 id="titulo-tour" className="section-title mt-5">Um livro de exemplo.<br />Quatro etapas para conhecer.</h2>
                    </div>
                    <p className="max-w-md self-end text-base leading-7 text-[#626b5d]">Percorra o fluxo com uma obra fictícia. As escolhas alteram somente esta prévia, sem cadastro ou envio de manuscrito.</p>
                </div>

                <div className="tour-frame overflow-hidden">
                    <aside className="tour-aside">
                        <div className="tour-project">
                            <p className="eyebrow text-[9px]">Projeto fictício</p>
                            <div className="tour-project-cover">
                                <p className="font-serif text-[25px] leading-tight">O jardim<br className="hidden lg:block" /> das horas</p>
                                <p className="mt-3 text-[10px] opacity-80">Lia Monteiro · Autora fictícia</p>
                            </div>
                        </div>
                        <nav aria-label="Etapas do projeto demonstrativo" className="lg:mt-7">
                            <ol className="grid grid-cols-4 gap-1 lg:grid-cols-1 lg:gap-2">
                                {steps.map((item, index) => (
                                    <li key={item.title}>
                                        <button
                                            type="button"
                                            aria-label={`Etapa ${index + 1}: ${item.title}`}
                                            aria-current={!finished && index === activeStep ? "step" : undefined}
                                            aria-controls="painel-tour"
                                            onClick={() => goToStep(index)}
                                            className="tour-step-button"
                                        >
                                            <span aria-hidden="true" className="tour-step-number">0{index + 1}</span>
                                            <span className="sm:hidden">{item.shortTitle}</span>
                                            <span className="hidden sm:inline">{item.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                        <p className="mt-5 hidden px-2 text-[11px] leading-5 text-[#626b5d] lg:block">Exemplo interativo. A edição e a exportação de livros próprios continuam planejadas.</p>
                    </aside>

                <div id="painel-tour" aria-labelledby="titulo-etapa-tour" className="tour-panel min-w-0 p-5 sm:p-7 lg:p-8">
                    <p className="mb-3 text-xs font-medium tracking-widest text-slate-500 uppercase">{finished ? "Roteiro concluído" : `Etapa ${activeStep + 1} de ${steps.length}`}</p>
                    <h3 id="titulo-etapa-tour" ref={headingRef} tabIndex={-1} className="font-serif text-3xl leading-tight tracking-tight outline-none">{finished ? "Você conheceu o caminho do manuscrito ao livro." : step.heading}</h3>

                    {finished ? (
                        <div className="mt-6 space-y-6">
                            <p className="max-w-2xl leading-relaxed text-slate-600">A proposta do Diagramador IA reúne revisão, diagramação, capa completa e exportação. Seu projeto demonstrativo termina aqui; você pode explorar novamente ou continuar conhecendo o produto.</p>
                            <div className="border border-amber-900/20 bg-amber-50 p-5 sm:p-6">
                                <h4 className="font-serif text-2xl text-amber-950">Oferta em definição</h4>
                                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-amber-950">Ainda não há contratação disponível. Preço, entregas incluídas, limites e prazo de acesso serão informados antes de qualquer compra.</p>
                                <a href="#lancamento" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-amber-950 underline underline-offset-4">Ver a situação do lançamento</a>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <button type="button" onClick={restart} className={`${buttonClass} border-slate-900 bg-slate-900 text-white hover:bg-slate-800`}>Recomeçar tour</button>
                                <a href="#entregas" className={`${buttonClass} border-slate-300 text-slate-700 hover:border-slate-900`}>Continuar na página</a>
                            </div>
                        </div>
                    ) : (
                        <>
                            <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">{step.description}</p>

                            {activeStep === 0 && (
                                <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
                                    <div className="space-y-4">
                                        <p className="text-sm leading-relaxed text-slate-600">A proposta prevê importação de DOCX, TXT e Markdown. Neste exemplo, o texto já está preparado para você observar uma revisão.</p>
                                        <button type="button" aria-pressed={showSuggestion} onClick={() => setShowSuggestion(!showSuggestion)} className={`${buttonClass} w-full border-slate-300 text-slate-700 hover:border-amber-900 sm:w-auto`}>{showSuggestion ? "Ver trecho original" : "Ver sugestão de revisão"}</button>
                                        <p className="text-sm leading-relaxed text-slate-500">A sugestão é um exemplo fixo. No produto planejado, o autor poderá conferir as alterações antes de aplicá-las.</p>
                                    </div>
                                    <div aria-live="polite" className="border border-slate-200 bg-[#faf9f6] p-6 sm:p-8">
                                        <p className="text-xs font-medium tracking-widest text-amber-900 uppercase">{showSuggestion ? "Sugestão ilustrativa" : "Trecho original"}</p>
                                        <h4 className="mt-5 font-serif text-2xl">Capítulo 1 · O regresso</h4>
                                        <p className="mt-5 font-serif text-lg leading-relaxed text-slate-700">{showSuggestion ? suggestion : original}</p>
                                    </div>
                                </div>
                            )}

                            {activeStep === 1 && (
                                <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1fr_1.4fr]">
                                    <div className="space-y-5">
                                        <fieldset>
                                            <legend className="mb-3 text-sm font-medium text-slate-700">Estilo da prévia</legend>
                                            <div className="flex flex-wrap gap-3">
                                                {[{ value: "classico", label: "Clássico" }, { value: "contemporaneo", label: "Contemporâneo" }].map((style) => (
                                                    <label key={style.value} className={`flex min-h-11 cursor-pointer items-center gap-3 border px-4 py-3 text-sm ${pageStyle === style.value ? "border-amber-900 bg-amber-50" : "border-slate-300"}`}>
                                                        <input type="radio" name="estilo-pagina-tour" value={style.value} checked={pageStyle === style.value} onChange={() => setPageStyle(style.value)} className="accent-amber-900" />
                                                        {style.label}
                                                    </label>
                                                ))}
                                            </div>
                                        </fieldset>
                                        <p className="text-sm leading-relaxed text-slate-500">Prévia ilustrativa. Formato, margens e tipografia finais dependerão do perfil de impressão validado.</p>
                                    </div>
                                    <figure>
                                        <div className={`mx-auto max-w-md border border-slate-200 bg-[#fffefa] px-6 py-8 shadow-sm sm:px-10 sm:py-10 ${pageStyle === "classico" ? "font-serif" : "font-sans"}`}>
                                            <p className="text-center text-xs tracking-widest text-slate-500 uppercase">O jardim das horas</p>
                                            <h4 className={`mt-10 text-3xl ${pageStyle === "classico" ? "text-center" : "text-left"}`}>O regresso</h4>
                                            <p className={`mt-7 text-base text-slate-700 ${pageStyle === "classico" ? "leading-8" : "leading-7"}`}>{showSuggestion ? suggestion : original}</p>
                                            <p className="mt-5 text-base leading-8 text-slate-700">A luz da tarde atravessava as folhas da amoreira. Clara sentou no degrau e, por um instante, deixou que a casa lhe contasse o que havia mudado.</p>
                                            <p aria-hidden="true" className="mt-10 text-center text-xs text-slate-500">1</p>
                                        </div>
                                        <figcaption className="mt-3 text-center text-sm text-slate-500">Página fictícia · Estilo {pageStyle === "classico" ? "clássico" : "contemporâneo"}</figcaption>
                                    </figure>
                                </div>
                            )}

                            {activeStep === 2 && (
                                <div className="mt-6 space-y-6">
                                    <fieldset>
                                        <legend className="mb-3 text-sm font-medium text-slate-700">Cor da capa de exemplo</legend>
                                        <div className="flex flex-wrap gap-3">
                                            {[{ value: "noite", label: "Noite" }, { value: "oliva", label: "Oliva" }].map((color) => (
                                                <label key={color.value} className={`flex min-h-11 cursor-pointer items-center gap-3 border px-4 py-3 text-sm ${coverColor === color.value ? "border-amber-900 bg-amber-50" : "border-slate-300"}`}>
                                                    <input type="radio" name="cor-capa-tour" value={color.value} checked={coverColor === color.value} onChange={() => setCoverColor(color.value)} className="accent-amber-900" />
                                                    {color.label}
                                                </label>
                                            ))}
                                        </div>
                                    </fieldset>
                                    <figure className="mx-auto max-w-3xl">
                                        <div className="grid grid-cols-[1fr_24px_1fr] gap-px border border-slate-300 bg-slate-300 text-[#faf9f6] sm:grid-cols-[1fr_40px_1fr]" style={{ backgroundColor: coverColor === "noite" ? "#172238" : "#294339" }}>
                                            <div className="flex min-h-64 flex-col justify-between p-3 sm:min-h-80 sm:p-7">
                                                <p className="text-[10px] tracking-widest text-amber-200 uppercase sm:text-xs">Contracapa</p>
                                                <p className="my-6 font-serif text-sm leading-relaxed sm:text-lg">Em uma cidade que desaprendeu a esperar, Clara decide ouvir o tempo.</p>
                                                <p className="text-[10px] text-slate-200 sm:text-xs">Obra fictícia</p>
                                            </div>
                                            <div className="flex items-center justify-center border-x border-white/20 py-3">
                                                <p className="text-xs tracking-wide [writing-mode:vertical-rl]">Lombada · O jardim das horas</p>
                                            </div>
                                            <div className="flex min-h-64 flex-col justify-between p-3 sm:min-h-80 sm:p-7">
                                                <p className="text-[10px] tracking-widest text-amber-200 uppercase sm:text-xs">Frente</p>
                                                <h4 className="my-6 font-serif text-2xl leading-tight sm:text-4xl">O jardim <span className="text-amber-200 italic">das horas</span></h4>
                                                <p className="text-xs sm:text-sm">Lia Monteiro</p>
                                            </div>
                                        </div>
                                        <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">Arte ilustrativa, sem medidas de produção. A capa final será conferida com o miolo e o guia de medidas da UICLAP.</figcaption>
                                    </figure>
                                </div>
                            )}

                            {activeStep === 3 && (
                                <div className="mt-6 space-y-6">
                                    <ul className="grid gap-4 sm:grid-cols-3">
                                        {[
                                            { format: "EPUB", title: "Edição digital", description: "Arquivo para distribuição digital, separado do pacote físico." },
                                            { format: "PDF", title: "Miolo", description: "Páginas internas para conferência e envio manual à UICLAP." },
                                            { format: "JPG", title: "Capa completa", description: "Frente, lombada e contracapa vinculadas ao mesmo miolo." },
                                        ].map((file) => (
                                            <li key={file.format} className="border border-slate-200 bg-[#faf9f6] p-5">
                                                <p className="text-xs font-medium tracking-widest text-amber-900">{file.format} · Planejado</p>
                                                <h4 className="mt-4 font-serif text-2xl">{file.title}</h4>
                                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{file.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-sm leading-relaxed text-slate-600">O fluxo previsto permite baixar o miolo validado antes da capa, para obter o guia da UICLAP. O pacote físico completo exige miolo e capa validados. Nesta demonstração, não há arquivos para download.</p>
                                </div>
                            )}

                            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
                                <button type="button" disabled={activeStep === 0} onClick={() => goToStep(activeStep - 1)} className={`${buttonClass} border-slate-300 text-slate-700 hover:border-slate-900`}>Etapa anterior</button>
                                <button type="button" onClick={() => {
                                    if (activeStep < steps.length - 1) goToStep(activeStep + 1);
                                    else {
                                        shouldFocus.current = true;
                                        setFinished(true);
                                    }
                                }} className={`${buttonClass} border-slate-900 bg-slate-900 text-white hover:bg-slate-800`}>{activeStep < steps.length - 1 ? "Próxima etapa" : "Concluir tour"}</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            </div>
        </section>
    );
}
