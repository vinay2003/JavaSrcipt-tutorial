const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    // first approach
    /*
    button.addEventListener("click", (event) => {
        const id = event.target.id;
        console.log(id);
        if (id === "red-200") {
            body.className = `bg-red-500 flex flex-col items-center min-h-screen transition-colors duration-500 justify-between couser-pointer`;
        }
        if (id === "blue-200") {
            body.className = `bg-blue-500 flex flex-col items-center min-h-screen transition-colors duration-500 justify-between couser-pointer`;
        }
        if (id === "green-200") {
            body.className = `bg-green-500 flex flex-col items-center min-h-screen transition-colors duration-500 justify-between couser-pointer`;
        }
        if (id === "yellow-200") {
            body.className = `bg-yellow-500 flex flex-col items-center min-h-screen transition-colors duration-500 justify-between couser-pointer`;
        }
        if (id === "purple-200") {
            body.className = `bg-purple-500 flex flex-col items-center min-h-screen transition-colors duration-500 justify-between couser-pointer`;
        }
    })
     */

    // second approach
    button.addEventListener("click", () => {
        const color = button.id;
         console.log(color);
        body.className = `bg-${color} flex flex-col items-center min-h-screen transition-colors duration-500 justify-between couser-pointer`;
    });
    }
);