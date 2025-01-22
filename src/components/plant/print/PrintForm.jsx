import { Form } from "react-router";

function PrintForm({ details, setDetails, isSubmitting, errors = {} }) {
  function handleInputChange(e) {
    const { name, value, checked } = e.target;

    if (name === "colors") {
      setDetails((prev) => ({ ...prev, colors: checked }));
      return;
    }

    setDetails((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <Form method="post" id="print-form" className="form">
      <div className="form__group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          name="name"
          onChange={handleInputChange}
          defaultValue={details.name}
        />
        {errors?.name && <p className="form__error">{errors.name}</p>}
      </div>
      <div className="form__group">
        <label htmlFor="name_type">Latin name</label>
        <input
          id="name_type"
          type="text"
          name="name_type"
          onChange={handleInputChange}
          defaultValue={details.name_type}
        />
        {errors?.name_type && <p className="form__error">{errors.name_type}</p>}
      </div>
      <div className="form__group">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          step={0.01}
          required
          name="price"
          onChange={handleInputChange}
          defaultValue={details.price}
        />
        {errors?.price && <p className="form__error">{errors.price}</p>}
      </div>
      <div className="form__group">
        <label htmlFor="price_sale">Sale Price</label>
        <input
          id="price_sale"
          type="number"
          step={0.01}
          name="price_sale"
          onChange={handleInputChange}
          defaultValue={details.price_sale}
        />
        {errors?.price_sale && (
          <p className="form__error">{errors.price_sale}</p>
        )}
      </div>
      <div className="form__group">
        <label htmlFor="sun">Environment (sun, shade)</label>
        <input
          id="sun"
          type="text"
          name="sun"
          onChange={handleInputChange}
          defaultValue={details.sun}
        />
        {errors?.sun && <p className="form__error">{errors.sun}</p>}
      </div>
      <div className="form__group">
        <label htmlFor="water">Water</label>
        <input
          id="water"
          type="text"
          name="water"
          onChange={handleInputChange}
          defaultValue={details.water}
        />
        {errors?.water && <p className="form__error">{errors.water}</p>}
      </div>
      <div className="form__group">
        <label htmlFor="height">Height</label>
        <input
          id="height"
          type="text"
          name="height"
          onChange={handleInputChange}
          defaultValue={details.height}
        />
        {errors?.height && <p className="form__error">{errors.height}</p>}
      </div>
      <div className="input__group">
        <input
          id="colors"
          type="checkbox"
          name="colors"
          onChange={handleInputChange}
          defaultValue={details.colors}
        />
        <label htmlFor="colors">Colors?</label>
        {errors?.colors && <p className="form__error">{errors.colors}</p>}
      </div>

      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Generating print..." : "Generate Print"}
      </button>
    </Form>
  );
}

export default PrintForm;
