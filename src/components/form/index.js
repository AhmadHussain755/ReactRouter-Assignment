import { useState } from "react";

import { styles } from "./style";
import { Link } from "react-router-dom";
// import { Label } from "reactstrap";
import userIcon from "../../assets/user.png";
import emailImg from "../../assets/email.png";
import passwordImg from "../../assets/padlock.png";
import phoneImg from "../../assets/phone.png";
// import backgroundImg from "../../assets/bg.jpg";
export default function Form() {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  function getNameValue(event) {
    setName(event.target.value);
  }
  function getPhoneNumberValue(event) {
    setPhoneNumber(event.target.value);
  }

  function getEmailValue(event) {
    setEmail(event.target.value);
  }

  function getPasswordValue(event) {
    setPassword(event.target.value);
  }

  return (
    <div style={styles.backgroundImage}>
      <div style={styles.centerForm}>
        <div style={styles.formHeading}>
          <form>
            <div>
              <h1 style={styles.boardHeading}>On Board</h1>
            </div>
            <div style={styles.flexImg}>
              <div style={styles.nameImg}>
                <img src={userIcon} style={styles.userIconImg} />
              </div>
              <div>
                <input
                  type={"text"}
                  onChange={getNameValue}
                  placeholder="Name"
                  style={styles.name}
                ></input>
              </div>
            </div>

            <div style={styles.namePadding}>
              <div style={styles.nameImg}>
                <img src={phoneImg} style={styles.userIconImg} />
              </div>
              <div>
                <input
                  type={"number"}
                  onChange={getPhoneNumberValue}
                  placeholder="Phone Number"
                  style={styles.name}
                ></input>
              </div>
            </div>

            <div style={styles.namePadding}>
              <div style={styles.nameImg}>
                <img src={emailImg} style={styles.userIconImg} />
              </div>
              <div>
                <input
                  type={"email"}
                  onChange={getEmailValue}
                  placeholder="email"
                  style={styles.email}
                ></input>
              </div>
            </div>

            <div style={styles.namePadding}>
              <div style={styles.nameImg}>
                <img src={passwordImg} style={styles.userIconImg} alt="" />
              </div>
              <div>
                <input
                  type={"password"}
                  onChange={getPasswordValue}
                  placeholder="Password"
                  style={styles.name}
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div style={styles.buttonDiv}>
        <Link
          to={"/card"}
          style={styles.submitButton}
          state={{
            name: name,
            number: phoneNumber,
            email: email,
            password: password,
          }}
        >
          Submit
        </Link>
      </div>
    </div>
  );
}
