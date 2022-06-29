import fetchFromApi from "./fromApi";

const commentModal = async () => {
  const comment_Buttons = document.querySelectorAll('.Btn-comment') 
  const List = await fetchFromApi();
  comment_Buttons.forEach((butt) => {
    const ID = butt.getAttribute('id')
    const details = List[ID];
    butt.addEventListener('click', () => {
      const modal = `
      <div class="comment_modal">
        <button class="modal_close"><i class="fa-solid fa-xmark"></i></button>
        <div>
          <img src=${details.image.medium} alt=${details.name}>
          <ul class="genre">
            <li><span>Type: </span> ${details.type}</li>
            <li><span>Language: </span> ${details.language}</li>
            <li><span>Genre: </span> ${details.genres[0]}</li>
            <li><span>Runtime: </span> ${details.runtime}</li>
          </ul>
          <p>${details.summary}</p>
        </div>
        <div class="old-comments">
          <h2>Comments</h2>
          <ul></ul>
        </div>
        <div class="form">
          <form>
            <input type="text" placeholder="Your name">
            <textarea rows="10" columns="12" placeholder="Your comment please"></textarea>
            <input type="submit" value="Comment">
          </form>
        </div>
      </div>
      `
      document.querySelector('#modal').innerHTML= modal
    })
  })
}

export default commentModal
