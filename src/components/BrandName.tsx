import React from "react";

interface BrandNameProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * BrandName component - automatically applies Orbitron font to "Simulated Creativity"
 * Use this component anywhere you want the brand name to appear with consistent styling
 */
export default function BrandName({ className = "", children }: BrandNameProps) {
    return (
        <span className={`font-orbitron tracking-wide ${className}`}>
            {children || "Simulated Creativity"}
        </span>
    );
}
