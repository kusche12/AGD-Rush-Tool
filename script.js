function doFunction() {
  let name = document.getElementById('name').value;
  if (name) {
    fetch('./data/data.json')
      .then((response) => response.json())
      .then((json) => renderPosts(json.Sheet1, name));
  }
}

function renderPosts(data, name) {
  let notes = [];

  // Create a list of notes according to the name
  data.forEach((post) => {
    if (post.pnmName === name) {
      notes.push(post.note);
    }
  });
  let parent = document.getElementById('list');

  // Remove the previous search notes
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  // Render the correct child elements for the app
  notes.forEach((note) => {
    renderSinglePost(note);
  });
}

function renderSinglePost(note) {
  const div = document.createElement('li');
  div.textContent = note;
  div.setAttribute('class', 'note');
  document.getElementById('list').appendChild(div);
}
