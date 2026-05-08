import './App.css'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.jpg'
import Course from './Course'


function App() {

  return (
    <div className="course-container">
 
   
      <Course  img={html} name="HTML" price="299" rating="5"/>
         <Course img={css} name="CSS" price="399"  rating="5"/>
          <Course img={js} name="JS" price="499"  rating="5"/>

      </div>
  )
}

export default App
