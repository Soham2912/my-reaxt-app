
//import styles from "./Button.module.css"
function Button(){
    const styles={
         
               backgroundColor: "blue",
               color: "white",
               padding: "10px 20px",
               border: "none",
               borderRadius: "5px",
               cursor: "pointer",
               fontSize: "20px",
               margin: "10px"
         
      
    }
 return (
    <button style={styles}>Click me</button>
 );

}

export default Button;