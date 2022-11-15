const Player = (props) => {

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
                 <button onClick={
                    
                    () => {

                        props.showDisplay(true)
       
                       }
        
                    
                    }>+</button>
                 
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
    newPlayer : { name:"",age:0,id:0},
    show: false
    }
 

     removePlayer = (id) => {
        
        this.setState( prevState => ({
            players: prevState.players.filter( play => play.id !== id )
        }))
     }

     handleNameChange = (event) => {
       this.setState({
        newPlayer :{...this.state.newPlayer,name:event.target.value}
       })
      };


      handleAgeChange = (event) => {
        this.setState({
         newPlayer :{...this.state.newPlayer,age:event.target.value}
        })
       };


       handleIdChange = (event) => {
        this.setState({
         newPlayer :{...this.state.newPlayer,id:event.target.value}
        })
       };

     addSportInfo = () => {
        this.setState( prevState => ({
            players : [...prevState.players,this.state.newPlayer]
        }));

        this.display(false)
     }

     display = (status) => {
        this.setState({
            show:status
        })
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
                  showDisplay = {this.display}          
               />
           )}
              
            {
                this.state.show ? <div>
                 <label>Name:</label>
                 <input 
                 type="name" 
                 id="name" 
                 onChange={this.handleNameChange}
                 ></input><br/>
                 <label>Age:</label>
                 <input 
                 type = "number" 
                 id="age"
                 onChange={this.handleAgeChange}
                 ></input><br/>
                 <label>id</label>
                 <input 
                 type = "number" 
                 id="id"
                 onChange={this.handleIdChange}
                 ></input><br/>
                <button onClick = {this.addSportInfo}>Add</button>
                 </div> : null
                }
            </div>
        )

    }
}

// step 1
ReactDOM.render(<App/>,document.getElementById('root'));