import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/index.js'
import Board from './components/Board/index.js'

const App=() => (
  <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Home/>}/> 
       <Route exact path="/board-game" element={<Board/>}/>
     </Routes>
  </BrowserRouter>
) 
export default App