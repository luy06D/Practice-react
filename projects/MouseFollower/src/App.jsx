import { useState, useEffect } from 'react'


function App() {
  //useState añade estado a los componentes
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0 , y: 0})

  //useEffect permite realizar efectos secundarios
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
