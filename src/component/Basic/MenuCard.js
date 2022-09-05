import React from "react";

const menuCard = ({ menuData }) => {
  // console.log(menuData);
  return (
    <>
    <section className="main-card--cointainer">
      {menuData.map((curElem) => {
        const {id, name, category, image, description} = curElem;

        return(
        <>
          <div className="card-container" key={id}>
          <div className="card">
            <div className="card-body">
              <span className="card-number card-circle subtle"> {id} </span>
              <span className="card-author subtle"> {category} </span>
              <h2 className="card-title"> {name} </h2>
              <span className="card-description subtle">

                              {description}

                {/* Maggi noodles are dried noodles fused with oil, and sold with a
                packet of flavorings.These noodles are usually eaten after being
                cooked in boiling water for 3 to 5 minutes or eaten straight
                from the packet.Just boil the water, add the tastemaker and
                noodles and your maggi is ready within 2 to 3 minutes. */}
              </span>
              <div className="card-read"> Read </div>
            </div>
            <img
              src= {image}
              alt=""
              className="card-media"
            /> 
            <span className="card-tag subtle"> Order </span>
          </div>
        </div>
        </>
        )
      })}
      </section>
    </>
  );
};

export default menuCard;
