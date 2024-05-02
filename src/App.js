import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("connect error");
        }
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
      });
  }, []);
  return <div className="App">B팀의 시작</div>;
};

export default App;
