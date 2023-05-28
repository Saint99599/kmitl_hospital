const employeeArray = [
    {
        id: 1,
        fname: "root",
        lname: "qwerty",
        department: "อายุรกรรม",
        image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000",
        language: ["Thai", "English"]
    },
    {
        id: 2,
        fname: "John",
        lname: "qwerty",
        department: "อายุรกรรม",
        image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000",
        language: ["Thai", "English"]
    },
];

function getEmployeeData(id) {
    let employeeData = employeeArray.find(employee => employee.id === id);

    if (employeeData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return employeeData;
}

export { employeeArray, getEmployeeData};