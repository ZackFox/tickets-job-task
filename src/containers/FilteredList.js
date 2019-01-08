import { connect } from "react-redux";

import TicketsList from "../components/TicketsList/TicketsList";

const getFilteredTickets = (tickets, checkedStops) => {
  let filtered = [];
  let checked = 0;

  for (let s in checkedStops) {
    if (checkedStops[s] === true) {
      filtered = [...filtered, ...tickets.filter(t => t.stops === parseInt(s))];
      checked++;
    }
  }
  return checked > 0 ? filtered : tickets;
};

export default connect(
  state => ({
    tickets: getFilteredTickets(state.tickets, state.filters.checkedStops),
    activeCurrency: state.filters.activeCurrency,
  }),
  null,
)(TicketsList);
