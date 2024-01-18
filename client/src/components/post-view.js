export class PostView {
  #posts;
  #postsContainer;

  constructor(posts) {
    this.#postsContainer = document.querySelector("#posts");
    this.#posts = posts;
  }

  render() {
    this.#postsContainer.innerHTML = "";
    this.#posts.forEach(post => {
      const postItem = this.#createPost(post);
      this.#postsContainer.appendChild(postItem);
    });
  }

  #createPost = (post) => {
    const postItem = document.createElement("div");
    postItem.classList.add("post", "bg-light", "rounded-2", "p-4", "mb-4");
    postItem.id = post.id;
    postItem.innerHTML = `
        <div class="post-header">
          <h2>${post.title}</h2>
          <p class="post-location fs-6 mb-0">${post.location}</p>
          <p class="post-date">${post.date}</p>
          <button class="post-button-edit btn fs-4" data-bs-toggle="modal" data-bs-target="#postEditModal">
            <i class="bi bi-three-dots"></i>
          </button>
        </div>
        <div class="post-description">
          <p>${post.description}</p>
        </div>
        <div class="post-images rounded-2">
          <img src="https://t4.ftcdn.net/jpg/05/36/57/37/360_F_536573741_FxjIwtgaTzDdy6mRAg6AhFxOjQi08dV5.jpg">
          <img src="https://vinusimages.co/portfolio/family/eg7a8899/">
          <img src="https://hips.hearstapps.com/hmg-prod/images/family-quotes-1573234196.jpg">
        </div>
    `;

    return postItem;
  }
}