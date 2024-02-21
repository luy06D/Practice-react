import { useState, useEffect } from 'react'


function App() {
  //useState añade estado a los componentes
  const [enabled, setEnabled] = useState(false)

  //useEffect permite realizar efectos secundarios
  useEffect(() => {
    console.log("Prueba xd")
  })

  

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: 'translate(0px, 0px)'
      }}
      />
    

    <button onClick={() => setEnabled(!enabled)}> 
      {enabled ? 'Desactivar' : 'Activar'} puntero
    </button>
    </main>
    

  )
}

export default App
