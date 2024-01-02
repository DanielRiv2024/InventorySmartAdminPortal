import { FaPlus } from 'react-icons/fa';

export default function AddProduct(){
    return(
        <div>
        <button style={{backgroundColor:"#ff4a00"}} className="py-[4px] px-[10px] text-white font-bold rounded-md">
            <div className='flex flex-row items-center'>
            <FaPlus style={{ marginRight: '8px' }} /> 
            <p className='text-[14px]'>Add</p>
            </div>
        </button>
      </div>
    )
}