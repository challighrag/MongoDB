const form = document.getElementById("form");
const button = document.getElementById("btn");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;

    button.disabled = true;

    try{
        const response = await axios.post(`http://localhost:3000/students`,{name,surname});
        console.log(response.data);
        alert("Student added successfully");
    }
    catch (error){
        console.log(`Error Adding a new student: ${error}`);
    }
    finally {
        button.disabled = false;
    }
});