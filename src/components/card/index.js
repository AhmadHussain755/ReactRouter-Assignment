import { styles } from "./style";
// import { Label } from "reactstrap";
import userIcon from "../../assets/user.png";
import emailImg from "../../assets/email.png"
import passwordImg from "../../assets/padlock.png"
import phoneImg from "../../assets/phone.png"
export default function Card() {
  return (
    <div>
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
            <input type={"text"} placeholder="Name" style={styles.name}></input>
          </div>
        </div>

        <div style={styles.namePadding}>
        <div style={styles.nameImg}>
          <img src={ phoneImg } style={styles.userIconImg} />
          </div>
          <div>
          <input
            type={"number"}
            placeholder="Phone Number"
            style={styles.name}
          ></input>
          </div>
        </div>
        
        <div style={styles.namePadding}>
        <div style={styles.nameImg}>
          <img src={ emailImg } style={styles.userIconImg} />
          </div>
          <div>
          <input
            type={"email"}
            placeholder="email"
            style={styles.email}
          ></input>
          </div>
        </div>

        <div style={styles.namePadding}>
        <div style={styles.nameImg}>
          <img src={ passwordImg } style={styles.userIconImg} />
          </div>
          <div>
          <input
            type={"password"}
            placeholder="Password"
            style={styles.name}
          ></input>
          </div>
        </div>
      </form>

    </div>
    </div>
    {<div>
        <button style={styles.submitButton}>Submit</button>
     </div> }
    
    </div>
    
  );
}
