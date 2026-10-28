import { ImageResponse } from "next/og";

export const alt = "Página Zero — Seu manuscrito preparado para virar livro. Diagramador IA em desenvolvimento.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", gap: 60, padding: 64, background: "#faf9f6", color: "#0f172a", borderBottom: "8px solid #927639" }}>
            <div style={{ display: "flex", flexDirection: "column", width: 720 }}>
                <div style={{ display: "flex", fontSize: 26, letterSpacing: 3 }}>PÁGINA <span style={{ color: "#927639", marginLeft: 10 }}>ZERO</span></div>
                <div style={{ display: "flex", fontSize: 64, lineHeight: 1.12, marginTop: 34 }}>Seu manuscrito preparado para virar livro.</div>
                <div style={{ display: "flex", fontSize: 23, lineHeight: 1.5, color: "#475569", marginTop: 24 }}>Revisão, diagramação, capa e arquivos para publicação.</div>
                <div style={{ display: "flex", fontSize: 17, color: "#78350f", letterSpacing: 2, marginTop: 30 }}>DIAGRAMADOR IA · EM DESENVOLVIMENTO</div>
            </div>
            <div style={{ display: "flex", width: 240, height: 340, flexShrink: 0, flexDirection: "column", justifyContent: "space-between", padding: 28, background: "#0f172a", color: "#faf9f6", borderLeft: "10px solid #927639", boxShadow: "14px 14px 0 #e2dfd6" }}>
                <div style={{ display: "flex", fontSize: 17, color: "#d0b679", letterSpacing: 3 }}>PÁGINA ZERO</div>
                <div style={{ display: "flex", fontSize: 34, lineHeight: 1.2 }}>Do texto ao livro.</div>
                <div style={{ display: "flex", height: 2, width: 64, background: "#d0b679" }} />
            </div>
        </div>,
        size,
    );
}
