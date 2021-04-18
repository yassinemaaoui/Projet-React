import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <form className="  ">
          <div>
    
            <label for="staticEmail2">Email</label>
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail2"
              value="email@example.com"
            />
          </div>
                  <br />
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" className="sr-only">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary mb-2">
            Confirm identity
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
