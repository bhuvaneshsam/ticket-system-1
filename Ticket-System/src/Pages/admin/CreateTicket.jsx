import { useState } from 'react';
import { createTicket } from '../../services/ticketService';
import { useNavigate } from 'react-router-dom';

const CreateTicket = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    subject: '',
    description: '',
    priority: 'Medium',
    category: 'General',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await createTicket(form);
    navigate('/admin/tickets');
  };

  return (
    <div className="container mt-4">
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Subject</label>
          <input className="form-control" name="subject" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" name="description" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Priority</label>
          <select className="form-control" name="priority" onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Category</label>
          <input className="form-control" name="category" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Submit Ticket</button>
      </form>
    </div>
  );
};

export default CreateTicket;
