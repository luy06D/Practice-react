// Importamos los estilos de App.css
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

// Array de users que vamos a renderizar
const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: true
    }

]
// Exportamos el componente App para el main.jsx
export function App(){
    return (
        <section className='App'>
            {
                users.map(user =>{
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                        key={userName}   
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                        ></TwitterFollowCard>
                    )
                })
            }

        </section>
       
        
     
    )
}
