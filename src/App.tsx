import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() : JSX.Element {
  let items = ["New York", "Los Angeles", "Chicago", "Houston"];
  const handelSelectItem = (item: string) => {
    console.log(item);
  }
    
  return (
    <div>
      <>
        {/* <ListGroup items={items} heading="Cities" onSelectItem={handelSelectItem} /> */}
        <Alert>
          <div>Hello
            <p></p>
          <span>Word</span>
          </div>
        </Alert>
      </>
    </div>
  );
}

export default App;
