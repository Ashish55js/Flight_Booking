import signupImg from "../assets/Images/flight_image.jpg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Please Signup Here"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup