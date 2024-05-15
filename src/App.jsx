
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './components/Image';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  async function openModal() {
    if (resumeModalOpen == true) {

      //allows me to reopen resume after closing,without await, the button needs to be clicked twice
      await setResumeModalOpen(false);
      await setResumeModalOpen(true)


    }
    else {
      setResumeModalOpen(true)
    }
  }
  return (
    <>
      <div className='outer-container'>
        <div className='container'>
          <article>

            <div className='outer-grid'>
              {/* outergrid forms a gap between grids */}
              <div className='grid'>
                {/* grid div for basic structure */}
                <div className='col'>
                  {/* col has 50% width so there are two columns of information */}

                  <Image />
                  <h1 className='name'>Eric Thang</h1>

                  <div className='description'>
                    <p>
                      Hello, I'm Eric. I am currently a student at California State University Fullerton.🐘 I am also majoring in computer science.
                    </p>
                  </div>

                </div>
                {/* other col for links, github profile and resume */}
                <div className='col'>
                  <div className='card'>
                    <h3>Links</h3>
                    <form action="https://github.com/EricThang" target='_blank'>
                      <input type="submit" value="GitHub🧑‍💻" />
                    </form>
                    <br />
                    {/* uses modal to display resume */}
                    <button className='btn' onClick={() => { openModal(); console.log(resumeModalOpen) }}>Resume📄</button>

                  </div>
                </div>








              </div>
              {/* Food App section */}
              <div className='grid'>

                <div className='col'>
                  <h2>Project 1,Food App:</h2>
                  <div><p>An app that allows you to search for food and get a list of related food item. When a food item is selected, the app will give you details, such as ingredients and recipes.</p></div>
                  <br />
                </div>
                <div className='col'>
                  <div className='card'>

                    <h3>🍈Food App🍇</h3>
                    <form action="https://github.com/EricThang/ReactFoodApp" target='_blank'>
                      <input type="submit" value="Project 1" />
                    </form>
                  </div>
                </div>

              </div>

              {/* tictactoe project */}
              <div className='grid'>

                <div className='col'>
                  <h2>Project 2,Tic-Tac-Toe:</h2>
                  <div><p>
                    A project that is a Tic Tac Toe project that is made by using React JS elements. There can be two players and each move is recorded so that the user(s) can go back to a certain move.
                  </p></div>
                </div>

                <div className='col'>
                  <div className='card'>
                    <h3>❌Tic-Tac-Toe⭕</h3>
                    <form action="https://github.com/EricThang/TicTacToe" target='_blank'>
                      <input type="submit" value="Project 2" />
                    </form>

                  </div>


                </div>

              </div>
            </div>
          </article>
        </div>
        {/* contact information at bottom */}
        <br />
        <div className='grid'><footer>
          <h2>📞Contact me here:</h2>
          <div className='col'>
            <p className='contact'>eric.thang315@csu.fullerton.edu,
              626-545-9275</p>

          </div>

        </footer>
        </div>
      </div>
      {/* by default false, true upon button press, shows resume */}
      <Resume isOpen={resumeModalOpen} />

    </>
  )
}

export default App
