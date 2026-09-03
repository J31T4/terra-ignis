import React from 'react';

/**
 * LogoImg — heraldický štít Terra Ignis (PNG s alpha, 732×720, hotový asset).
 * Transparentní pozadí → žádné mix-blend-mode triky, jen čistý drop-shadow.
 * Štít je vizuálně vyšší než široký → renderujeme přes výšku (size) a
 * šířku necháme auto (object-contain), aby se nikdy neroztáhl.
 */

const SRC = `${import.meta.env.BASE_URL}assets/logo-shield.png`;

interface LogoImgProps {
  /** px výška renderovaného loga; šířka auto dle poměru assetu */
  size?: number;
  className?: string;
  /** volitelné id pro animace cílené na konkrétní instanci */
  id?: string;
}

export const LogoImg: React.FC<LogoImgProps> = ({ size = 48, className = '', id }) => {
  return (
    <img
      src={SRC}
      alt="Logo Terra Ignis — heraldický štít s rukou a třemi plameny"
      id={id}
      width={Math.round(size * (732 / 720))}
      height={size}
      className={`block ${className}`}
      style={{
        height: size,
        width: 'auto',
        objectFit: 'contain',
        filter: 'drop-shadow(0 2px 5px rgba(17, 17, 17, 0.25))',
      }}
    />
  );
};
