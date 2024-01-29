import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [utilisateurs,setUtilisateurs]=useState([])
  const [articles,setArticles]=useState([])
  const [userActif,setUserActif]=useState(0)

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{return response.json()})
  .then((data)=>setUtilisateurs(data))

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{return response.json()})
  .then((data)=>setArticles(data))



} , [])
function handleClick(ID){
  setUserActif(ID)

}

  return (
    <div className="App">
      <h1>utilisateurs</h1>
      {
        utilisateurs.map((utilisateur ,index)=>{
          return <p key={index}>{utilisateur.name}
          <button onClick={()=>handleClick(utilisateur.id)}>details des articles </button>
          {
                  userActif==utilisateur.id
                  ?<ul> {
                    articles.filter((item)=>item.userId==userActif)
                    .map((article)=> {
                      return <li>{article.id} {article.title}</li>
                    })
                    }
                    </ul>
                  :null
                }
          </p>

        })
      }
      
    </div>
  );
}

export default App;
