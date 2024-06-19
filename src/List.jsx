
function List(){
  const fruits=[{name:"apple", calories:95 },
    {name:"orange", calories:45},
    {name:"kiwi", calories:105},
    {name:"pine",calories:37},
];
    fruits.sort();
  const listItems = fruits.map( fruit=> <li key={fruit.name}>{fruit.name}</li>);
return(

<ol>{listItems}</ol>
 );
  
}

export default List;