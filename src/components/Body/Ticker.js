import Ticker from "react-ticker";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "reactstrap";

const MoveStuffAround = () => (
  <Ticker offset="run-in" speed={10} style={{backgroundColor:"#0d47a1"}}>
    {({ index }) => (
      <>
      <CssBaseline/>
        <p style={{ color: "black", fontSize: 30, marginBottom:0}}>
          This is the Headline of element Lizards are a widespread group of squamate reptiles, with over #{index}! &nbsp;
        </p>
        {/* <img src="www.my-image-source.com/" alt="" /> */}
      </>
    )}
  </Ticker>
);

export default MoveStuffAround;
