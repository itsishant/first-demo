function App() {
  const handleClick = () => {
    alert("helllo world")
  }
  
  return (
    <div className="bg-blue-600 min-h-screen">
      <div className="font-extrabold flex">Sign up</div>
      <div className="space-x-4">
        <input type="text" placeholder="Email" className="rounded-lg"></input>
        <button className="p-2 bg-green-600 rounded-lg " onClick={handleClick}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default App;
