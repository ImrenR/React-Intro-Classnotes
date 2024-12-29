import '../scss/card.module.scss'

const Card =({name,job,comment,img})=>{
  return(
    
    <div>
      <div>
        <div>
          <h1>{name}</h1>
          <h3>{job}</h3>
          <p>{comment}</p>
          <img src={img} alt="user" />
        </div>
        <div>
         <button>Small</button>
         <button>Large</button>
          </div>
      </div>
    </div>
  );
};

export default Card;