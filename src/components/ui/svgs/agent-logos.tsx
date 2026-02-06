// Agent browser logos

export const OpenClawLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lobster claw - simplified */}
        <circle cx="50" cy="50" r="45" fill="#ef4444"/>
        <path d="M30 40 C25 35, 25 55, 35 55 L45 50 L35 45 C30 43, 30 42, 30 40Z" fill="white" opacity="0.9"/>
        <path d="M70 40 C75 35, 75 55, 65 55 L55 50 L65 45 C70 43, 70 42, 70 40Z" fill="white" opacity="0.9"/>
        <circle cx="40" cy="35" r="5" fill="white"/>
        <circle cx="60" cy="35" r="5" fill="white"/>
        <circle cx="40" cy="35" r="2" fill="#ef4444"/>
        <circle cx="60" cy="35" r="2" fill="#ef4444"/>
    </svg>
)

export const AtlasLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ChatGPT Atlas - shield with sparkle */}
        <rect x="15" y="10" width="70" height="80" rx="12" fill="#10a37f"/>
        <path d="M50 25 L55 40 L70 42 L58 52 L62 68 L50 58 L38 68 L42 52 L30 42 L45 40 Z" fill="white"/>
    </svg>
)

export const CometLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Perplexity Comet */}
        <circle cx="65" cy="35" r="25" fill="#20808d"/>
        <ellipse cx="40" cy="60" rx="30" ry="10" fill="#20808d" opacity="0.6" transform="rotate(-45 40 60)"/>
        <ellipse cx="30" cy="70" rx="20" ry="6" fill="#20808d" opacity="0.3" transform="rotate(-45 30 70)"/>
        <circle cx="65" cy="35" r="12" fill="white" opacity="0.3"/>
    </svg>
)

export const BrowserUseLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Browser window with checkmark */}
        <rect x="10" y="15" width="80" height="70" rx="8" fill="#1a1a1a"/>
        <rect x="10" y="15" width="80" height="16" rx="8" fill="#333"/>
        <circle cx="24" cy="23" r="4" fill="#ef4444"/>
        <circle cx="36" cy="23" r="4" fill="#fbbf24"/>
        <circle cx="48" cy="23" r="4" fill="#22c55e"/>
        <path d="M35 55 L45 65 L70 40" stroke="#f97316" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export const ManusBrowserLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Hand/Manus icon */}
        <circle cx="50" cy="50" r="45" fill="#8b5cf6"/>
        <path d="M35 60 L35 40 C35 37, 38 35, 40 35 C42 35, 45 37, 45 40 L45 50 L45 35 C45 32, 48 30, 50 30 C52 30, 55 32, 55 35 L55 50 L55 38 C55 35, 58 33, 60 33 C62 33, 65 35, 65 38 L65 55 L65 45 C65 42, 67 40, 69 40 C71 40, 73 42, 73 45 L73 60 C73 72, 63 80, 50 80 C37 80, 30 72, 30 65 L30 55 C30 52, 32 50, 35 50 C37 50, 35 52, 35 55 Z" fill="white"/>
    </svg>
)

export const DiaLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Diamond shape for Dia */}
        <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="#6366f1"/>
        <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="white" opacity="0.3"/>
        <circle cx="50" cy="50" r="12" fill="white"/>
    </svg>
)
