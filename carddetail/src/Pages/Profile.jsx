 
import "./Profile.css"
import {useParams} from "react-router-dom"
import {ProfileData} from "../utils/constant/Profile.js"
import "./Profile.css"
const Profile = () => {
  const {id}=useParams();

  const singleData=ProfileData.find((item)=>{
    return item.id == id
  })
  const {name,profession,description,background,profileImage,profileLink}=singleData;

  
 
  return (
    <div className="profile-wrapper">
      <div className="profile-img">
      <img src={profileImage} alt="" />
      </div>
    <div className="profile-content">
   
      <h1>{name}</h1>
      <h3>{profession}</h3>
      <p>{description}</p>
      {/* <img src={background} alt="" /> */}
      <a href={profileLink}></a>
    </div>
    </div>
  )
}

export default Profile