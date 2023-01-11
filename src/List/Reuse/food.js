function Food(props) {
  return (
    // itemname and data passed from ReuseComponent.js
    <div>
      <span>{props.data.itemname}</span>
      <span>{props.data.type}</span>
      <span>{props.data.price}</span>
    </div>
  );
}

export default Food;