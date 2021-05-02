  
import Ticker from "react-ticker";
import CssBaseline from "@material-ui/core/CssBaseline";

const MoveStuffAround = () => (
  <Ticker offset="run-in" speed={10}>
    {({ index }) => (
      <>
      <CssBaseline/>
        <p>
          This is the Headline of element Lizards are a widespread group of squamate reptiles, with over #{index}! &nbsp;
        </p>
      </>
    )}
  </Ticker>
);

export default MoveStuffAround;