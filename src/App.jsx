import { NavLink, Outlet } from "react-router";
function App() {
  return (
    <>
      導覽：
      <NavLink to="/about">關於我</NavLink>||
      <NavLink to="/aboutHooks">hook</NavLink>||
      <NavLink to="/aboutForm">Form</NavLink>||
      <NavLink to="/HookForm">HookForm</NavLink>
      <hr />
      <Outlet />
    </>
  );
}

export default App;
