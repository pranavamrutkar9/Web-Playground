import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1760640030206-27e2fdceb052?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, cupiditate voluptates nihil dolorem atque aspernatur?',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1753617951778-c9b47d9a07ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, cupiditate voluptates nihil dolorem atque aspernatur?',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1760402994280-97859caf0e54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, cupiditate voluptates nihil dolorem atque aspernatur?',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1760402994280-97859caf0e54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, cupiditate voluptates nihil dolorem atque aspernatur?',
      tag: 'Underbanked'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
