import {useDispatch, useSelector} from "react-redux"
import './App.css';

function App() {

  const dispatch = useDispatch();
  const user = useSelector((state)=> {
   return state.user.user
  })
  const error = useSelector((state)=> state.user.error)

  const projects = useSelector((state)=> state.project)

  console.log(JSON.stringify(projects))

  const fetchUser = (userId) =>{
    dispatch({type:"user/fetchUserRequested", payload: userId})
  }

  const fetchProject=()=>{
    dispatch({type:"project/fetchProjectRequested", payload:null})
  }

  //console.log(JSON.stringify(user))

  return (
    <div className="App">
      <h2>THis is redux saga example</h2>
      <button onClick={()=> fetchUser(1)}>Fetch User</button>
      {error && <p>{error}</p>}
      {user && user.data &&  <p>{user.data.firstName}</p>}

      <button onClick={()=>fetchProject() } >Fetch project</button>

    </div>
  );
}

export default App;
