import './Card.css';

/*Custom Wrapper Component*/
function Card(props) {
  // Append classes to main class for css
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
