// js files
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
// sass files
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

alert("I EXIST");
console.log(checkForName);
document.getElementById("form").addEventListener("submit", handleSubmit);
console.log("CHANGE!!");



