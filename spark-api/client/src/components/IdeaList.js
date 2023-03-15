import ideasApi from "../services/ideasApi";
class IdeaList {
  constructor() {
    this._ideaListEl = document.querySelector("#idea-list");

    this._ideas = [];
    this.getIdeas();
    //set set for ideas
    this._validTags = new Set();
    this._validTags.add("technology");
    this._validTags.add("business");
    this._validTags.add("health");
    this._validTags.add("education");
    this._validTags.add("software");
    this._validTags.add("investments");
  }

  addEventListeners() {
    this._ideaListEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-times")) {
        e.stopImmediatePropagation();
        const ideaId = e.target.parentElement.parentElement.dataset.id;
        this.deleteIdea(ideaId);
      }
    });
  }

  async getIdeas() {
    try {
      const res = await ideasApi.getIdeas();
      this._ideas = res.data.data;
      console.log(this._ideas);
      this.render();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteIdea(ideaId) {
    try {
      //delete idea from server
      await ideasApi.deleteIdea(ideaId);
      //remove from dom list
      this._ideas = this._ideas.filter((idea) => idea._id !== ideaId);
      //rerender list after deleting idea
      this.getIdeas();
    } catch (error) {
      alert("cannot delete this resource ");
    }
  }
  addIdeaToList(idea) {
    this._ideas.push(idea);
    this.render();
  }

  getTagClass(tag) {
    //get correct class to add to tag
    tag = tag.toLowerCase();
    let tagClass = "";

    if (this._validTags.has(tag)) {
      tagClass = `tag-${tag}`;
    } else {
      tagClass = ``;
    }
    return tagClass;
  }

  render() {
    //user map on array to create card for each idea
    this._ideaListEl.innerHTML = this._ideas
      .map((idea) => {
        const tagClass = this.getTagClass(idea.tag);
        return `  <div class="card" data-id="${idea._id}">
        <button class="delete"><i class="fas fa-times"></i></button>
        <h3>
          ${idea.text}
        </h3>
        <p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
        <p>
          Posted on <span class="date">${idea.date}</span> by
          <span class="author">${idea.username}</span>
        </p>
      </div>
    
    
        `;
      })
      .join("");
    //add event listeners
    this.addEventListeners();
  }
}

export default IdeaList;
