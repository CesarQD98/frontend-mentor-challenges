import './App.css'
import CriteriaItem from './components/CriteriaItem'

function App() {
  return (
    <article className='card'>
      <main>
        <h1>Your Result</h1>
        <div className='score-info'>
          <span>76</span>
          <p>of 100</p>
        </div>
        <div className='card-description'>
          <h1>Great</h1>
          <p>You scored higher that 65% of the people who have taken these tests</p>
        </div>
      </main>

      <aside>
        <h1>Summary</h1>
        <div className='criteria-info'>
          <CriteriaItem />
          <CriteriaItem />
          <CriteriaItem />
          <CriteriaItem />
        </div>
        <button>Continue</button>
      </aside>
    </article>
  )
}

export default App
