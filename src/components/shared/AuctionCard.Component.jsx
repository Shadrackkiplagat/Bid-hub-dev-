import PropTypes from 'prop-types';
import Heart from '../../assets/Vector.svg';

import '../../components/items.css'
import { Link } from 'react-router-dom';

function AuctionCard({auctionItem}) {
    return ( 
        <div className="property-card">
              <div className="card-banner">
                <img src={auctionItem.img} alt="New Apartment Nice View" className="w-100" />
                <div className="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  > 
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div className="card-content">
                <div className="card-days">{auctionItem.daysLeft}</div>
                <p className="card-text">
                  {auctionItem.descr}
                </p>
                <ul className="card-list">
                  <li className="card-item">
                    <span>{auctionItem.location}</span>
                  </li>
                  <li className="card-items">
                    <strong>Start: {auctionItem.start}</strong>
                  </li>
                  <li className="card-items">
                    <strong>End: {auctionItem.end}</strong>
                  </li>
                </ul>
                <Link to="/itemDetails">
                
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3 className='details-text'>MORE DETAILS</h3>
                </button>

                </Link>

            


              </div>
            </div>
     );
}

AuctionCard.propTypes = {
    auctionItem: PropTypes.shape({
        img: PropTypes.string.isRequired,
        daysLeft: PropTypes.string.isRequired,
        descr: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
    }).isRequired,
    
}

export default AuctionCard;