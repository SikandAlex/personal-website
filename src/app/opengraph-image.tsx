import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const alt = DATA.name;
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

const getFontData = async () => {
    try {
        const [cabinetGrotesk, clashDisplay] = await Promise.all([
            fetch(
                new URL("../../public/fonts/CabinetGrotesk-Medium.ttf", import.meta.url)
            ).then((res) => res.arrayBuffer()),
            fetch(
                new URL("../../public/fonts/ClashDisplay-Semibold.ttf", import.meta.url)
            ).then((res) => res.arrayBuffer()),
        ]);
        return { cabinetGrotesk, clashDisplay };
    } catch (error) {
        console.error("Failed to load fonts:", error);
        return null;
    }
};

const COLORS = {
    bg: "#0b0b0d",
    fg: "#fafafa",
    muted: "#a1a1aa",
    subtle: "#71717a",
    border: "#27272a",
    linkedin: "#0A66C2",
};

const styles = {
    canvas: {
        height: "100%",
        width: "100%",
        display: "flex",
        backgroundColor: COLORS.bg,
        backgroundImage:
            "radial-gradient(circle at 100% 0%, rgba(10, 102, 194, 0.22), transparent 55%), radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.04), transparent 60%)",
        position: "relative",
        padding: "72px 80px",
        fontFamily: "Cabinet Grotesk",
    },
    inner: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
    },
    left: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "24px",
        flex: 1,
    },
    accent: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: COLORS.linkedin,
        fontSize: "22px",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
    },
    accentDot: {
        width: "10px",
        height: "10px",
        borderRadius: "9999px",
        backgroundColor: COLORS.linkedin,
        boxShadow: "0 0 16px rgba(10, 102, 194, 0.8)",
    },
    name: {
        fontFamily: "Clash Display",
        fontSize: "108px",
        fontWeight: 600,
        lineHeight: 1,
        color: COLORS.fg,
        letterSpacing: "-0.04em",
    },
    description: {
        fontSize: "40px",
        fontWeight: 400,
        lineHeight: 1.2,
        color: COLORS.muted,
        marginTop: "4px",
    },
    locationRow: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: COLORS.muted,
        fontSize: "26px",
        marginTop: "8px",
    },
    avatar: {
        width: "300px",
        height: "300px",
        borderRadius: "9999px",
        border: `4px solid ${COLORS.border}`,
        objectFit: "cover",
    },
    footer: {
        position: "absolute",
        left: "80px",
        right: "80px",
        bottom: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: COLORS.subtle,
        fontSize: "22px",
    },
    footerLeft: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: COLORS.muted,
    },
} as const;

function MapPinIcon() {
    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

export default async function Image() {
    try {
        const fontData = await getFontData();
        const imageUrl = DATA.avatarUrl
            ? new URL(DATA.avatarUrl, DATA.url).toString()
            : undefined;

        return new ImageResponse(
            (
                <div style={styles.canvas}>
                    <div style={styles.inner}>
                        <div style={styles.left}>
                            <div style={styles.accent}>
                                <div style={styles.accentDot} />
                                <span>{DATA.description}</span>
                            </div>
                            <div style={styles.name}>{DATA.name}</div>
                            <div style={styles.description}>{`${DATA.summary.split(".")[0]}.`}</div>
                            <div style={styles.locationRow}>
                                <MapPinIcon />
                                <span>{DATA.location}</span>
                            </div>
                        </div>
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt={DATA.name}
                                style={styles.avatar}
                            />
                        )}
                    </div>
                    <div style={styles.footer}>
                        <div style={styles.footerLeft}>
                            <LinkedInIcon />
                            <span>linkedin.com/in/alexsikand</span>
                        </div>
                        <span>alexsikand.com</span>
                    </div>
                </div>
            ),
            {
                ...size,
                fonts: fontData
                    ? [
                        {
                            name: "Cabinet Grotesk",
                            data: fontData.cabinetGrotesk,
                            weight: 400,
                            style: "normal",
                        },
                        {
                            name: "Cabinet Grotesk",
                            data: fontData.cabinetGrotesk,
                            weight: 500,
                            style: "normal",
                        },
                        {
                            name: "Clash Display",
                            data: fontData.clashDisplay,
                            weight: 600,
                            style: "normal",
                        },
                    ]
                    : undefined,
            }
        );
    } catch (error) {
        console.error("Error generating OpenGraph image:", error);
        return new Response(
            `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
            {
                status: 500,
            }
        );
    }
}
