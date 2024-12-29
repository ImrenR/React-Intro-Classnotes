import Button from "../button/Button"
import CardStyle from "./Card.module.css"


const Card =({language, img})=>{
  return(
    <>
      <div className={CardStyle.wrapper}>
        <h2>{language}</h2>
      </div>
      <img className={CardStyle.images} src={img} alt="language" />
      <Button />
    </>

  );
};

export default Card;