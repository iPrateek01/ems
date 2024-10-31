import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
// import { setLocalStorage } from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  // console.log(authData);

  const handleLogOut = () => {
    setUser(null)
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      
      localStorage.setItem('loggedInUser', JSON.stringify({role:null}))
    }
    
  }

  useEffect(() => {
    if( authData ) {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    }
  }, [authData])
  
// localStorage.clear()
  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => email == e.email && password == e.password)
    ) {
      const admin = authData.admin.find((e) => email == e.email && password == e.password)
      setUser("admin");
      setLoggedInUserData(admin)
      console.log(admin);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" , data: admin}));
    } else if (
      authData &&
      authData.employees.find((e) => email == e.email && password == e.password)
    ) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      setUser("employee");
      setLoggedInUserData(employee)
      // console.log(user);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
    } else {
      alert("Invalid Credentials");
      // console.log(user);
    }
    // console.log(email, password);
  };

  if (user == "admin") {
    return <AdminDashboard data = {loggedInUserData} handleLogOut = {handleLogOut}/>;
  } else if (user == "employee") {
    return <EmployeeDashboard data={loggedInUserData} handleLogOut={handleLogOut} />;
  }

  return <>{!user ? <Login handleLogin={handleLogin} /> : ""}</>;
}

export default App;
