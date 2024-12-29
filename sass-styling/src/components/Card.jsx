import CardStyle from '../scss/card.module.scss'

const Card =({name,job,comment,img})=>{
  return(
    
    <div className={CardStyle.container}>
      <div className={CardStyle.card}>
        <div>
          <h1>{name}</h1>
          <h3>{job}</h3>
          <p>{comment}</p>
          <img className={CardStyle.images} src={img} alt="user" />
        </div>
        <div className={CardStyle.buttons}>
         <button className={CardStyle.small}>Small</button>
         <button className={CardStyle.large}>Large</button>
          </div>
      </div>
    </div>
  );
};

export default Card;