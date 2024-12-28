
import data from "../src/data"
import Button from "./components/button/Button";
import Card from "./components/card/Card";


function App() {
  console.log(data);
  return (
    <div className="App">
      <h1>Languages</h1>
      {
        data.map((item)=> ( <Card language={item.language} img={item.img}/>

      ))}
     {/* <Card language={data[0].language} img={data[0].img}/>
      <Card language={data[1].language} img={data[1].img}/>
      <Card language={data[2].language} img={data[2].img}/> */}
      <Button/>
    </div>
  );
}

export default App;
