import PropTypes from "prop-types";

import '../../components/items.css'

import AuctionCard from "./AuctionCard.Component";
import Items2 from "../Items2/items2";

function AuctionItems({ title, items }) {
    return ( 
        <div className="property-container">
          <h2 className="h2 section-title">{title}</h2>
          <div className="property-list ">
            {items.map((item) => <AuctionCard auctionItem={item} />)}
          </div>
          </div>
     );
}

AuctionItems.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}

export default AuctionItems;