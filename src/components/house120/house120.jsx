import React from 'react';
import './house120.css'
import house9 from '../../assets/House9.jpg';
import printicon from '../../assets/print icon.png';
import shareicon from '../../assets/share icon.png';
import house14 from '../../assets/house14.jpg'
import house12 from '../../assets/house12.jpg'
import house11 from '../../assets/house11.jpg'
import house13 from '../../assets/house13.jpg'


const House120 = () => {
  return (
    <div className='house120'>
      <div className='house13-text'>
      <img className='house12' src={house9} alt="" />
      <div className='house1pics'>
        <img src={house9} alt="" />
        <img src={house9} alt="" />
        <img src={house9} alt="" />
        <img src={house9} alt="" />
      </div>
      <div className='item-details'>
      <div className='pic-details'>
       <p>3 bedroom bungalow</p>
       <p>Fully furnished,</p>
       <p>all ensuite.(House 045-010045)</p>
       <p></p>

      </div>
      <div className='price1'>
        <p>Reserved price</p>
      </div>
      <div className='kes'>
        <h4>Kes.13M</h4> {'\u00A0'} <p className='bid1'>(12 bids)</p>
      </div>
      <div className='close'>
        <p>Closes:</p>
      </div>
      <div className='time'>
        <p>(8h 13min, Sept 04, 2024, 02:15 PM EAT)</p>
      </div>
      <div className='week'>
        <p>Viewing</p>
        <p className='date'><b>ON-THUR: 08h00-16h00 | FRI: 08h00-12h00</b></p>
      </div>
      <p>Location</p>
      <p className='view1'> sign in to view</p>
      <div>
        <button className='btnbid'><p className='sgnbid'>Sign in to bid</p></button><br />
        <button className='btnwatch'>Sign in to watch</button>
      </div>
      </div>
      </div>
      <div className='head1'>
        <h2> Property Documents</h2>
      </div>
      <hr /> 
      <p className='land-details'>Land Reg  <p className='view3'>view</p></p>
      <hr/>
      <div className='description'>
        <h2>Description</h2>
        <hr />
          <p>Asset ID <p className='more-info'>House 125-0985</p></p>
          <hr />
          <p>Condition <p className='more-info'> 7 years</p> 7 years</p>
          <hr/>
          <p>Auction ID <p className='more-info'>GAF876F</p></p>
          <hr/>
        
      </div>
      <p>
        Friendly blind fate free earn gradual party cloth approve note pack compete summer every welcome grave steady committee sound roast please attend separation leaf face modest kiss corn whiten bring drink waste bright fine bless burst loyalty morning conscience bend sit ton commerce railroad cowardice than attractive what band title frighten we descend proof interest king sudden bit aloud baggage aloud loose finger lay efficient saddle hear dine fix sentence disgust court weave mark provide extension allowance flag left same bottom fence inside thorough importance coast hollow thirst attack apology no must represent friendship pour spade nowadays disgust shock department
      </p>
      <hr />
      <div className='items6'>
        <p className='print1'>print</p><img src={printicon} alt="" />
        <p className='share1'>share</p><img src={shareicon} alt="" />
        
      </div>
      <div className='QA'>
        <h2>Q & A</h2>
        <hr />
        </div>
        <p>Have any question or looking to schedule for an appointment?</p>
        <button className='btn-quiz'>Ask your question</button>
      <h2>Seller Information</h2>
      <div className='seller-info'>
        <p>Seller <p className='seller-details'> James Kinuthia</p> </p>
        <hr/>
        <p>Item location<p className='location-details'> Peponi road,Westlands,Nairobi</p></p>
        <hr/>
        <p>Contact <p className='location-details' >+254785434789</p></p>
        <hr/>
      </div>
      <h2 className='payment'>Payment <hr/></h2>
      
      <div className='payment-details'>
        <p> PAYMENT:If you are the willing bidder, you will facilitate payment by reffering to the <a href='' className='mybids'>My bids</a>  section of your account </p>
        {'\u00A0'}
        <p>Auction will close on TUESDAY.Payment is due not later than six (6) full business days from the time and date of the close of the auction and must be made electronically via the payment methods are listed above.</p>
        </div>
      <h2>Additional Information<hr/></h2>
      <div className='add-info'>
        <p> First time bidding?Please review our <a href='' className='terms-conditions'>Terms and conditions</a></p>
        <p>For further assistance please review our <a href='' className='terms-conditions'>Frequently asked questions</a></p>
      </div>
    
      <h2 className='similar-items'>Similar items to view</h2>
      <div className='Items2'>
        <div className="Item">
            <img src={house12} alt="" />
            <div>
              <p> 3 Bedroom Bungalow</p>
              <p>Thika,Kiambu,Kenya</p>
              <p>Start:3rd oct.2024</p>
              <p>End:5th oct,2024</p>
              <p> <button className='btn'>More Details </button></p>

            </div>
        </div>
        <div className="Item">
            <img src={house13} alt="" />
            <div>
              <p>2 Bedroom house,own compound,all ensuite</p>
              <p>Kitisuru,Nairobi,Kenya</p>
              <p>Start:3rd Oct,2024</p>
              <p>End:5th oct,2024</p>
              <p><p> <button className='btn'>More Details </button></p></p>
            </div>
        </div>
       <div className="Item">
            <img src={house14} alt="" />
            <div>
              <p> 3 Bedroom Bungalow,fully furnished</p>
              <p>Thika,Kiambu,Kenya</p>
              <p>Start:3rd oct.2024</p>
              <p>End:5th oct,2024</p>
              <p> <button className='btn'>More Details </button></p>

            </div>
        </div>
       <div className="Item">
            <img src={house11} alt="" />
            <div>
              <p> 3 Bedroom Bungalow,fully furnished</p>
              <p>Thika,Kiambu,Kenya</p>
              <p>Start:3rd oct.2024</p>
              <p>End:5th oct,2024</p>
              <p> <button className='btn'>More Details </button></p>

            </div>
        </div>
      
    </div>
  
    </div>
  );
};

export default House120; 
