import React from "react";
import TicketCard from "../TicketCard/TicketCard";

import "./TicketsList.css";

export default ({ tickets, activeCurrency }) => {
  return (
    <div className="tickets-list">
      {tickets.map((t, i) => (
        <TicketCard key={i} ticket={t} activeCurrency={activeCurrency} />
      ))}
    </div>
  );
};
