
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './components/Image';
import Resume from './components/Resume';

function App() {

  return (
    <>
      <div className='outer-container'>
        <div className='container'>
          <article>
            {/* col has 50% width so there are two columns of information */}
            <div className='grid'>

              <div className='left-col'>

                <div className='col'>
                  <h1 className='name'>Eric Thang</h1>
                  <a href="https://github.com/EricThang" target='_blank'>GitHub</a>
                  <div className='description'><p>Hello, I'm Eric. I am currently a student at California State University Fullerton. I am also majoring in computer science.</p></div>
                </div>
                <div className='col'><Image />
                </div>
                <br />


                <div>

                  <Resume />
                </div>
                <div className='left-col'>
                  <h1>Project 1</h1>
                  <div className='col'>
                    <div><p>An app that allows you to search for food and get a list of related food item. When a food item is selected, the app will give you details, such as ingredients and recipes.</p></div>
                    <br />
                  </div>
                  <div className='col'>    <br />
                    <a href="https://github.com/EricThang/ReactFoodApp" target='_blank' >Link to project 1</a>
                  </div>

                </div>
                <br />

                <div className='left-col'>
                  <h1>Project 2</h1>
                  <div className='col'>
                    <div><p>
                      A project that is a Tic Tac Toe project that is made by using React JS elements. There can be two players and each move is recorded so that the user(s) can go back to a certain move.
                    </p></div>
                  </div>
                  <div className='col'><br />
                    <a href="https://github.com/EricThang/TicTacToe" target='_blank' >Link to project 2</a>
                  </div>

                </div>




              </div>

            </div>
          </article>
        </div>
        {/* contact information at bottom */}
        <footer>
          <h2>Contact me here:</h2>
          <div className='col'>
            <p className='contact'>eric.thang315@csu.fullerton.edu
              <br />
              626-545-9275</p>
          </div>
        </footer>

      </div>

    </>
  )
}

export default App
