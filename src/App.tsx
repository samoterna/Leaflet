import './App.css'
import 'leaflet/dist/leaflet.css';
import WithMapReference from "./LargeImage.tsx";
import WithMapContainer from "./WithMapContainer.tsx";

function App() {

    return (
        <>
            <h1>React</h1>
            <WithMapReference/>
            <WithMapContainer/>
        </>

    )
}

export default App
