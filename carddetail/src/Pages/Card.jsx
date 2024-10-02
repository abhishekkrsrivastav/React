 
import { useNavigate } from "react-router";
import "./Card.css"
 
import logo from "/assets/imgs/logo.png";

const Card = ({data}) => {

const {id,name,profession,description,background,profileImage,profileLink}=data;
  const navigate=useNavigate();
  const handle =(id)=>{
   navigate(id);
  }   
  return (
    <div className="card-wrapper">
    
      <div className="card-wrapperImg">
      <img src={profileImage}/>
      </div>
       
        <h3>{name}</h3>
        <h5>{profession}</h5>
        <p>{description}</p>
        <img src={logo} alt="" id="logo" />
 
        <div className="btn">
        <button onClick={()=>handle(`/profile/${id}`)}>View Profile</button></div>
     </div>
  )
}

export default Card