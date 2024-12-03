import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()

  const getSearched = async (name) => {
    try {
      const response = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=5ffc697089884039873a556541ad8a4b&query=${name}
      `);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const recipes = await response.json();
      setSearchedRecipes(recipes.results);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    // Limpia el parámetro "search" eliminando el signo de interrogación final si existe
    const cleanedSearch = params.search.replace(/\?$/, '');
    getSearched(cleanedSearch);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes && searchedRecipes.length > 0 ? (
        searchedRecipes.map((item) => (
          <Link to={'/recipe/' + item.id} key={item.id}>
            <Card>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  grid-gap: 1rem;
`;

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
`;

export default Searched;
