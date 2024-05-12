import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='outer-container'>
        <div className='container'>
          <article>
            <header><h1>name</h1></header>
            <div className='grid'>

              <div className='left-col'>
                <div className='imgContainer'>     <img src="https://placehold.co/400" alt="" />    </div>

                <p>Lorem ipsum dolor sit.</p>

              </div>

              <div>
                <h2>links</h2>
                <div className='button-stack'>
                  <a href="https://github.com/EricThang" rel='noopener' target='_blank' role='button'>GitHub</a>
                  <button onClick={() => setOpen(true)}>Resume</button>

                </div>
              </div>


            </div>
            <footer><h2>test</h2></footer>
          </article>
        </div>

      </div>
      <dialog open={open}>
        <article>
          <header>
            <button aria-label='Close' rel='prev' onClick={() => setOpen(false)}></button>

            <h1>Hello</h1>

          </header>
          test
        </article >

      </dialog >

    </>
  )
}

export default App
