import { useState } from "react";

const TicketForm = ({ onTicketSubmit }) => {
  const [ticket, setTicket] = useState({
    subject: "",
    description: "",
    priority: "Low"
  });

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTicketSubmit(ticket); // send ticket to parent
    setTicket({ subject: "", description: "", priority: "Low" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded space-y-4">
      <h2 className="text-xl font-semibold">Submit a New Ticket</h2>

      <input
        type="text"
        name="subject"
        value={ticket.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="description"
        value={ticket.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 rounded"
        rows="4"
        required
      />
      <select
        name="priority"
        value={ticket.priority}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Ticket
      </button>
    </form>
  );
};

export default TicketForm;
