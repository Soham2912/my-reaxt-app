//import Card from "./Card"
import Students from "./Students";
import Button from "./Button";

function App() {
  return(<>
     <Students  name="Sam" age={"hh"} isStudent={false}></Students>
     <Students  name="Namor" age={24} isStudent={false}></Students>
     <Students  name="Void" age={20} isStudent={true}></Students>
    </>
  );
}

export default App;
