
import './App.css';
let data = new Date();
data = (((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()); 

function Hellowrld(props){

  return <h1 className={props.className}>Hello world! {props.date}</h1>;
}
function App() {
  return (
    <>
      <Hellowrld className="um" date={data} />
      <Hellowrld className="dois" date={data} />
      <Hellowrld className="tres" date={data} />
      <Hellowrld className="quatro" date={data} />
      <Hellowrld className="cinco" date={data} />
    </>
  );
}

export default App;
