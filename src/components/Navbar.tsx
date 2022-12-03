import { AiOutlineAppstoreAdd } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <div className="flex w-full h-12 justify-between items-center mb-12">
      <div>App Task</div>
      <button className="bg-green-700 text-sm p-1 rounded-md w-24 flex justify-center items center"><AiOutlineAppstoreAdd className='m-auto'/>Crear Tarea</button>
    </div>
  );
};
