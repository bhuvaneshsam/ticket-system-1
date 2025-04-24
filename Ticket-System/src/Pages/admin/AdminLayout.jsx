import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand">Admin Panel</span>
        <div>
          <Link to="/admin/dashboard" className="btn btn-sm btn-outline-light me-2">Dashboard</Link>
          <Link to="/admin/users" className="btn btn-sm btn-outline-light">Manage Users</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
