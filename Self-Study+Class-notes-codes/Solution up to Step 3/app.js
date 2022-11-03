
const cardInfo = [
  {
  info : "Card 1",
   content : "Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus."
   ,key : 1
  },{
  info : "Card 2",
  content : " dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus."
  ,key:2

},{
  info : "Card 3",
  content : "Posuere   curabitur montes a metus."
  ,key:3

},{
  info : "Card 4",
  content : "Posuere varius ullamcorper  malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus."
 ,key:4

}]

const  Header = (props) => {
return(
  <div className = "header">
  <h1 className = "header h1">{props.title}</h1>
  <h1 className = "header h1">{props.subTitle}{props.cardCount}</h1>
  {
    cardInfo.map((card) =>{
      return (
        <Card 
        info = {card.info}
        content = {card.content}
        key = {card.key.toString()}
        />
      )
    })
  }
  </div>
  
)

}
 

function Cards(props) {
  return (
    <div className="wrapper">
      <h1>{props.name}</h1>
      <ul className="flex cards">
      </ul>
      <Header title = "Cards"   subTitle = "Total Cards :"   cardCount = {cardInfo.length}/>
    </div>
  );
}

function Card(props) {
  return (
      <li>
        <h2>{props.info}</h2>
        <p>
          {props.content}
        </p>
      </li>
  );
}

ReactDOM.render(<Cards name = "FlexBox"/>, document.getElementById('root'));
