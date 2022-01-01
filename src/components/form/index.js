import { styles } from "./style";
import { Label } from "reactstrap";
import userIcon from "../../assets/user.png";
export default function Form() {
  return (
    <div style={styles.formHeading}>
      <form>
        <div>
          <h1>On Board</h1>
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
          <input
            type={"number"}
            placeholder="Phone Number"
            style={styles.name}
          ></input>
        </div>
        <div style={styles.namePadding}>
          <input
            type={"email"}
            placeholder="email"
            style={styles.email}
          ></input>
        </div>

        <div style={styles.namePadding}>
          <input
            type={"password"}
            placeholder="Password"
            style={styles.name}
          ></input>
        </div>
      </form>
    </div>
  );
}
