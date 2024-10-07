import './RecipeApp.css'
import Recipe from './recipe'

function RecipeApp() {
  return (
    <div className='App'>
      <Recipe title="Pasta"
      ingredients={['flour', 'water', 'salt', 'egg']}
      />
    </div>
  )
}

export default RecipeApp