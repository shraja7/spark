class IdeaList {
  constructor() {
    this._ideaListEl = document.querySelector("#idea-list");

    this._ideas = [
      {
        id: 1,
        text: "Idea 1",
        tag: "tag 1",
        username: "user 1",
        date: "date 1",
      },
      {
        id: 2,
        text: "Idea 2",
        tag: "tag 2",
        username: "user 2",
        date: "date 2",
      },
      {
        id: 3,
        text: "Idea 3",
        tag: "tag 3",
        username: "user 3",
        date: "date 3",
      },
    ];
  }

  render() {
    //user map on array to create card for each idea
    this._ideaListEl.innerHTML = this._ideas
      .map((idea) => {
        return `  <div class="card">
        <button class="delete"><i class="fas fa-times"></i></button>
        <h3>
          ${idea.text}
        </h3>
        <p class="tag tag-technology">${idea.tag.toUpperCase()}</p>
        <p>
          Posted on <span class="date">${idea.date}</span> by
          <span class="author">${idea.username}</span>
        </p>
      </div>
    
    
        `;
      })
      .join("");
  }
}

export default IdeaList;
