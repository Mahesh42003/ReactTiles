import {Component} from 'react'
import {Link}  from 'react-router-dom'
import localStorage from 'local-storage'
import './index.css'

class Home extends Component{

    typingNameFunction=(event) => {
        localStorage.set("Name",event.target.value)
    } 

    render(){
        return(
            <div>
                <h1 className='styling-of-react-tiles-heading'>React Tiles</h1>
                <div className='creating-a-box'>
                    <h1 className='enter-your-name'>Enter Your Name</h1> 
                    <input type="text" className='width-of-name' onChange={this.typingNameFunction} required/>
                    <Link to="/board-game"> 
                    <button className='styling-for-play-button'>Play</button>
                    </Link>
                </div>
            </div>
        )
    }
} 
export default Home