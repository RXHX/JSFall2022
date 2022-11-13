
const Players = (props) => {

   return (
      <div>
      Player : {props.id} name is {props.name} and age is {props.age}
      <br></br>
      <button onClick = {
        () => {  props.removePlayer(props.id)}
       }>Click To Remove</button>
       <Counter /> 
      </div>
   )


}



class Counter extends React.Component {

     state = {
      counter:0
     }

     increment = () =>{
      this.setState({
        counter: this.state.counter + 1
      })
     }

     decrement = () =>{
      this.setState({
        counter: this.state.counter - 1
      })
     }

   render()
   {
    return(
     <div>
      <button onClick = { () => {
          this.increment()
      }}> Increment</button>
      {this.state.counter}
     <button onClick = {
    () =>{
           this.decrement()
    }
     }>Decrement</button>

     </div>
    )



   }



}


const Winners = (props) => {
  return(
    <div>
      <label>
        Winner {props.id} : {props.name} : {props.message}
      </label>
  <button onClick = {() => { props.congratulateWinners() }  }>Winners Message</button>
  </div>
  );
}

const Losers = (props) => {

  return(
    <div>
      
      <label>
        Loser {props.id} : {props.name} :{props.message}
      </label>
    <button onClick = {() => {props.betterLuckNextTimemessage()}}>Losers Message</button>  
    </div>
    );
  
}

class App extends React.Component {
   state = {
    players: [
    {
      name:"Rohan Kediyal",
      age: "24",
      id: 1,
     
    },
    {
      name:"Anshdeep Sharma",
      age:"23",
      id: 2,
     
    },
    {
     name:"Ram Sharma",
     age:"22",
     id:3,
     
    },
    {
     name:"Ravi Kumar",
     age:"32",
     id:4,
     
    }],

    winners : [
    {
        name : "Ravi Kumar",
        age:"32",
        id :4,
        message:""
    },
    {
        name :"Ram Sharma",
        age:"22",
        id:3,
        message:""
    }],
    losers : [
      {
        name:"Rohan Kediyal",
        age: "24",
        id: 1 ,
        message:""
      },
      {
        name:"Anshdeep Sharma",
        age:"23",
        id: 2,
        message:""
      }
    ]
   }
 

   removePlayer = (id) => {
      return {
        players: this.setState((prevState) => ({
            players:prevState.players.filter((p) => p.id !== id )
        }))
      }
   }


    CongratsWinners = () => {
      return{
        winners: this.setState((prevState) => ({
          winners:prevState.winners.map((info) => {
            info.message="Cool"
          })
        }))
      }

    }
   
    betterLuckNextTimemessage = () => {
      return{
        losers: this.setState((prevState) => ({
          losers:prevState.losers.map((info) => {
            info.message="Work Hard"
          })
        }))
      }

    }

   render()
   {
    return(
     <div>
     {
     this.state.players.map((players) =>         
        <Players
          id = {players.id}
          name = {players.name}
          age= {players.age}
          key = {players.id.toString()}
          removePlayer = {this.removePlayer}
          />    
     )
     } 
      {
     this.state.winners.map((winners) => 
         <Winners 
          id = {winners.id}
          name = {winners.name}
          age= {winners.age}
          message={winners.message}
          key = {winners.id.toString()}
          congratulateWinners = {this.CongratsWinners}
         />
     )
     }
         {
        this.state.losers.map((losers) => 
        <Losers
        id = {losers.id}
        name = {losers.name}
        age= {losers.age}
        message={losers.message}
        key = {losers.id.toString()}
        betterLuckNextTimemessage = {this.betterLuckNextTimemessage}
        />
        )
      }
     </div>
    )
   }
}
ReactDOM.render(<App/>,document.getElementById('root'));