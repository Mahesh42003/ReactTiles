import './index.css'

const EachBox=(props) => {
    const {box,boxClicking}=props  
    const {id,Name,imageUrl,checking}=box
    const clickingOnBox=() =>{
        boxClicking(id,checking)  
    } 

    return(
        <li className='list-style-type'>
            {
                checking?<div className='paragraph-box1'>
                    <img src={imageUrl} className='image-height' alt={Name}/>
                </div>:<p className="paragraph-box" onClick={clickingOnBox}>{}</p>
            }
        </li>
    )
} 
export default EachBox