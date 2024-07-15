import { Component } from "react"; 
import localStorage from 'local-storage'
import { FaHandsClapping } from "react-icons/fa6";
import EachBox from '../EachBox/index.js'
import './index.css'

const emojiImages=[{
    id:1,
    imageUrl:"https://imgix.bustle.com/uploads/image/2022/5/11/5c57075a-8d1d-414c-a620-2a2805a4be13-screen-shot-2022-05-11-at-120537-pm.png?w=250&h=250&fit=crop&crop=focalpoint&q=50&fp-x=0.4933&fp-y=0.504&dpr=2",
    Name:"Love",
    checking:false
},
{
    id:2,
    imageUrl:"https://imgix.bustle.com/uploads/image/2022/5/11/5c57075a-8d1d-414c-a620-2a2805a4be13-screen-shot-2022-05-11-at-120537-pm.png?w=250&h=250&fit=crop&crop=focalpoint&q=50&fp-x=0.4933&fp-y=0.504&dpr=2",
    Name:"Love",
    checking:false
},
{
    id:3,
    imageUrl:"https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Happy_large.png?v=1571606093",
    Name:"Happy",
    checking:false
},
{
    id:4,
    imageUrl:"https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Happy_large.png?v=1571606093",
    Name:"Happy",
    checking:false
},
{
    id:5,
    imageUrl:"https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_1280.png",
    Name:"Smile",
    checking:false,
},
{
    id:6,
    imageUrl:"https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_1280.png",
    Name:"Smile",
    checking:false
},
{
    id:7,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIRLCk-PUkImO0pK6u89AsRrKc27OYlaERw&usqp=CAU",
    Name:"Sleep Mode",
    checking:false
},
{
    id:8,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIRLCk-PUkImO0pK6u89AsRrKc27OYlaERw&usqp=CAU",
    Name:"Sleep Mode",
    checking:false
},
{
    id:9,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIM_o6mJM4oGqV3msicD0z0vic2W8eNATKGA&usqp=CAU",
    Name:"Tired",
    checking:false
},
{
    id:10,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIM_o6mJM4oGqV3msicD0z0vic2W8eNATKGA&usqp=CAU",
    Name:"Tired",
    checking:false
},
{
    id:11,
    imageUrl:"https://i.pinimg.com/originals/2f/30/c1/2f30c101cb1a539368593b604b6916ea.png",
    Name:"Crush",
    checking:false
},
{
    id:12,
    imageUrl:"https://i.pinimg.com/originals/2f/30/c1/2f30c101cb1a539368593b604b6916ea.png",
    Name:"Crush",
    checking:false
},
{
    id:13,
    imageUrl:"https://p7.hiclipart.com/preview/1005/925/226/emoji-crush-sticker-social-media-pile-of-poo-emoji-emoji-thumbnail.jpg",
    Name:"Grinny Face",
    checking:false
},
{
    id:14,
    imageUrl:"https://p7.hiclipart.com/preview/1005/925/226/emoji-crush-sticker-social-media-pile-of-poo-emoji-emoji-thumbnail.jpg",
    Name:"Grinny Face",
    checking:false
},
{
    id:15,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFglkH7ug2gbyFZAGqZ_ha6a8jxKjCCCZwCsYKgip4UGpdLpqOBBRI_TxFgyuD0WWz3Zo&usqp=CAU",
    Name:"Blushing Face",
    checking:false
},
{
    id:16,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFglkH7ug2gbyFZAGqZ_ha6a8jxKjCCCZwCsYKgip4UGpdLpqOBBRI_TxFgyuD0WWz3Zo&usqp=CAU",
    Name:"Blushing Face",
    checking:false
},
{
    id:17,
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqBcbanbIKTp7RbMLkcj6xX4MkNIY4jpple29xixd42UPwnFiIogNR-1mXVs2ZOQ2ck4&usqp=CAU',
    Name:"Angry",
    checking:false
},
{
    id:18,
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqBcbanbIKTp7RbMLkcj6xX4MkNIY4jpple29xixd42UPwnFiIogNR-1mXVs2ZOQ2ck4&usqp=CAU',
    Name:"Angry",
    checking:false
},
{
    id:19,
    imageUrl:"https://static01.nyt.com/images/2021/09/30/fashion/29melting-face-emoji/29melting-face-emoji-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    Name:"Drippy",
    checking:false
},
{
    
        id:20,
        imageUrl:"https://static01.nyt.com/images/2021/09/30/fashion/29melting-face-emoji/29melting-face-emoji-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        Name:"Drippy",
        checking:false
},
{
    id:21,
    imageUrl:"https://1000logos.net/wp-content/uploads/2024/02/Amazed-Emoji.png",
    Name:"Worried",
    checking:false
},
{
    id:22,
    imageUrl:"https://1000logos.net/wp-content/uploads/2024/02/Amazed-Emoji.png",
    Name:"Worried",
    checking:false
},
{
    id:23,
    imageUrl:"https://images.emojiterra.com/google/android-11/512px/1f4a5.png",
    Name:"Bomb",
    checking:false
},{
    id:24,
    imageUrl:"https://images.emojiterra.com/google/android-11/512px/1f4a5.png",
    Name:"Bomb",
    checking:false
}] 

emojiImages.sort(() => Math.random()-0.5) 
console.log(emojiImages)
class Board extends Component {
    state={emojisData:emojiImages,count:0,score:0,timer:0}
    componentDidMount(){
       const timerId=setInterval(this.timingEveryTime,1000) 
       console.log(timerId)
    } 

    timingEveryTime=() => {
        const {emojisData}=this.state
        if(emojisData.length > 0){
            this.setState((prevState) => ({
                timer:prevState.timer+1/2
            })) 
    } 
    else{
        clearInterval(this.timerId)
    }
    }
 
    boxChecking=() => {
        const {emojisData}=this.state
        const mappingData=emojisData.filter(each => each.checking === true)
        const data=mappingData.map(each => each.Name) 
        if(data[0] === data[1]){
            const mappedData=emojisData.filter(each => each.Name !== data[0])
           
            this.setState(prevState => ({
                score:prevState.score+1/2,
                emojisData:mappedData, 
                count:0
            }))
        }
       else{
        emojiImages.sort(() => Math.random()-0.5) 
        this.setState(prevState => ({
           
            emojisData:emojiImages,  
            count:0,
            score:prevState.score-1/2,
        }))
       }
    }
    boxClicking=async (id1,checking1) => {
        const {emojisData}=this.state 
        const mappingData=await emojisData.map(each => { 
            if(each.id === id1 && checking1 === false){
                return{
                    id:id1,
                    imageUrl:each.imageUrl,
                    checking:true,
                    Name:each.Name
                }
            }
            if(each.id === id1 && checking1 === true){
                return{
                    id:id1,
                    imageUrl:each.imageUrl,
                    checking:true,
                    Name:each.Name
                }
            } 
            return{
                id:each.id,
                imageUrl:each.imageUrl,
                checking:each.checking,
                Name:each.Name
            }
        }) 
        this.setState((prevState) => ({
            count:prevState.count+1,
            emojisData:mappingData
        }))
    }  

    render(){ 
        const {emojisData,count,score,timer}=this.state
        const minutes = Math.floor((timer * 60) / 3600)
        const seconds = Math.floor(timer % 60)
        const value = minutes >= 10 ? `${minutes}` : `0${minutes}`
        const value1 = seconds >= 10 ? `${seconds}` : `0${seconds}`
        if(emojisData.length === 0){
            return(
                <div>
                    <h1 className="styling-for-mahajong-game">React Tiles</h1> 
                    <div className="styling-for-score-and-time">
                    <h2 className="margin-left-for-score">Score:{score}</h2> 
                    <h2 className="margin-left-for-time">Time:{`${value}:${value1}`}</h2>
                </div>
                <div className="box-for-board">
                    <h2 className="styling-for-mahajong-game">Game Finished!</h2>
                    <h2 className="styling-for-mahajong-game">Score:{score}</h2> 
                    <h2 className="styling-for-mahajong-game">Time:{`${value}:${value1}`}</h2>
                </div>
                </div>
            )
        }
        if(count === 2){
            return(
                <div>
                    {this.boxChecking()}
                <h1 className="styling-for-mahajong-game">Mahajong Game</h1> 
                <div className="styling-for-score-and-time">
                    <h2 className="margin-left-for-score">Score:{score}</h2> 
                    <h2 className="margin-left-for-time">Time:{`${value}:${value1}`}</h2>
                </div> 
                <div className="box-for-board">
                    <h3 className="styling-of-getting-name">Welcome {localStorage.get("Name")} <FaHandsClapping/><FaHandsClapping/></h3>
                    <ul className="unordered-list">
                        {
                            emojisData.map(each => <EachBox  key={each.id} box={each} boxClicking={this.boxClicking} count1={count} boxChecking={this.boxChecking} emojis={emojisData}/>)
                        }
                    </ul>
                </div>
            </div>
            )
        }
        return(
            <div>
                <h1 className="styling-for-mahajong-game">Mahajong Game</h1> 
                <div className="styling-for-score-and-time">
                    <h2 className="margin-left-for-score">Score:{score}</h2> 
                    <h2 className="margin-left-for-time">Time:{`${value}:${value1}`}</h2>
                </div> 
                <div className="box-for-board">
                    <h3 className="styling-of-getting-name">Welcome {localStorage.get("Name")} <FaHandsClapping/><FaHandsClapping/></h3>
                    <ul className="unordered-list">
                        {
                            emojisData.map(each => <EachBox  key={each.id} box={each} boxClicking={this.boxClicking} count1={count} boxChecking={this.boxChecking} emojis={emojisData}/>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
} 
export default Board