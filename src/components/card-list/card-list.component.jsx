import Card from "../card/card.component";
import "./card-list.styless.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card cardData={monster} />;
    })}
  </div>
);

export default CardList;
