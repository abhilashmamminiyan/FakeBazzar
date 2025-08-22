import { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Contexts/AuthContext';

function LogIn() {
    const {login} =useContext(AuthContext);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const getUsername = (e) =>{
        setUsername(e.target.value);
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    navigate("/");
  };
    return ( 
        <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Log In</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={getUsername}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Log In
          </button>
        </form>
      </div>
    </div>
     );
}

export default LogIn;