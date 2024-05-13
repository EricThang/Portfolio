
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './components/Image';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <>
      <div className='outer-container'>
        <div className='container'>
          <article>
            {/* col has 50% width so there are two columns of information */}
            <div className='grid'>

              <div className='left-col'>

                <div className='col'>
                  <Image />

                  <h1 className='name'>Eric Thang</h1>

                  <div className='description'>
                    <p>
                      Hello, I'm Eric. I am currently a student at California State University Fullerton.🐘 I am also majoring in computer science.
                    </p>
                  </div>

                </div>
                <div className='col'>
                  <div className='card'>
                    <h3>Links</h3>
                    <form action="https://github.com/EricThang" target='_blank'>
                      <input type="submit" value="GitHub" />
                    </form>
                    <br />
                    <button className='btn' onClick={() => setResumeModalOpen(true)}>Resume</button>
                  </div>
                </div>








              </div>
              {/* Food App section */}
              <div className='left-col'>

                <div className='col'>
                  <h2>Project 1:</h2>
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
              <div className='left-col'>

                <div className='col'>
                  <h2>Project 2:</h2>
                  <div><p>
                    A project that is a Tic Tac Toe project that is made by using React JS elements. There can be two players and each move is recorded so that the user(s) can go back to a certain move.
                  </p></div>
                </div>

                <div className='col'>
                  <div className='card'>
                    <h3>Tic-Tac-Toe</h3>
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
        <div className='left-col'><footer>
          <h2>Contact me here:</h2>
          <div className='col'>
            <p className='contact'>eric.thang315@csu.fullerton.edu,
              626-545-9275</p>

          </div>

        </footer>
        </div>
      </div>

      <Resume isOpen={resumeModalOpen} />

    </>
  )
}

export default App
