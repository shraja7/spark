import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdeaList";
import "./css/style.css";

//instantiate modal
new Modal();
const ideadForm = new IdeaForm();
// const ideaList = new IdeaList();
new IdeaList();

ideadForm.render();
// ideaList.render();
