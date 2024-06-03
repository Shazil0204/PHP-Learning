import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:1000/index.php") // Fetch from PHP server on port 1000
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>PHP and React Integration</h1>
        <p>{message}</p>
      </header>
    </div>
  );
};

export default App;
