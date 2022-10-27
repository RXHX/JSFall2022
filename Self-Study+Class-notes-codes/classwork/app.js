const Subheader = () => { 

return(
<ul className="flex cards">
<li><h2>Card 1</h2>
  <p>Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus.
  </p></li>  
</ul>

);
}


const FlexHeading = () =>{
return(
<h1>Flexbox</h1>
);
};


const  Header = () => {
    return (
      <div className="wrapper">
       <FlexHeading/>
        <Subheader/>
        <Subheader/>     
        </div>
    ); 
  }
  
  ReactDOM.render(
    <Header/>,
    document.getElementById('root')
  );