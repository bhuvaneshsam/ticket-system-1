import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Welcome, Admin!</h2>
      <p>Here’s what you can do:</p>
      <div className="row">
        <div className="col-md-4 mb-3">
          <Link to="/admin/users" className="btn btn-outline-primary w-100">Manage Users</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/admin/tickets" className="btn btn-outline-secondary w-100">View Tickets</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/admin/reports" className="btn btn-outline-success w-100">Reports & Stats</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
