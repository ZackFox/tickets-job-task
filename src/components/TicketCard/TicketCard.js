import React from "react";
import setPriceByCurrency from "../../helpers/setPriceByCurrency";

import "./TicketCard.css";
import tk from "./TK.png";

export default ({ ticket, activeCurrency }) => {
  const onBuy = event => {
    event.preventDefault();
    alert("Билет куплен!");
  };

  return (
    <div className="ticket-card">
      <div className="ticket-purchase">
        <div className="avia-logo">
          <img src={tk} alt={ticket.carrier} />
        </div>
        <a href="/" className="btn btn-buy" onClick={onBuy}>
          <span>Купить</span>
          <span>зa </span>
          <span>{setPriceByCurrency(ticket.price, activeCurrency)}</span>
        </a>
      </div>
      <div className="ticket-info">
        <div className="ticket-info-origin">
          <div className="ticket-time">
            <span>{`${ticket.departure_time}`}</span>
          </div>
          <div className="ticket-location">
            <span>{`${ticket.origin}, ${ticket.origin_name}`}</span>
          </div>
          <div className="ticket-date">
            <span>{`${ticket.departure_date}`}</span>
          </div>
        </div>

        <div className="ticket-info-stops">
          <span>{`Пересадок: ${ticket.stops}`}</span>
        </div>

        <div className="ticket-info-dest">
          <div className="ticket-time">
            <span>{`${ticket.arrival_time}`}</span>
          </div>
          <div className="ticket-location">
            <span>{`${ticket.destination_name}, ${ticket.destination}`}</span>
          </div>
          <div className="ticket-date">
            <span>{`${ticket.arrival_date}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
