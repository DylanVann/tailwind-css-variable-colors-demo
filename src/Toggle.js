import React from 'react'
import { usePerfectDarkMode } from 'react-perfect-dark-mode'

export const Toggle = () => {
  const { mode, updateMode } = usePerfectDarkMode()
  return (
    <button
      class="bg-background border-accent text-accent border-4 rounded px-3 py-2 capitalize focus:outline-none focus:ring ring-accent ring-opacity-50"
      style={{ visibility: mode !== undefined ? 'visible' : 'hidden' }}
      onClick={() =>
        updateMode(
          (mode, modes, modeIndex) => modes[(modeIndex + 1) % modes.length],
        )
      }
    >
      {mode}
    </button>
  )
}
