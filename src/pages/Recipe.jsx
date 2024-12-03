import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Recipe() {

  let params = useParams()
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions')
  
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=5ffc697089884039873a556541ad8a4b`
      )
    const detailData = await data.json()
    setDetails(detailData)
  }
  
  useEffect(() =>{
    fetchDetails()
  }, [params.name])

  return (
    <DetailWrapper>
      {details ? (<>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt={details.title} />
        </div>
        <Info>
          <Button 
            className={activeTab === 'instructions' ? 'active' : ''} 
            onClick={() => setActiveTab('instructions')}
          >
            Intructions
          </Button>
          <Button 
            className={activeTab === 'ingredients' ? 'active' : ''} 
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </Button>
          {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions }}></h3>
          </div>
          )}
          {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          )}
        </Info>
      </>) : (<h1>Loading...</h1>)}
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color:#fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 10rem;
  }
`
const Button = styled.button`
  padding: 1rem 1rem;
  color: #313131;
  background:#fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 400;
  
  &:hover {
    cursor:pointer;
  }
`
const Info = styled.div`
  margin-left: 7rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
  }
`

export default Recipe
