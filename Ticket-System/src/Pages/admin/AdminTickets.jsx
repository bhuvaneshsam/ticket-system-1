import { useEffect, useState } from 'react';
import { getAllTickets } from '../../services/ticketService';


const AdminTickets = () => {
  const [tickets, setTickets] = useState([]);
  

  useEffect(() => {
    getAllTickets().then(setTickets).catch(console.error);
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Tickets</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Subject</th><th>Status</th><th>Priority</th><th>Created By</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket._id}>
              <td>{ticket.subject}</td>
              <td>{ticket.status}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.createdBy?.name || 'N/A'}</td>
              <td>
                {/* Later: Add edit/view options */}
                <button className="btn btn-sm btn-outline-primary">View</button>
                <Link to={`/admin/tickets/${ticket._id}`} className="btn btn-sm btn-outline-primary">
  View
</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTickets;
