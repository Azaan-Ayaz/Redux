import React, { useState } from "react";

const ComponentThree = (props) => {
  const max = props.child;
  const setMax = props.setChild;
  const [number, setNumber] = useState([]);
  return (
    <>
      <div className="flex flex-col">
        {/* props */}
        <div>
          <div>Parent State</div>
          <div>
            <button
              onClick={() => {
                setMax([...max, max.length + 1]);
              }}
            >
              Click Here
            </button>
          </div>
          <div>
            {max.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        </div>

        <div className="text-xl">Component 3</div>
        <div className="flex flex-col">
          <button
            onClick={() => {
              setNumber([...number, number.length + 1]);
            }}
          >
            Click Here
          </button>
        </div>
        <div className="">
          {number.map((item, index) => {
            return (
              <img
                className="w-16 h-16 flex flex-col flex-wrap"
                key={item}
                src={`https://api.dicebear.com/7.x/icons/svg?seed=${
                  item + "i"
                }`}
                alt="avatar"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ComponentThree;
