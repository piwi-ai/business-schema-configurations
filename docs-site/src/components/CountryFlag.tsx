/**
 * Renders a country flag as an SVG image using flagcdn.com.
 * Works on all platforms (including Windows, which doesn't render emoji flags).
 */
export default function CountryFlag({
    code,
    size = 20,
    className,
}: {
    code: string;
    size?: number;
    className?: string;
}) {
    const upper = code.toUpperCase();
    return (
        <img
            src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
            alt={upper}
            width={size}
            height={Math.round(size * 0.75)}
            className={className}
            style={{ display: 'inline-block', verticalAlign: 'middle', borderRadius: 2 }}
            loading="lazy"
        />
    );
}
