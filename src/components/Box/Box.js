import React from "react";

export default function Box({ addTodo, setInputText, inputText }) {
  
  function changeInputText(evt) {
    setInputText(evt.target.value);
  }

  return (
    <section className="box">
      <form className="box__box">
        <h2 className="box__title">TODO LIST</h2>
        <div className="box__list">
          <div className="box__points">
            <div className="box__points_input">
              <input
                className="box__points_input-field"
                type="text"
                placeholder="todo point"
                name="inputText"
                value={inputText}
                onChange={changeInputText}
              />
              <button
                className="box__points_button-submit"
                type="button"                
                onClick={addTodo}
              >
                Добавить
              </button>
            </div>            
          </div>
        </div>
      </form>
    </section>
  );
}
