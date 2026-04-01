import React from 'react';
import { toast } from 'react-toastify';
import noImage from '../../assets/alert-error.png';

const AddedCard = ({cards, setCard}) => {

    const totalPrice = cards.reduce((sum, item) => sum + item.price, 0);
   
    const handleProceed = () => {
        setCard([]);
        if(cards.length === 0){
            toast.warn("No Card");
        }else{
            toast.success("Proceed to Checkout !")
    };
        }

    const handleDelete = (item) => {
        const filteredArray = cards.filter(res => res.id !== item.id);
        setCard(filteredArray)
        toast.error("Card Delete")
    };
    
    return (
        <div className='container mx-auto rounded-2xl shadow-xl p-6 space-y-3 mt-10 my-10'>
            <h1 className='font-bold text-2xl'>Your Card</h1>
                
               {
                cards.length === 0 ? <div className='grid justify-center'>
                    <img src={noImage} alt="Image" className='pl-12' />
                    <p className='text-2xl text-red-400'>Card Is Not Empty</p>
                </div> : 
                <>
                       {cards.map(item => <div key={item.id} className='flex justify-between items-center shadow p-5 bg-blue-50'>
                    <div className='flex gap-3 items-center'>
                        <img src={item.icon} alt={item.name} />
                        <div>
                       <h1 className='font-bold text-2xl'>{item.name}</h1>
                       <p className='font-semibold'>${item.price}</p> 
                    </div>
                    </div>

                    <div>
                        <button onClick={() => handleDelete(item)} className='btn btn-error'>Remove</button>
                    </div>
                    
                </div>)
            }

                </>
               } 

             
    <div className='container mx-auto rounded-2xl p-6 space-y-3 mt-5'>
        <div className='flex justify-between p-2'>
            <h3 className='font-semibold text-xl'>Total</h3>
            <span className='font-bold'>${totalPrice}</span>
        </div>
        <button onClick={handleProceed} className='btn bg-violet-500 btn-block rounded-full p-6 text-white'>Proceed to Checkout</button>
    </div>

        </div>
          
    );
};

export default AddedCard;