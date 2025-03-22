const form = document.getElementById("form");
const button = document.getElementById("btn");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;

    button.disabled = true;

    try{
        await axios.post(`http://localhost:3000/students`,{name,surname});
        // console.log(response.data);
        alert("Student added successfully");
    }
    catch (error){
        console.log(`Error Adding a new student: ${error}`);
    }
    finally {
        button.disabled = false;
    }
});
window.addEventListener("load", async function load() {
    const students = await axios.get(`http://localhost:3000/students`);
    const list = document.getElementById("list");
    students.data.forEach(student => {
        const li = document.createElement("li");
        li.id = "li";

        const textNode = document.createTextNode(`Name: ${student.name}, Surname: ${student.surname} `);
        li.appendChild(textNode);

        const button = document.createElement("button");
        const id = student._id;
        // console.log(id);

        button.textContent = "Delete Student";
        button.id = `${student._id}`
        li.appendChild(button);

        list.appendChild(li);

        const deleteBtn = document.getElementById(`${student._id}`);
        deleteBtn.addEventListener( "click", async (event) => {
            //event.preventDefault();
            
            const id = student._id;
            deleteBtn.disabled = true;
            // console.log(id);
            try{
                await axios.delete(`http://localhost:3000/students/${id}`);
                alert("Student Deleted successfully");
            }
            catch (error){
                console.log(`Error Deleting the student: ${error}`);
            }
            finally {
                deleteBtn.disabled = false;
            }
        });
    });
    // console.log(students.data);
});