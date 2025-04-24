import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../Pages/admin/AdminLayout";
import AdminDashboard from "../Pages/admin/AdminDashboard";
import UserDashboard from "../Pages/user/UserDashboard";
import AgentDashboard from "../pages/agent/AgentDashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute"; 
import UsersList from '../Pages/admin/UserList';
import UserForm from '../Pages/admin/UserForm';
import AdminTickets from '../Pages/admin/AdminTickets';
import CreateTicket from '../Pages/admin/CreateTicket';
import TicketDetail from '../Pages/admin/TicketDetail';




const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      
    <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<AdminDashboard />} />
  </Route>
</Route>

<Route element={<ProtectedRoute allowedRoles={["agent"]} />}>
  <Route path="/agent" element={<AgentDashboard />} />
</Route>

<Route path="/admin/users" element={<UsersList />} />
<Route path="/admin/users/create" element={<UserForm />} />
<Route path="/admin/users/edit/:id" element={<UserForm />} />
<Route path="/admin/tickets" element={<AdminTickets />} />
<Route path="/admin/tickets/create" element={<CreateTicket />} />
<Route path="/admin/tickets/:id" element={<TicketDetail />} />

<Route element={<ProtectedRoute allowedRoles={["user"]} />}>
  <Route path="/user" element={<UserDashboard />} />
</Route>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>

      <Route path="/user" element={<UserDashboard />} />
      <Route path="/agent" element={<AgentDashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;