import ButtonStyle from "./Button.module.css"
const Button =()=>{
  return(
    <div className={ButtonStyle.wrapper}>
      <button className={`${ButtonStyle.btn} ${ButtonStyle["btn-blue"]}`}>Info</button>
      <button className={`${ButtonStyle.btn} ${ButtonStyle["btn-red"]}`}>Back</button>
    </div>
  );
};

export default Button;