import React, { useState } from 'react';

const Card = ({model}) => {
const [addCard, setAddCard] = useState(false);

const handleAddCard = () =>{
  setAddCard(true); 
}
    

    return (
        <div className='p-3'>
               <div className="w-96  shadow-sm rounded-2xl">
  <div className="card-body relative">
    <span className="badge badge-md badge-warning absolute top-2 right-2">{model.tagType}</span>

    <img src={model.icon} alt={model.name} className='w-10 h-10' />
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">{model.name}</h2>
      <p>{model.description}</p>
      <span className="text-xl"><span className='font-bold text-3xl'>${model.price}</span>/{model.period}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {model.features.map((feature,index)=>(
        <li key={index} className='flex items-center gap-2'><span>{feature}</span></li>
      ))}
    </ul>
    <div className="mt-6">
      <button onClick={handleAddCard} className={`btn btn-block rounded-full text-white ${addCard ? 'bg-green-400' : 'bg-violet-500'}`}>
        {addCard ? "Added to Card" : "Buy Now"}
      </button>
    </div>
  </div>
            </div>
            </div>
    );
};

export default Card;