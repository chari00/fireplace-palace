import "./Form.css";
import { useReducer, useState } from "react";

const initialState = {
  formData: {
    fullName: "",
    postcode: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  },
  error: false,
  isLoading: false,
  isSubmitted: false,
};
//<----------------------------------------------------------------reducer function starts here---------------------------------------------------------------->
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FULL_NAME":
      return {
        ...state,
        formData: {
          ...state.formData,
          fullName: action.payload,
        },
      };
    case "SET_POSTCODE":
      return {
        ...state,
        formData: {
          ...state.formData,
          postcode: action.payload,
        },
      };
    case "SET_ADDRESS":
      return {
        ...state,
        formData: {
          ...state.formData,
          address: action.payload,
        },
      };
    case "SET_CITY":
      return {
        ...state,
        formData: {
          ...state.formData,
          city: action.payload,
        },
      };
    case "SET_PHONE":
      return {
        ...state,
        formData: {
          ...state.formData,
          phone: action.payload,
        },
      };
    case "SET_EMAIL":
      return {
        ...state,
        formData: {
          ...state.formData,
          email: action.payload,
        },
      };
    case "SUBMITTED":
      return {
        ...state,
        isSubmitted: true,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "REQUEST_SENT":
      return {
        ...state,
        isLoading: false,
        isSubmitted: true,
      };
    case "ERROR":
      return {
        ...state,
        error: true,
      };
    case "RESET_ERROR":
      return {
        ...state,
        error: false,
      };
    default:
      console.log("Action type not recognized:", action.type);
      return state;
  }
};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  //<----------------------------------------------------------------handleChange starts here---------------------------------------------------------------->
  function handleChange(e) {
    if (e.target.name === "fullName") {
      dispatch({ type: "SET_FULL_NAME", payload: e.target.value });
    } else if (e.target.name === "postcode") {
      dispatch({ type: "SET_POSTCODE", payload: e.target.value });
    } else if (e.target.name === "address") {
      dispatch({ type: "SET_ADDRESS", payload: e.target.value });
    } else if (e.target.name === "city") {
      dispatch({ type: "SET_CITY", payload: e.target.value });
    } else if (e.target.name === "phone") {
      dispatch({ type: "SET_PHONE", payload: e.target.value });
      if (e.target.value.length < 11) {
        dispatch({ type: "ERROR" });
      } else {
        dispatch({ type: "RESET_ERROR" });
      }
    } else if (e.target.name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailPattern.test(e.target.value);

      dispatch({ type: "SET_EMAIL", payload: e.target.value });

      if (!isValid) {
        dispatch({ type: "ERROR" });
      } else {
        dispatch({ type: "RESET_ERROR" });
      }
    }
  }
  //<----------------------------------------------------------------handleSubmit starts here---------------------------------------------------------------->
  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "LOADING" });
    setTimeout(() => {
      if (
        !state.formData.fullName ||
        !state.formData.postcode ||
        !state.formData.address ||
        !state.formData.city ||
        !state.formData.phone ||
        !state.formData.email
      ) {
        dispatch({ type: "ERROR" });
      } else {
        dispatch({ type: "REQUEST_SENT" });
        dispatch({ type: "SUBMITTED" });
      }
    }, 2000);
  }
  //<----------------------------------------------------------------The form starts here---------------------------------------------------------------->
  return (
    <div>
      <h1 className="title1">Design Booking</h1>
      <p>Personal Information:</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="div1">
          <ul>
            <li>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={state.formData.fullName}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                type="text"
                name="postcode"
                value={state.formData.postcode}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="address">House/Flat Number and Street Name</label>
              <input
                id="address"
                type="text"
                name="address"
                value={state.formData.address}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                value={state.formData.city}
                onChange={handleChange}
              ></input>
            </li>
          </ul>
        </div>
        <p className="divide">Contact Information:</p>
        <div className="div2">
          <ul>
            <li>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={state.formData.phone}
                onChange={handleChange}
              ></input>
              {state.error ? (
                <p id="err">*Phone number must be at least 11 digits long*</p>
              ) : null}
            </li>
            <li>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="text"
                name="email"
                value={state.formData.email}
                onChange={handleChange}
              ></input>
              {state.error ? (
                <p id="err">*Email address must contain `@.com`*</p>
              ) : null}
            </li>
          </ul>
        </div>
        <button
          className={state.isSubmitted ? "successBtn" : "btn"}
          type="submit"
          disabled={
            state.isLoading ||
            state.isSubmitted ||
            !state.formData.fullName ||
            !state.formData.postcode ||
            !state.formData.address ||
            !state.formData.city ||
            !state.formData.phone ||
            !state.formData.email
          }
        >
          {state.isLoading
            ? "Submitting..."
            : state.isSubmitted
            ? "Request Sent"
            : "Request Design Consultation"}
        </button>
      </form>
    </div>
  );
}
