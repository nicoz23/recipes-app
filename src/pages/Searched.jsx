import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()

  const getSearched = async (name) => {
    const data = await fetch(`
      https://api.spoonacular.com/recipes/complexSearch?apiKey=5ffc697089884039873a556541ad8a4b&query=${name}`
    )
    const recipes = await data.json()
    console.log(recipes)
    setSearchedRecipes(recipes.results)
  }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

  return (
    <Grid>
      {searchedRecipes ? (<>
        {searchedRecipes?.map((item) =>{
        return (
          <Link to={'/recipe/' + item.id}>
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        )
      })}
      </>) : (<h1>Loading</h1>)}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    grid-gap: 1rem;
`
const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;

    }
`

export default Searched
