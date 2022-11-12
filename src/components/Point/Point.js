import React from "react";

export default function Point({ list, remove }) {
  return (
    <>
      <section className="point">
        {list.length > 0 ? (
          <ul className="point__box">
            {list.map((entry, index) => (
              <div className="point__field">
                <li className="point__field-text" key={index}>                  
                  {entry}
                </li>
                <button
                  className="point__field-delete-button point__field-delete-button_active"
                  onClick={() => {
                    remove(entry);
                  }}
                ></button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>No task found</p>
          </div>
        )}
      </section>
    </>
  );
}

