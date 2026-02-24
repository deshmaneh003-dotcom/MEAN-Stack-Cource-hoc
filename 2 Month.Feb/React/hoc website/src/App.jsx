import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsCard from './components/DetailsCard';


function App() {

  //JavaScript
  console.log("hhhhhhhh");
  //variable
  const name= "hoc" //we can not change value
  let age= 20 //we can change
  console.log(name, "hoc ===>");
  console.log(age, "age ===>");
  //string
  const a="hoc tech solution";
  //array
  const b=["orange","karad","saidapur"];
  //object
  const data ={ name:"hoc",city:"karad"};
  //if else 
    const fullname="hoc"
  if(fullname=="hoc"){
    console.log(true)
  }
  else{
    console.log(false)
  }
  //function
  function addnumber(){
    console.log("click")
  }
  //Array of object
  const cardData = [
    {
      CardTitle: "Test 1",
      CardDescription: "Test Description 1",  
    },
     {
      CardTitle: "Test 1",
      CardDescription: "Test Description 1",  
    },
     {
      CardTitle: "Test 1",
      CardDescription: "Test Description 1",  
    },
     {
      CardTitle: "Test 1",
      CardDescription: "Test Description 1",  
    },
     {
      CardTitle: "Test 1",
      CardDescription: "Test Description 1",  
    },
  ];
  console.log(cardData,"---")
  

  return (
    <>


      <div className="container">
        <div className="row my-2">
          <div className="col-md-3">
            <DetailsCard CardTitle="Cars" CardDescription="Sports Car" />
          </div>
          <div className="col-md-3">
            <DetailsCard CardTitle="Cars" CardDescription="Sports Car" />
          </div>
          <div className="col-md-3">
            <DetailsCard CardTitle="Cars" CardDescription="Sports Car" />
          </div>
          <div className="col-md-3">
            <DetailsCard CardTitle="Cars" CardDescription="Sports Car" />
          </div>
          <div className="col-md-3">
            <DetailsCard CardTitle="Cars" CardDescription="Sports Car" />
          </div>

          <div className="col-md-3">
            <DetailsCard CardTitle="Cars" CardDescription="Sports Car" />
          </div>

          <div className="col-md-3">
            <DetailsCard CardTitle="Cars" CardDescription="Sports Car" />
          </div>
          <div className="col-md-3">
            <DetailsCard CardTitle="Cars" CardDescription="Sports Car" />
          </div>


        </div>
      </div>
    </>
  )
}

export default App
