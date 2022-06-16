import React from "react";

const Card = () => {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <div className="cardImg">
            <img src="./img/1.png" alt="" />
          </div>
          <div className="cardFooter">
            <h1>Mini skirt</h1>
            <p>₦ 10,000</p>
          </div>
          <div className="cardHover">
            <div className="cardHoverItem">
                <button><img src="./icon/likeCard.svg" alt="" /></button>
              <button className="addCard">
                <span>ADD TO CART</span>
                <span>
                  <img src="./icon/addCard.svg" alt="addCard" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src="./img/1.png" alt="" />
          </div>
          <div className="cardFooter">
            <h1>Mini skirt</h1>
            <p>₦ 10,000</p>
          </div>
          <div className="cardHover">
            <div className="cardHoverItem">
                <button><img src="./icon/likeCard.svg" alt="" /></button>
              <button className="addCard">
                <span>ADD TO CART</span>
                <span>
                  <img src="./icon/addCard.svg" alt="addCard" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src="./img/1.png" alt="" />
          </div>
          <div className="cardFooter">
            <h1>Mini skirt</h1>
            <p>₦ 10,000</p>
          </div>
          <div className="cardHover">
            <div className="cardHoverItem">
                <button><img src="./icon/likeCard.svg" alt="" /></button>
              <button className="addCard">
                <span>ADD TO CART</span>
                <span>
                  <img src="./icon/addCard.svg" alt="addCard" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src="./img/1.png" alt="" />
          </div>
          <div className="cardFooter">
            <h1>Mini skirt</h1>
            <p>₦ 10,000</p>
          </div>
          <div className="cardHover">
            <div className="cardHoverItem">
                <button><img src="./icon/likeCard.svg" alt="" /></button>
              <button className="addCard">
                <span>ADD TO CART</span>
                <span>
                  <img src="./icon/addCard.svg" alt="addCard" />
                </span>
              </button>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Card;
