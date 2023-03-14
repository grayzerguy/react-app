import Message from "./Message";


function App() {
  const name = "";
  if (name)
  return (
    <div className="App">
      <h1>hello {name}</h1>
    </div>
  )
    return (
      <div className="App">
        <h1>hello <Message/></h1>
      </div>
  );
}

export default App
