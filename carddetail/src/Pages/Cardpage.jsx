import { ProfileData } from "../utils/constant/Profile"
import Card from "./Card"
import "./Card.css"


const Cardpage = () => {
    
  return (
    <div className="cardpage-wrapper">
        {
            ProfileData.map((item,index)=>{
                return(
                    <Card key={index} data={item} />
                )
            })
        }
    </div>
  )
}

export default Cardpage