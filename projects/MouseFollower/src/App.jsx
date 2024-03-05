import { useState, useEffect } from 'react'


function App() {
  //useState añade estado a los componentes
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 500 , y: 400})

  //useEffect permite realizar efectos secundarios
  // Efecto Pointer Move
  useEffect(() => {
    console.log('effect ', {enabled})

    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})  

      setPosition({x:clientX, y:clientY})
    }
    // Si enabled es true mueve el puntero
    if(enabled){
      window.addEventListener('pointermove', handleMove )          
    }
    return() =>{
      window.removeEventListener('pointermove', handleMove )
    }
  }, [enabled])


  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return() => {
      document.body.classList.remove('no-cursor')
    }

  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        background: 'rgb(63,94,251)',
        background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 100,
        height: 100,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
    

    <button onClick={() => setEnabled(!enabled)}> 
      {enabled ? 'Desactivar' : 'Activar'} puntero
    </button>
    </main>
    

  )
}

export default App
