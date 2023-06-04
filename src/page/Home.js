import EmployeeList from "../component/EmployeeList";

function Home() {
  return (
    <div className='flex flex-col h-screen pt-20'>
      <div className="border-l-8 border-orange-600 pl-1.5 mb-9 ml-40">
        <h1 className="font-roboto font-semibold text-4xl">ค้นหาแพทย์</h1>
      </div>
      <EmployeeList/>
    </div>
  );
}

export default Home;
