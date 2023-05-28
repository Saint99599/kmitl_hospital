import { employeeArray } from '../data/employeeData';
import Card from './card'

function employeeList() {
  return (
    <div className='flex justify-center'> 
        <div className='flex flex-wrap justify-between w-[1006px]'>
            {employeeArray.map((employee, idx) => (
            <div className='w-fit drop-shadow-2xl rounded-xl' key={idx}>
                <Card employee={employee}/>
            </div>
            ))}
        </div>
    </div> 
)
}

export default employeeList;
