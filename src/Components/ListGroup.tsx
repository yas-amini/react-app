// Defines a functional component named 'ListGroup'
function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Transform the items array into a list of <li> elements
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
