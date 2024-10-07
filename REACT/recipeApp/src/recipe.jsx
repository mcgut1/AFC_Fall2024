function Recipe(props) {
const {title, ingrediants} = props;
const ingrediantsList = <ingredients.map(ing, index) =>
    <li>{ing} </li>
)
    return ( 
        <div>
    <div>Recipe for {title}</div>
    <ul>
        {ingredientsList}
    </ul>
    </div>
)
}

export default Recipe;