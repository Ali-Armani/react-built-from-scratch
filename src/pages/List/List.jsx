
function List() {

  const fruits = [{id: 1, name: 'Peaches', calories: '34'},
                  {id: 2, name: 'Apples', calories: '107'}, 
                  {id: 3, name: 'Plumbs', calories: '221'}, 
                  {id: 4, name: 'Tomatoes', calories: '46'}, 
                  {id: 5, name: 'Bananas', calories: '53'}, 
                  {id: 6, name: 'Oranges', calories: '100'}];

  const listItems = fruits.map(Fruit => <li key = {Fruit.id}> 
                                                  {Fruit.name}: {Fruit.calories}
                                                  </li>);

  return(
    <><ol>{listItems}</ol></>
  );
}

export default List;