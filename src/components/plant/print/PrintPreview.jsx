import Sun from "../../ui/icons/Sun";
import Water from "../../ui/icons/Water";
import Height from "../../ui/icons/Height";
import Logo from "../../ui/Logo";

function PrintPreview({ details }) {
  let classes = ["print-wrapper"];

  if (details.colors) {
    classes.push("print-wrapper--colors");
  }

  if (details?.layout === "layout_one_col") {
    classes.push("print-wrapper--layout-one");
  }

  const extra = details.sun || details.water || details.height;

  return (
    <>
      <div className={classes.join(" ")}>
        <div className="print-wrapper-inner">
          <div className="col-wrapper">
            <div className="col">
              <div className="plant-name">{details.name}</div>
              <div className="plant-name-type">{details.name_type}</div>
              <div className="price-wrapper">
                {details.price_sale && (
                  <div className="plant-price-sale">{details.price_sale}</div>
                )}
                {details.price && (
                  <div className="plant-price-org">{details.price}</div>
                )}
              </div>
            </div>
            {extra && (
              <div className="col">
                <ul className="plant-list">
                  {details.sun && (
                    <li className="plant-list-item">
                      <div className="plant-icon plant-icon--sun">
                        <Sun />
                      </div>
                      <div className="plant-value">{details.sun}</div>
                    </li>
                  )}
                  {details.water && (
                    <li className="plant-list-item">
                      <div className="plant-icon plant-icon--water">
                        <Water />
                      </div>
                      <div className="plant-value">{details.water}</div>
                    </li>
                  )}
                  {details.height && (
                    <li className="plant-list-item">
                      <div className="plant-icon plant-icon--height">
                        <Height />
                      </div>
                      <div className="plant-value">{details.height}</div>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
          <Logo />
        </div>
      </div>
    </>
  );
}

export default PrintPreview;
