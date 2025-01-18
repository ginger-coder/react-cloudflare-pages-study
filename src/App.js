import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [workers, setWorkers] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://study-cloudflare-workers.bxk0129.workers.dev/");
            const data = await response.json();
            setWorkers(data.message)
        };

        fetchData();
    }, []);
    return <div className="App">cloudflare workers say : {workers}</div>;
}

export default App;
