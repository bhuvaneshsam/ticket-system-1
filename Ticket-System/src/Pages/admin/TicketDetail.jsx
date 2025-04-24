import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTicketById, updateTicket } from '../../Services/ticketService';

const TicketDetail = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [status, setStatus] = useState('');
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    getTicketById(id).then(data => {
      setTicket(data);
      setStatus(data.status);
    });
  }, [id]);

  const handleStatusChange = async () => {
    await updateTicket(id, { ...ticket, status });
    alert('Status updated!');
  };

  const handleAddComment = async () => {
    const updatedComments = [
      ...(ticket.comments || []),
      { body: newComment, user: 'Admin', date: new Date() },
    ];

    await updateTicket(id, { ...ticket, comments: updatedComments });
    setTicket({ ...ticket, comments: updatedComments });
    setNewComment('');
  };

  if (!ticket) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Ticket: {ticket.subject}</h2>
      <p><strong>Category:</strong> {ticket.category}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Description:</strong> {ticket.description}</p>

      <div className="mt-3">
        <label><strong>Status:</strong></label>
        <select className="form-select w-auto d-inline-block ms-2"
                value={status}
                onChange={(e) => setStatus(e.target.value)}>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
          <option>Closed</option>
        </select>
        <button onClick={handleStatusChange} className="btn btn-sm btn-success ms-2">
          Update Status
        </button>
      </div>

      <div className="mt-4">
        <h5>Comments</h5>
        <ul className="list-group mb-3">
          {(ticket.comments || []).map((c, idx) => (
            <li key={idx} className="list-group-item">
              <strong>{c.user}</strong>: {c.body} <br />
              <small className="text-muted">{new Date(c.date).toLocaleString()}</small>
            </li>
          ))}
        </ul>
        <textarea
          className="form-control"
          placeholder="Add a comment..."
          rows="3"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment} className="btn btn-primary mt-2">Add Comment</button>
      </div>
    </div>
  );
};

export default TicketDetail;
