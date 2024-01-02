import { FaClipboard  } from 'react-icons/fa';
export default function ReportProducts() {
    return(
        <div>
        <button style={{backgroundColor:"black"}} className="py-[4px] px-[10px] text-white font-bold rounded-md">
            <div className='flex flex-row items-center'>
            <FaClipboard  style={{ marginRight: '8px' }} /> 
            <p className='text-[14px]'>Download</p>
            </div>
        </button>
      </div>
    )
}