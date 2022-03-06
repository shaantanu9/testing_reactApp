function Hh(props){
  var heading = props.heading, list = props.list

  console.log(heading,list)

  return (
    <div className="ml-3 mt-3">
    <p className="text-3xl text-blue-800 text-extrabold " >{heading}</p>
    {list.map((el)=>(<li>{el}</li>))}
    </div>

  )
}


function App() {

  var list1 = ["checking2","android","Blackbeery","iPhone","Windows Phone"];
  var list2 = ["checking2","Samsung","HTC","Micromax","Apple"];

  var heading1 = "Mobile Operating System";
  var heading2 = "Mobile Manufacturing"; 

  return (
    <div className='App'>
    <>
    <Hh heading={heading1} list={list1} />
    <Hh heading={heading2} list={list2} />
    </>
    </div>

  );
}


export default App;