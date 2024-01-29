import React, { useState } from "react";
import ComponentOne from "../components/ComponentOne";
import ComponentTwo from "../components/ComponentTwo";
import ComponentThree from "../components/ComponentThree";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
// import ComponentThree from "./../components/ComponentThree";
import ADD_NEW_ELEMENT from "../redux/action";

const PageOne = () => {
  const [image, setImage] = useState([1]);
  const newState = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div>
        <div>{JSON.stringify(newState?.numbers)}</div>
        <button
          onClick={() => {
            dispatch({ type: ADD_NEW_ELEMENT });
          }}
        >
          Change Global State
        </button>
      </div>
      <div className="text-5xl">Its a Page One</div>
      <div className="flex justify-between m-6">
        <ComponentOne child={image} setChild={setImage} />
        <ComponentTwo child={image} setChild={setImage} />
        <ComponentThree child={image} setChild={setImage} />
      </div>
    </>
  );
};

export default PageOne;
