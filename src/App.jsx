import "./App.css";
import Badge from "./Badge";
import profileImg from "./assets/profile.jpg";
import profile from "./assets/profile1.jpg";
import Img from "./assets/profile2.jpg";
import profile_Img from "./assets/profile4.jpg";
function App() {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>
        Personnel Dashboard
      </h1>

      <div className="card-container">
        <Badge label="Full Name" value="Matin Noori" img={Img} />

        <Badge label="Full Name" value="Somaiya Noori" img={profileImg} />

        <Badge label="Full Name" value="Tamim Noori" img={profile} />

        <Badge label="Full Name" value="Behnaz Noori" img={profile_Img} />
      </div>
    </div>
  );
}

export default App;
