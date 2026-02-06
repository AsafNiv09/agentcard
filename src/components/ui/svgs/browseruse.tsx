export const BrowserUse = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <circle cx="6.5" cy="6" r="0.5" fill="currentColor"/>
        <circle cx="9" cy="6" r="0.5" fill="currentColor"/>
        <circle cx="11.5" cy="6" r="0.5" fill="currentColor"/>
        <path d="M8 15l2 2 4-4"/>
    </svg>
)
