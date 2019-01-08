import React from "react";
import setPriceByCurrency from "../../helpers/setPriceByCurrency";

import "./TicketCard.css";

export default ({ ticket, activeCurrency }) => {
  return (
    <div className="ticket-card">
      <p>{`Из ${ticket.origin_name} в ${ticket.destination_name}`}</p>
      <p>{`Остоновок: ${ticket.stops}`}</p>
      <p>{`Стоимость: ${setPriceByCurrency(ticket.price, activeCurrency)}`}</p>
    </div>
  );
};
