import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login({ name: "Test User", role }); 
    navigate(`/${role}`); 
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl mb-4">Login as:</h1>
      <button onClick={() => handleLogin("admin")} className="m-2 px-4 py-2 bg-blue-600 text-white">Admin</button>
      <button onClick={() => handleLogin("agent")} className="m-2 px-4 py-2 bg-green-600 text-white">Agent</button>
      <button onClick={() => handleLogin("user")} className="m-2 px-4 py-2 bg-purple-600 text-white">User</button>
    </div>
  );
};

export default Login;
