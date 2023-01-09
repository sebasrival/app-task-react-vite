import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex w-full h-15 justify-between items-center mb-5 bg-slate-900 sticky top-0 z-50 pt-10 pb-5">
      <button className='text-base font-bold' onClick={() => navigate('/')}>App Task</button>
      <button className="bg-green-700 text-base p-1 rounded-md w-32 flex justify-center items center px-3 font-bold" onClick={() => { navigate('/add') }}><AiOutlineAppstoreAdd className='m-auto' />Crear Tarea</button>
    </div>
  );
};
