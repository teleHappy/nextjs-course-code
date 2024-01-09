import React from "react";

function Temp(props) {
  return (
    <form>
      <div>
        <div>
          <label htmlFor="year">Year</label>
          <select name="year" id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="year">Year</label>
          <select name="year" id="year"></select>
        </div>
      </div>

      <div></div>
    </form>
  );
}

export default Temp;
