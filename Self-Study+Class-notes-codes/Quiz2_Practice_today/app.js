


const Player = (props) => {




    const [displayed, setDisplayed] = useState(false)
    function addInfo(){
       setDisplayed(true)
        
 
    }

    return(
        <div>
            Player Name : {props.name}
            <br/>
            Player Age:  {props.age}
            <Counter/>
            <button onClick={
                
                
                () => {

                 props.removeSports(props.id)

                }
              
                }>X</button>
                  <button onClick={addInfo}>+</button>
                {
                displayed ? <div>
                 <label>Name:</label>
                 <input type = "text" id="name"></input>
                 <label>Age:</label>
                 <input type = "number" id="age"></input>
                 <label>id</label>
                 <input type = "number" id="id"></input>
                  <button onClick={()=> { props.addSports( document.getElementById("name"),document.getElementById("age"),document.getElementById("id"))}}>Add Me</button>
                 </div> : null
                }  
        </div>
    )
} 


class Counter extends React.Component {

   state = {
    counter : 0
   }

  // increment

  handleIncrement = () => {
   this.setState(prevState => ({
      counter:prevState.counter+1
   }))

  }

  // decrement

  handleDecrement = () => {
   this.setState({
    counter : this.state.counter - 1
   })

  }
   render()
   {
      return(
       <div>
        <button onClick={this.handleIncrement}>Increment</button>
          {this.state.counter}
         <button onClick={this.handleDecrement}>Decrement</button>
        
       </div>
      )
   

   }



}



class App extends React.Component {
  
    // to change UI during execution async.
    state =   
    {
        players : [
        {
              name: "Rohan Kediyal",
              age : 26,
              id : 1                
        },
        {
            name: "Yash Thakkar",
            age : 22,
            id : 2   
        },{
            name: "Anshdeep Singh",
            age : 23,
            id:3   
        },{
            name:"Shristhy Jain",
            age:26,
            id:4
        }
    ],
    newPlayer : { }
    }
 

     removePlayer = (id) => {
        
        this.setState( prevState => ({
            players: prevState.players.filter( play => play.id !== id )
        }))
     }


     addSportInfo = ( newName,newAge,newId) => {



       this.setState({
        newPlayer:{
            name:newName,
            age:newAge,
            id:newId
        }
       });

        this.setState( prevState => ({
            players : [...prevState.players,this.state.newPlayer]
        }));
     }

    render()
    {
        return(
            <div>
              
           { 
           
           this.state.players.map((players) =>  
               <Player 
                  name = {players.name}
                  age = {players.age}
                  id = {players.id}
                  key = {players.id.toString()}
                  removeSports = {this.removePlayer}
                  addSports = {this.addSportInfo}
               />
           )}
            </div>
        )

    }




}

// step 1
ReactDOM.render(<App/>,document.getElementById('root'));