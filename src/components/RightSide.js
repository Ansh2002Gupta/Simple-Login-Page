/* eslint-disable jsx-a11y/img-redundant-alt */
import groupImage from '../assests/images/Group 1572.svg'
import logo from '../assests/images/logo blue 1.svg'

const RightSide = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: "#72c7fff5", width: "100vw", height: "100vh"}}>
            <img src={logo} alt="logo image here" className="img-fluid" style={{position: "absolute", right:"35px", top:"40px"}}/>
            <img src={groupImage} alt="group image here" className="img-fluid" style={{scale: "75%"}}/>  
            <h3 style={{fontWeight: "bold"}}>Welcome back!</h3>
            <p>Login in to the admin portal</p>
        </div>
    );
}

export default RightSide