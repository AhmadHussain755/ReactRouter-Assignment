import { styles } from "./style";
import { Link, useLocation } from "react-router-dom";
// import { Label } from "reactstrap";
import userIcon from "../../assets/user.png";
import emailImg from "../../assets/email.png";
import passwordImg from "../../assets/padlock.png";
import phoneImg from "../../assets/phone.png";

export default function Card(props) {
  const location = useLocation();
  console.log("location", location.state);

  return (
    <div>
      <p>{location.state.name}</p>
      <div>
        <div>
          <p>{location.state.number}</p>
        </div>
        <div>
          <p>{location.state.email}</p>
        </div>
        <div>
          <p>{location.state.password}</p>
        </div>
        <div>
          <Link to={"/"}>Back</Link>
        </div>
      </div>
    </div>
  );
}
