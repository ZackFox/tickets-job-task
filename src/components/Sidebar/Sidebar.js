import React from "react";
import "./Sidebar.css";
import CurrencyButton from "../CurrencyButton/CurrencyButton";
import StopsCheckbox from "../StopsCheckbox/StopsCheckbox";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-group currency-group">
        <div className="group-title">Валюта</div>
        <CurrencyButton currencyName="rub">RUB</CurrencyButton>
        <CurrencyButton currencyName="usd">USD</CurrencyButton>
        <CurrencyButton currencyName="eur">EUR</CurrencyButton>
      </div>
      <div className="sidebar-group stops-group">
        <div className="group-title">Количество пересадок</div>
        <StopsCheckbox stops={0}>Без пересадок</StopsCheckbox>
        <StopsCheckbox stops={1}>1 пересадка</StopsCheckbox>
        <StopsCheckbox stops={2}>2 пересадки</StopsCheckbox>
        <StopsCheckbox stops={3}>3 пересадки</StopsCheckbox>
      </div>
    </aside>
  );
};

Sidebar.defaultProps = {
  activeCurrency: "rub",
};

export default Sidebar;
