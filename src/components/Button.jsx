import React from 'react';

const Button = (props) => {


    const text = props.text;
    return (
        <div>
             <button className="bg-orange-100 my-2 text-gray-700 px-8 py-2 border border-transparent hover:border-orange-100 hover:bg-transparent hover:text-gray-100 rounded-lg">{text}</button>
        </div>
    );
};

export default Button;