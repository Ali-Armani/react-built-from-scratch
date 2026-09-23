
function List() {

  const fruits = [{name: 'Peaches'}, {name: 'Apples'}, {name: 'Plumbs'}, {name: 'Tomatoes'}, {name: 'Bananas'}, {name: 'Oranges'}];

  const listItems = fruits.map(Fruit => <li>{Fruit.name}</li>);

  return(
    <><ol>{listItems}</ol></>
  );
}

export default List;