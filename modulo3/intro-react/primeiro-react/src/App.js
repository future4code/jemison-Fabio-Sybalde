import foto from './imagens/IMG-20220303-WA0012200x200.jpg'
import './App.css';

function App() {
  const clicou =()=>{
   alert('Boa Noite!')
  }

  return (
    <div className='conteudo-geral'>
      <h1 className='CG-titulo'>Olá, eu sou Fábio!</h1>
      <img className='CG-foto' src={foto}/>
      <p className='CG-paragrafo'>Este é meu primeiro projeto em React</p>
      <button onClick={clicou} className='CG-botao'>Aperte este botão</button>
    </div>
  )
}

export default App;
