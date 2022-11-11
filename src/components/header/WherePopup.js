import "./header-styles/WherePopup.css";

/**
 * 1:
 *
 * 2: https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320
 *
 * 3:https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320
 *
 * 4: https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320
 *
 * 5: https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320
 *
 * https://a0.muscache.com/im/pictures/06a30699-aead-492e-ad08-33ec0b383399.jpg?im_w=320
 *
 */

const WherePopup = () => {
  return (
    <div className="where-pop-up-container">
      <h1 className="where-pop-up-heading">Search by region</h1>
      <div className="where-pop-up-img-box">
        <img
          className="where-pop-up-img"
          src=" https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
          alt="world map"
        />
        <p className="where-pop-up-text"> I'm flexible </p>
      </div>
    </div>
  );
};
export default WherePopup;
