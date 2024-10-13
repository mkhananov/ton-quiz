import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Index.scss";
import Wrapper from "../../components/Wrapper.jsx";
import { Button } from "antd";
import Present from "./Present.jsx";

const Index = () => {
  return (
    <Wrapper>
      <img src={logo} className="logo" alt="quiz logo" />
      <div>Onboarding in TON ecosystem</div>
      <Link to={"/quiz"}>
        <Button className={"button"}>Get started</Button>
      </Link>
      <div className="bootcamp">
        Developed on Tbilisi Bootcamp | Hackers League Hackathon{" "}
      </div>
      <Present />
    </Wrapper>
  );
};

export default Index;
