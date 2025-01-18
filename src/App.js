import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [workers, setWorkers] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/hello");
            const data = await response.json();
            setWorkers(data.message);
        };

        fetchData();
    }, []);
    return <div className="App">cloudflare workers say : {workers}</div>;
}

export default App;
