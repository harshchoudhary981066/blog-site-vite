import './App.css'

function App() {
//This shows the env variables on console. Generally a restart of server is required after adding this statement
//console.log(process.env.REACT_APP_APPWRITE_URL) is the method to console log env variables if created by create-react-app
console.log(import.meta.env.REACT_APP_APPWRITE_URL)
  return (
    <>
      <h1>Blog Site</h1>
    </>
  )
}

export default App
