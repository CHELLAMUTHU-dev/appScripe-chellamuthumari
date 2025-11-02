import { useState } from "react";

export default function Filter() {
  const [openFilter, setOpenFilter] = useState(null);

  // List of filter categories
  const filters = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  return (
    <>
      <div className="customizable-checkbox-container">
        <input type="checkbox" id="customize" />
        <h4>CUSTOMIZABLE</h4>
      </div>

      <hr />

      {filters.map((filterTitle, index) => (
        <div key={index} className="filter-content-section">
          <div
            className="filter-content"
            onClick={() =>
              setOpenFilter(openFilter === filterTitle ? null : filterTitle)
            }
            style={{ cursor: "pointer" }}
          >
            <h4>{filterTitle}</h4>
            <img src="/arrow-down.png" alt="arrow" />
          </div>
          <p>ALL</p>

          {openFilter === filterTitle && (
            <div className="filter-dropdown-content">
              <span>Unselect all</span>
              <div className="filter-checkbox">
                <input type="checkbox" name="" id="option1" />
                <label htmlFor="option1">Option 1</label>
              </div>
              <div className="filter-checkbox">
                <input type="checkbox" name="" id="option2" />
                <label htmlFor="option2">Option 2</label>
              </div>
              <div className="filter-checkbox">
                <input type="checkbox" name="" id="option3" />
                <label htmlFor="option3">Option 3</label>
              </div>
            </div>
          )}

          <hr />
        </div>
      ))}
    </>
  );
}
