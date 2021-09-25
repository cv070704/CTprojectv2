const songs = [
  {
    songName: "Halo",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 8607832,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=bnVUHWCynig",
    img: "https://upload.wikimedia.org/wikipedia/en/a/ac/Beyonce_-_Halo.png"
  },
  {
    songName: "Irreplaceable",
    albumTitle: "B'Day",
    playCount: 4914414,
    releaseYear: 2006,
    youTubeLink: "https://www.youtube.com/watch?v=2EwViQxSJJQ",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Irreplaceable.png/220px-Irreplaceable.png"
  },
  {
    songName: "Single Ladies (Put a Ring on It)",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 5203841,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=4m1EFMoRFvY",
    img:
      "https://static.wikia.nocookie.net/beyoncepedia/images/b/b0/Single_Ladies_%28Put_a_Ring_on_It%29_Single_Cover.jpg/revision/latest?cb=20190622175434"
  },
  {
    songName: "Crazy In Love",
    albumTitle: "Dangerously In Love",
    playCount: 3752084,
    releaseYear: 2003,
    youTubeLink: "https://www.youtube.com/watch?v=ViwtNLUqkMY",
    img:
      "https://www.songmeaningsandfacts.com/wp-content/uploads/2019/05/Beyonce-Single-Ladies-Put-A-Ring-On-It.png"
  },
  {
    songName: "If I Were A Boy",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 4562013,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=AWpsOqh8q0M",
    img:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Beyonce_-_If_I_Were_a_Boy_%28single%29.png"
  },
  {
    songName: "Sweet Dreams",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 4940104,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=JlxByc0-V40",
    img:
      "https://m.media-amazon.com/images/M/MV5BZjZmM2Q1Y2EtNWNlZi00Mjk2LWI5ZDktMzBhOTAxYjE4YTVkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg"
  }
];
const mainDiv = document.querySelector(".row");
const songNameInput = document.getElementById("songNameInput");
const albumTitleInput = document.getElementById("albumTitleInput");
const releaseYearInput = document.getElementById("releaseYearInput");
const youTubeLinkInput = document.getElementById("youTubeLinkInput");
const playCountInput = document.getElementById("playCountInput");
const imageInput = document.getElementById("imageInput");
const createButton = document.getElementById("addSong");
let updateSongIndexArray;
const updateButton = document.getElementById("updateSong");

function renderData() {
  mainDiv.innerHTML = "";
  for (let songIndex = 0; songIndex < songs.length; songIndex++) {
    const songListItem = document.createElement("div");
    songListItem.className = "col-sm-4 d-flex";
    songListItem.innerHTML = `
    <div class="card flex-fill mb-3">
    <img class="card-img-top" src="${songs[songIndex].img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${songs[songIndex].songName}</h5>
    </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Album Title: ${songs[songIndex].albumTitle}</li>
              <li class="list-group-item">Release Year: ${songs[songIndex].releaseYear}</li>
              <li class="list-group-item">Play Count: ${songs[songIndex].playCount}</li>
              <li class="list-group-item"><a href="${songs[songIndex].youTubeLink}" target="_blank">YouTube Video</a></li>
            </ul>
    <h2>${songs[songIndex].songName}</h2>
    <img src="${songs[songIndex].img}">
    <p>${songs[songIndex].albumTitle}</p>
    <p>Release Year: ${songs[songIndex].releaseYear}</p>
    <p>Playcount: ${songs[songIndex].playCount}</p>
    <a href=${songs[songIndex].youTubeLink}>YouTube Link</a>
    <br>
    <button class="btn btn-danger deleteButton--${songIndex}">Delete</button>
    <button class="btn btn-secondary updateButton--${songIndex}">Update</button>  
</div>
    `;
    mainDiv.append(songListItem);
  }
  //delete logic
  const deleteButtons = document.querySelectorAll(
    '[class^="btn btn-danger deleteButton--"]'
  );
  //console.log(deleteButtons);
  for (let btn of deleteButtons) {
    btn.addEventListener("click", function () {
      var buttonIndexArray = btn.className.split(
        "btn btn-danger deleteButton--"
      );
      console.log(buttonIndexArray);
      songs.splice(buttonIndexArray[1], 1);
      renderData();
    });
  }
  //create logic
  function createData() {
    const songName = songNameInput.value;
    console.log("songName", songName);
    const albumTitle = albumTitleInput.value;
    console.log("albumTitle", albumTitle);
    const releaseYear = releaseYearInput.value;
    console.log("releaseYear", releaseYear);
    const youTubeLink = youTubeLinkInput.value;
    console.log("youTubeLink: ", youTubeLink);
    const playCount = playCountInput.value;
    console.log("playCount", playCount);
    const img = imageInput.value;
    console.log("image address", img);
    const newSong = {
      songName,
      albumTitle,
      releaseYear,
      youTubeLink,
      playCount,
      img
    };
    console.log("new song", newSong);
    songs.push(newSong);
    songNameInput.value = "";
    albumTitleInput.value = "";
    releaseYearInput.value = "";
    youTubeLinkInput.value = "";
    playCountInput.value = "";
    imageInput.value = "";
    renderData();
    createButton.removeEventListener("click", createData);
  }
  createButton.addEventListener("click", createData);
}
renderData();
//Update Part A
const updateButtons = document.querySelectorAll(
  '[class^="btn btn-secondary updateButton--"]'
);
for (let btn of updateButtons) {
  btn.addEventListener("click", () => {
    //get index number from the class
    updateSongIndexArray = btn.className.split(
      "btn btn-secondary updateButton--"
    );
    console.log(updateSongIndexArray);
    //get song item from array
    var updateSongInfo = songs[updateSongIndexArray[1]];
    console.log(updateSongInfo);
    songNameInput.value = updateSongInfo.songName;
    albumTitleInput.value = updateSongInfo.albumTitle;
    playCountInput.value = updateSongInfo.playCount;
    releaseYearInput.value = updateSongInfo.releaseYear;
    youTubeLinkInput.value = updateSongInfo.youTubeLink;
    imageInput.value = updateSongInfo.image;
    //hide submit button, show submit update button
    createButton.classList.add("hidden");
    updateButton.classList.remove("hidden");
  });
}
function buttonRevert() {
  updateButton.classList.add("hidden");
  createButton.classList.remove("hidden");
}
//create function to update the song array
function updateSong() {
  var updatedSong = {
    songName: songNameInput.value,
    albumTitle: albumTitleInput.value,
    playCount: playCountInput.value,
    releaseYear: releaseYearInput.value,
    youTubeLink: youTubeLinkInput.value,
    img: imageInput.value
  };
  //remove element, insert new updatedSong into song array
  songs.splice(updateSongIndexArray[1], 1, updatedSong);
  //re-render updated data
  //clear out input forms
  songNameInput.value = "";
  albumTitleInput.value = "";
  playCountInput.value = "";
  releaseYearInput.value = "";
  youTubeLinkInput.value = "";
  imageInput.value = "";
  renderData();
  buttonRevert();
}
updateButton.addEventListener("click", updateSong);
