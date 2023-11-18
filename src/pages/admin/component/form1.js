import React, { useState } from "react";
import Select from "react-select";
const p_cat = [
  {
    label: "Kids",
    sub_cat: ["shirt", "watch", "toys"],
  },
  {
    label: "Adult",
    sub_cat: ["make ups", "sex toys", "machines"],
  },
];

const Form1 = ({
  err,
  iValue,
  setIValue,
  handleUpload,
  handleRemove,
  setErr,
  imgArr,
}) => {
  const [subCat, setSubCat] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIValue((prev) => {
      return { ...prev, [name]: value };
    });
    setErr((prev) => {
      return { ...prev, [name]: "" };
    });
  };

  return (
    <div>
      <div className="form-floating mb-4">
        <input
          type="text"
          className={
            err?.name?.length > 0 ? "form-control is-invalid" : "form-control"
          }
          id="name"
          name="name"
          value={iValue.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <label htmlFor="name">Product Name</label>
        {err?.name?.length > 0 && (
          <div className="invalid-feedback"> {err.name}</div>
        )}
      </div>
      <div className="form-floating mb-4">
        <input
          type="text"
          className={
            err?.brand?.length > 0 ? "form-control is-invalid" : "form-control"
          }
          id="brand"
          name="brand"
          value={iValue.brand}
          onChange={handleChange}
          placeholder="Brand Name"
        />
        <label htmlFor="brand">Brand Name</label>
        {err?.brand?.length > 0 && (
          <div className="invalid-feedback"> {err.brand}</div>
        )}
      </div>
      <div className="form-floating mb-4">
        <input
          type="number"
          className={
            err?.price?.length > 0 ? "form-control is-invalid" : "form-control"
          }
          id="price"
          name="price"
          value={iValue.price}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <label htmlFor="price">Product Price</label>
        {err?.price?.length > 0 && (
          <div className="invalid-feedback"> {err.price}</div>
        )}
      </div>

      <div className="form-floating mb-4">
        <input
          type="number"
          className={
            err?.unit?.length > 0 ? "form-control is-invalid" : "form-control"
          }
          id="unit"
          name="unit"
          value={iValue.unit}
          onChange={handleChange}
          placeholder="Available Units"
        />
        <label htmlFor="unit">Avialable Units</label>
        {err?.unit?.length > 0 && (
          <div className="invalid-feedback"> {err.unit}</div>
        )}
      </div>
      <div className="form-floating mb-4">
        <Select
          name="category"
          onMenuOpen={() => setSubCat([])}
          // value=
          placeholder={iValue.category}
          className={err?.category?.length > 0 ? "is-invalid" : ""}
          id="category"
          onChange={(s) => {
            setIValue((prev) => {
              return { ...prev, ["category"]: s?.value, ["sub_cat"]: "" };
            });
            const sub_res = p_cat.find((k) => k.label === s.value);
            setSubCat(sub_res.sub_cat);
          }}
          options={p_cat.map((item) => ({
            value: item.label,
            label: item.label,
          }))}
        />
        <label htmlFor="category">Product Category</label>
        {err?.category?.length > 0 ? (
          <div className="invalid-feedback"> {err.category}</div>
        ) : (
          ""
        )}
      </div>
      {subCat.length > 0 && (
        <div className="form-floating mb-4">
          <Select
            name="sub_cat"
            placeholder={iValue.sub_cat}
            id="sub_cat"
            className={err?.category?.length > 0 ? "is-invalid" : ""}
            onChange={(s) => {
              setIValue((prev) => {
                return { ...prev, ["sub_cat"]: s?.value };
              });
            }}
            options={subCat.map((item) => ({ value: item, label: item }))}
          />
          <label htmlFor="sub_cat">Sub Category</label>
          {err?.sub_cat?.length > 0 && (
            <div className="invalid-feedback"> {err.sub_cat}</div>
          )}
        </div>
      )}
      <div className="form-floating mb-4">
        <input
          type="number"
          className={
            err?.discount?.length > 0
              ? "form-control is-invalid"
              : "form-control"
          }
          id="discount"
          name="discount"
          onChange={handleChange}
          placeholder="Product Discount"
        />
        <label htmlFor="discount">
          Product Discount (<i>optional</i>)
        </label>
        {err?.discount?.length > 0 && (
          <div className="invalid-feedback"> {err.discount}</div>
        )}
      </div>
      {/* preview img */}
      <div className="d-flex flex-wrap">
        {imgArr?.map((item, index) => {
          return (
            <div className="col-3 p-1 preview-img-cont" key={index}>
              <img
                // src={URL.createObjectURL(item)}
                src={item}
                alt=""
                className="border-1 w-100"
              />
              <div
                className="upload__img-close"
                onClick={handleRemove}
                data-index={index}
              ></div>
            </div>
          );
        })}
      </div>
      <div className=" mb-4">
        <label className="upload-label" htmlFor="upload">
          <div className="text-center">
            <i className="iconly-Paper-Upload" style={{ fontSize: "2rem" }}></i>
            <div>Upload Product Image (Maximum of 4 image)</div>
          </div>
          <input
            type="file"
            className="d-none"
            id="upload"
            onChange={handleUpload}
            accept="image/*"
            multiple
          />
        </label>
      </div>
    </div>
  );
};

export default Form1;
