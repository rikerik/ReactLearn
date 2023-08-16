import ListGroup from "./components/ListGroup";

function App() {
    const items = [
        'New York',
        'Budapest',
        'Tokyo',
        'Paris',
        'London'
    ];
    return <div>
        <ListGroup items={items} heading={"Cities"}/>
    </div>
}

export default App;