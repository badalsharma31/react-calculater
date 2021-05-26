import React, { useState } from "react";
import Button from "../UI/Button/Button";
import "./Calculater.css";
import SideBar from "../UI/SideBar/SideBar";
import deleteIcon from "../../public/delete.svg";
const Calculater = (props) => {
  let [value, setValue] = useState(0);
  let [useValue, setUseValue] = useState(0);
  const [result, setResult] = useState(0);
  const [reset, setReset] = useState(false);
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);
  const [op, setOp] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (data) => {
    if (value === 0 || reset === true) {
      setValue(data);
      setUseValue(data);
    } else {
      setValue(value * 10 + data);
      setUseValue(value * 10 + data);
    }

    setReset(false);
  };

  const handleClear = () => {
    setValue(0);
    setResult(0);
    setReset(false);
    setCounter(0);
  };

  const handleActions = (operator) => {
    let res = result;
    if (counter === 0) {
      res = value;
      setOp(operator);
    } else {
      if (op === "add") {
        res = result + useValue;
      } else if (op === "minus") {
        res = result - useValue;
      } else if (op === "multiplye") {
        res = result * useValue;
      } else if (op === "divide") {
        res = result / useValue;
      }

      setOp(operator);
    }
    setCounter(counter + 1);
    setResult(res);
    setValue(res);
    setReset(true);
    let val = operator === "add" || operator === "minus" ? 0 : 1;
    setUseValue(val);
  };

  const handleShowMenu = (value) => {
    setShow(value);
  };

  const handleCloseMenu = () => {
    if (show) {
      setShow(!show);
    }
  };

  const handleDelete = () => {
    let val = parseInt(value / 10);
    setValue(val);
    setUseValue(val);
    setReset(false);
  };

  const changeNumber = () => {
    let val = value * -1;
    setValue(val);
    setUseValue(val);
  };

  const handlePercent = () => {
    let val = value / 100;
    setValue(val);
    setUseValue(val);
  };

  const handlePoint = () => {};

  return (
    <div className="container" onClick={() => handleCloseMenu(false)}>
      <div className="calculater">
        <div className="calculaterHeading"> calculator </div>

        {show ? (
          <SideBar
            show={show}
            setShow={(show) => handleShowMenu(show)}
          ></SideBar>
        ) : (
          ""
        )}

        <div className="calculaterHead">
          <div className="smallPaddingTop inlineContainer">
            <span
              className="smallPaddingRight"
              onClick={() => handleShowMenu(!show)}
            >
              <div className="hamburger"></div>
              <div className="hamburger"></div>
              <div className="hamburger"></div>
            </span>
            <span className="standard ">Standard</span>
          </div>
          <div>
            <input
              type="number"
              onChange={handleChange}
              className="input smallMarginTop"
              value={value}
            ></input>
          </div>
        </div>
        <div className="calculaterBody">
          <div className="buttonsContainer">
            <Button click={handleClear}>C</Button>
            <Button click={handlePercent}>%</Button>
            <Button>
              <img
                style={{ height: "30px" }}
                src={deleteIcon}
                alt="delete"
                onClick={handleDelete}
              ></img>
            </Button>
            <Button click={() => handleActions("divide")}>/</Button>
          </div>

          <div className="buttonsContainer">
            <Button click={() => handleClick(7)}>7</Button>
            <Button click={() => handleClick(8)}>8</Button>
            <Button click={() => handleClick(9)}>9</Button>
            <Button click={() => handleActions("multiplye")}>X</Button>
          </div>

          <div className="buttonsContainer">
            <Button click={() => handleClick(4)}>4</Button>
            <Button click={() => handleClick(5)}>5</Button>
            <Button click={() => handleClick(6)}>6</Button>
            <Button click={() => handleActions("minus")}>-</Button>
          </div>
          <div className="buttonsContainer">
            <Button click={() => handleClick(1)}>1</Button>
            <Button click={() => handleClick(2)}>2</Button>
            <Button click={() => handleClick(3)}>3</Button>
            <Button click={() => handleActions("add")}> +</Button>
          </div>
          <div className="buttonsContainer">
            <Button click={changeNumber}>+/-</Button>
            <Button click={() => handleClick(0)}>0</Button>
            <Button click={handlePoint}>.</Button>
            <Button click={() => handleActions("add")}>=</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculater;
