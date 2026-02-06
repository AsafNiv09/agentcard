import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <LogoIcon className="size-7" />
            <span className="text-foreground font-semibold text-lg">AgentCard</span>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7', className)}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Card shape with rounded corners */}
            <rect
                x="10"
                y="20"
                width="80"
                height="60"
                rx="8"
                fill="currentColor"
            />
            {/* Chip */}
            <rect
                x="20"
                y="35"
                width="20"
                height="15"
                rx="2"
                fill="white"
                opacity="0.3"
            />
            {/* Lines on chip */}
            <line x1="25" y1="39" x2="35" y2="39" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            <line x1="25" y1="43" x2="35" y2="43" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            <line x1="25" y1="47" x2="35" y2="47" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            {/* AI circle indicator */}
            <circle
                cx="70"
                cy="42"
                r="12"
                fill="white"
                opacity="0.2"
            />
            {/* AI sparkle */}
            <path
                d="M70 35L71.5 39.5L76 41L71.5 42.5L70 47L68.5 42.5L64 41L68.5 39.5L70 35Z"
                fill="white"
                opacity="0.9"
            />
            {/* Card number dots */}
            <circle cx="25" cy="60" r="2" fill="white" opacity="0.4" />
            <circle cx="32" cy="60" r="2" fill="white" opacity="0.4" />
            <circle cx="39" cy="60" r="2" fill="white" opacity="0.4" />
            <circle cx="46" cy="60" r="2" fill="white" opacity="0.4" />
            <circle cx="57" cy="60" r="2" fill="white" opacity="0.4" />
            <circle cx="64" cy="60" r="2" fill="white" opacity="0.4" />
            <circle cx="71" cy="60" r="2" fill="white" opacity="0.4" />
            <circle cx="78" cy="60" r="2" fill="white" opacity="0.4" />
        </svg>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7', className)}
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                x="10"
                y="20"
                width="80"
                height="60"
                rx="8"
            />
            <rect
                x="20"
                y="35"
                width="20"
                height="15"
                rx="2"
            />
            <circle cx="70" cy="42" r="10" />
            <path d="M70 36L70 48M64 42L76 42" strokeWidth="2" />
        </svg>
    )
}
