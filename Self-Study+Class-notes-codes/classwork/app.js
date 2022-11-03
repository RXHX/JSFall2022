const Subheader = (props) => { 

return(
<ul className="flex cards">
<li><h2>{props.name}</h2>
  <p>{props.content}
  </p></li>  
</ul>

);
}


const FlexHeading = (props) =>{
return(
<h1>{props.mainHead}</h1>
);
};


const  Header = () => {
    return (
      <div className="wrapper">
       <FlexHeading mainHead = "FlexBox"/>
        <Subheader name = "Card1" content = "Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus."/>
        <Subheader name = "Card2" content = "Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus."/>     
        </div>
    ); 
  }
  
  ReactDOM.render(
    <Header/>,
    document.getElementById('root')
  );