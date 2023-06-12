import './App.css'
import {LeafLetMap} from "./LeafLetMap.tsx";
import 'leaflet/dist/leaflet.css';
import LargeImageMap from "./LargeImage.tsx";

function App() {

    return (
        <>
        <h1>React</h1>
            <LeafLetMap/>
            <LargeImageMap />
        </>

    )
}

export default App
