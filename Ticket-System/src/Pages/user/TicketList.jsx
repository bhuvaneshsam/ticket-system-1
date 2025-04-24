const TicketList = ({ tickets }) => {
    return (
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">My Tickets</h2>
        <ul className="space-y-3">
          {tickets.map((ticket, idx) => (
            <li key={idx} className="border p-3 rounded bg-white shadow">
              <div className="font-bold">{ticket.subject}</div>
              <div className="text-sm text-gray-600">{ticket.description}</div>
              <div className="text-sm">Priority: {ticket.priority}</div>
              <div className="text-sm text-green-600">Status: Open</div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TicketList;
  