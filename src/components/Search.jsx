import styled from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault;
    navigate('/recipes-app/searched/'+input)
  }

  return (<div>
    <Logo to={'/recipes-app/'}>
      <h3>Recipes App</h3>
    </Logo>
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input 
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  transition: ease-in .1s;
  
  &:hover {
    display: block;
    width: fit-content;
    height: fit-content;
    border-radius: 5rem;
    background-color: #333;
    
    h3 {
      color: #fff;
    }
  }
`

const FormStyle = styled.form`
  div {
    margin-left: auto; margin-right: auto;
    width: 50%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: #fff;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width:100%
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`

export default Search