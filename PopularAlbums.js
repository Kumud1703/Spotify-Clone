window.onload = function() {
    // Retrieve the artist's name and image URL from localStorage
    var albumName = localStorage.getItem("selectedAlbumsName");
    var albumImageUrl = localStorage.getItem("selectedAlbumsImage");

    // If there's an image URL, update the background with both the gradient and the image
    if (albumImageUrl) {
        document.getElementById("album-image").style.background = "url(" + albumImageUrl + ")";

        document.getElementById("album-image").style.backgroundSize = "cover";
    }

    document.querySelector("#album-template b").textContent = albumName;

    document.querySelector("#album-intro").textContent =
        "Explore " + albumName + "'s most popular album, featuring their greatest hits and fan-favorite tracks.";

    // albumName +
    //     "'s passion for music is evident in every track they release, whether it's a chart-topping hit or an introspective piece. As they continue to evolve as an artist, their commitment to creating meaningful and impactful music remains at the core of their artistry.";

    const songsContainer = document.getElementById("album-songs");
    songsContainer.innerHTML = ""; // Clear previous songs

    if (songsData[albumName]) {
        songsData[albumName].forEach((song) => {
            const songDiv = document.createElement("div");
            songDiv.className = "song";
            songDiv.innerHTML = `
                        <div id="song-number">
                            ${song.number}
                            <img id="song-icon" src="${song.image}" alt="album image" />
                            <div id="song-details">
                                ${song.title}
                            </div>
							
                        </div>
						<audio controls>
                            <source src="${song.file}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        <div id="icons">
                            <i class="far fa-heart"></i>
                            <i class="fas fa-plus"></i>
                        </div>
                    `;
            songsContainer.appendChild(songDiv);
        });

        // Show the songs container
        songsContainer.style.display = "block";
    } else {
        songsContainer.style.display = "none";
    }
};

// Function to navigate back to the previous page
function goBack() {
    history.back();
}

const songsData = {
    ANIMAL: [{
            number: "01",
            title: "Hua Main",
            image: "favicon icon.webp",
            file: "songs/ANIMAL/Hua Main (Full Video)  Ranbir Kapoor  Rashmika M  Sandeep V  Raghav,Manoj M  Bhushan K.mp3",
        },
        {
            number: "02",
            title: "Pehle Bhi Main",
            image: "favicon icon.webp",
            file: "songs/ANIMAL/Pehle Bhi Main(Full Video)  Ranbir Kapoor,Tripti Dimri Sandeep V Vishal M,Raj S Bhushan K.mp3",
        },
        {
            number: "03",
            title: "SATRANGA",
            image: "favicon icon.webp",
            file: "songs/ANIMAL/SATRANGA(Song) Ranbir Kapoor,RashmikaSandeep VArijit,Shreyas P,Siddharth-Garima Bhushan K.mp3",
        },
    ],
    "Jab We Meet": [{
            number: "01",
            title: "Mauja Hi Mauja",
            image: "favicon icon.webp",
            file: "songs/Jab We Meet/Mauja Hi Mauja  Jab We Met  Shahid kapoor, Kareena Kapoor  Mika Singh   Pritam.mp3",
        },
        {
            number: "02",
            title: "Tum Se Hi",
            image: "favicon icon.webp",
            file: "songs/Jab We Meet/Tum Se Hi  Jab We Met  Kareena Kapoor, Shahid Kapoor  Mohit Chauhan  Pritam.mp3",
        },
        {
            number: "03",
            title: "Yeh Ishq Hai",
            image: "favicon icon.webp",
            file: "songs/Jab We Meet/Yeh Ishq Hai  Jab We Met  Kareena Kapoor, Shahid Kapoor  Pritam  Shreya Ghoshal.mp3",
        },
    ],
    "Shershaah": [{
            number: "01",
            title: "Kabhii Tumhhe",
            image: "favicon icon.webp",
            file: "songs/Shershaah/Kabhii Tumhhe Official Video  Shershaah  SidharthKiara  Javed-Mohsin  Darshan Raval  Rashmi V.mp3",
        },
        {
            number: "02",
            title: "Mann Bharryaa 2.0",
            image: "favicon icon.webp",
            file: "songs/Shershaah/Mann Bharryaa 2.0  Official Video  Shershaah  Sidharth  Kiara  B Praak  Jaani.mp3",
        },
        {
            number: "03",
            title: "Raataan Lambiyan",
            image: "favicon icon.webp",
            file: "songs/Shershaah/Raataan Lambiyan  Official Video  Shershaah  Sidharth  Kiara  Tanishk B Jubin Nautiyal  Asees.mp3",
        },
        {
            number: "04",
            title: "Ranjha",
            image: "favicon icon.webp",
            file: "songs/Shershaah/Ranjha  Official Video  Shershaah  SidharthKiara  B Praak  Jasleen Royal  Romy  Anvita Dutt.mp3",
        },
    ],
};