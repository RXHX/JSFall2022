function Cards() {
  return (
    <div className="wrapper">
      <h1>Flexbox</h1>
      <ul className="flex cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
}

const CardHeader = () => {
  return <h2>Card 1</h2>;
}

function Card() {
  return (
    <li>
      <CardHeader />
      <p>
        Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a
        a quisque malesuada quam purus venenatis sagittis fermentum parturient
        curabitur montes a metus.
      </p>
    </li>
  );
}

ReactDOM.render(<Cards />, document.getElementById('root'));
