import React from 'react'

export default function Logo({textColor="black"}) {
  return (
      <div className="logo-wrapper flex items-center gap-2">
          <img className="logo-icon" src="/logos/Web/SVG/icon-only-logo.svg" alt="Cortex AI Tech Icon" />
          <img className="logo-img mt-3" src={`/logos/Web/SVG/text-only-logo-full-${textColor}.svg`} alt="Cortex AI Tech Logo" />
      </div>
  )
}
