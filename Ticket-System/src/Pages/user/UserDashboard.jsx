import { useState } from "react";
import TicketForm from "./TicketForm";
import TicketList from "./TicketList";



const UserDashboard = () => {
  const [tickets, setTickets] = useState([]);

  const handleTicketSubmit = (newTicket) => {
    setTickets([newTicket, ...tickets]); // prepend new ticket
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <TicketForm onTicketSubmit={handleTicketSubmit} />
      <TicketList tickets={tickets} />
    </div>
  );
};

export default UserDashboard;
