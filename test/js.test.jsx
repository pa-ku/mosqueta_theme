import React from 'react'

export async function testTheme() {
  function handleTest() {
    console.log('Mosqueta')
  }

  return (
    <div>
      <h1
        style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
      >
        Hello, World!
      </h1>
      <button
        style={{
          backgroundColor: theme.buttonColor,
          color: theme.color,
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Button
      </button>
    </div>
  )
}
