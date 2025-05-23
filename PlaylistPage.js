window.onload = function () {
    // Retrieve the artist's name and image URL from localStorage
    var artistName = localStorage.getItem("selectedArtistName");
    var artistImageUrl = localStorage.getItem("selectedArtistImage");

    // If there's an image URL, update the background with both the gradient and the image
    if (artistImageUrl) {
        document.getElementById("artist-image").style.background =
            "url(" + artistImageUrl + ")";
        document.getElementById("artist-image").style.backgroundSize = "cover";
    }

    document.querySelector("#artist-template b").textContent = artistName;

    document.querySelector("#artist-intro").textContent =
        artistName +
        " is a dynamic and influential figure in the music industry, known for their distinct sound and captivating performances. With a unique blend of [genre] influences, they have consistently pushed the boundaries of contemporary music. Their work resonates with a wide audience, showcasing a deep connection to both their roots and innovative aspirations. " +
        artistName +
        "'s passion for music is evident in every track they release, whether it's a chart-topping hit or an introspective piece. As they continue to evolve as an artist, their commitment to creating meaningful and impactful music remains at the core of their artistry.";

    const songsContainer = document.getElementById("artist-songs");
    songsContainer.innerHTML = ""; // Clear previous songs

    if (songsData[artistName]) {
        songsData[artistName].forEach((song) => {
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
    Pritam: [
        {
            number: "01",
            title: "KHAIRIYAT",
            image: "favicon icon.webp",
            file: "songs/Pritam/KHAIRIYAT (BONUS TRACK)  CHHICHHORE  Sushant, Shraddha  Pritam, Amitabh BArijit Singh.mp3",
        },
        {
            number: "02",
            title: "Pee Loon",
            image: "favicon icon.webp",
            file: "songs/Pritam/Pee Loon  Once Upon A Time in Mumbai  Emraan Hashmi, Prachi   Pritam Mohit Chauhan.mp3",
        },
        {
            number: "03",
            title: "Janam Janam",
            image: "favicon icon.webp",
            file: "songs/Pritam/Janam Janam  Dilwale  Shah Rukh Khan  Kajol  Pritam  SRK  Kajol  Lyric Video 2015.mp3",
        },
    ],
    "Arijit Singh": [
        {
            number: "01",
            title: "Desi Romance",
            image: "favicon icon.webp",
            file: "songs/Arijit Singh/Desi Romance (Arijit Singh) SKSE (PagalWorld.com) .mp3",
        },
        {
            number: "02",
            title: "Jaise Mera Tu",
            image: "favicon icon.webp",
            file: "songs/Arijit Singh/Jaise Mera Tu - Happy Ending (Arijit Singh) 190Kbps.mp3",
        },
        {
            number: "03",
            title: "Judaai",
            image: "favicon icon.webp",
            file: "songs/Arijit Singh/Judaai - Badlapur -Arijit Singh- 320Kbps.mp3",
        },
        {
            number: "04",
            title: "Raat Bhar",
            image: "favicon icon.webp",
            file: "songs/Arijit Singh/Raat Bhar (Arijit Singh) - Heropanti -PagalWorld.com-.mp3",
        },
        {
            number: "05",
            title: "Sukoon Mila",
            image: "favicon icon.webp",
            file: "songs/Arijit Singh/Sukoon Mila - Arijit Singh - 320Kbps.mp3",
        },
    ],
    "A.R.Rahman": [
        {
            number: "01",
            title: "Hosanna",
            image: "favicon icon.webp",
            file: "songs/Rahaman/A.R. Rahman - Hosanna Best VideoEkk Deewana ThaAmy JacksonPrateik BabarLeonSuzanne.mp3",
        },
        {
            number: "02",
            title: "Dil Bechara",
            image: "favicon icon.webp",
            file: "songs/Rahaman/Dil Bechara  Title Track  Sushant Singh Rajput  Sanjana Sanghi  A.R. Rahman Mukesh C Amitabh B.mp3",
        },
        {
            number: "03",
            title: "Taare Ginn",
            image: "favicon icon.webp",
            file: "songs/Rahaman/Dil Bechara- Taare Ginn Official VideoSushant, SanjanaA.R.RahmanMohit, ShreyaMukesh CAmitabh B.mp3",
        },
        {
            number: "04",
            title: "Kaara Fankaara",
            image: "favicon icon.webp",
            file: "songs/Rahaman/Kaara Fankaara -  OK Jaanu  Aditya Roy Kapur  Shraddha Kapoor  @ARRahman.mp3",
        },
        {
            number: "05",
            title: "Kun Faya Kun",
            image: "favicon icon.webp",
            file: "songs/Rahaman/Kun Faya Kun Full Video Song Rockstar  Ranbir Kapoor  A.R. Rahman, Javed Ali, Mohit Chauhan.mp3",
        },
        {
            number: "06",
            title: "Param Sundari",
            image: "favicon icon.webp",
            file: "songs/Rahaman/Param Sundari -Official Video  Mimi  Kriti Sanon, Pankaj Tripathi  @ARRahman Shreya Amitabh.mp3",
        },
    ],

    "Sonu Nigam": [
        {
            number: "01",
            title: "Abhi Mujh Mein Kahin",
            image: "favicon icon.webp",
            file: "songs/Sonu Nigam/Ajay-Atul - Abhi Mujh Mein Kahin Best LyricAgneepathPriyanka Chopra,HrithikSonu Nigam.mp3",
        },
        {
            number: "02",
            title: "Sau Dard",
            image: "favicon icon.webp",
            file: "songs/Sonu Nigam/Sau Dard  Jaan-E-Mann  Salman Khan, Preity Zinta, Akshay Kumar  Sonu Nigam, Suzan.mp3",
        },
        {
            number: "03",
            title: "Kal Ho Naa Ho",
            image: "favicon icon.webp",
            file: "songs/Sonu Nigam/Kal Ho Naa Ho Full Video - Title TrackShah Rukh Khan,Saif Ali,PreitySonu NigamKaran J.mp3",
        },
        {
            number: "04",
            title: "Mere Haath Mein",
            image: "favicon icon.webp",
            file: "songs/Sonu Nigam/Mere Haath Mein  Full Song  Fanaa  Aamir Khan, Kajol  Sonu Nigam, Sunidhi Chauhan  Jatin-Lalit.mp3",
        },
    ],

    "Anirudh R": [
        {
            number: "01",
            title: "Fear Song  Devara Part - 1",
            image: "favicon icon.webp",
            file: "songs/Anirudh R/Fear Song  Devara Part - 1  NTR  Koratala Siva  Anirudh Ravichander  10 Oct 2024.mp3",
        },
        {
            number: "02",
            title: "Hukum",
            image: "favicon icon.webp",
            file: "songs/Anirudh R/JAILER - Hukum Lyric Video  Superstar Rajinikanth  Sun Pictures  Anirudh  Nelson.mp3",
        },
        {
            number: "03",
            title: "Chaleya",
            image: "favicon icon.webp",
            file: "songs/Anirudh R/JAWAN_ Chaleya (Hindi)  Shah Rukh Khan  Nayanthara  Atlee  Anirudh  Arijit S, Shilpa R  Kumaar.mp3",
        },
    ],

    "Vishal Mishra": [
        {
            number: "01",
            title: "Manjha",
            image: "favicon icon.webp",
            file: "songs/Vishal Mishra/Manjha - Vishal Mishra.mp3",
        },
        {
            number: "02",
            title: "Teri Hogaiyaans",
            image: "favicon icon.webp",
            file: "songs/Vishal Mishra/Teri Hogaiyaan - Vishal Mishra.mp3",
        },
        {
            number: "03",
            title: "Aaj_Bhi",
            image: "favicon icon.webp",
            file: "songs/Vishal Mishra/Aaj Bhi (Official Video) - Vishal Mishra  Ali Fazal, Surbhi Jyoti  VYRLOriginals.mp3",
        },
        {
            number: "04",
            title: "Sajna Ve",
            image: "favicon icon.webp",
            file: "songs/Vishal Mishra/Sajna Ve (Official Video) - Vishal Mishra, Lisa Mishra  Latest Love Song 2020  VYRLOriginals.mp3",
        },

    ],

    "Atif Aslam": [
        {
            number: "01",
            title: "Zindagi Aa Raha Hoon Main",
            image: "favicon icon.webp",
            file: "songs/Atif Aslam/Zindagi Aa Raha Hoon Main.mp3",
        },
        {
            number: "02",
            title: "Jaane De",
            image: "favicon icon.webp",
            file: "songs/Atif Aslam/Jaane De - Full Video  Atif Aslam  Qarib Qarib Singlle  Irrfan I Parvathy  Vishal Mishra.mp3",
        },
        {
            number: "03",
            title: "O Saathi",
            image: "favicon icon.webp",
            file: "songs/Atif Aslam/O Saathi Lyrical Video  Baaghi 2  Tiger Shroff  Disha Patani  Arko  Ahmed Khan Sajid Nadiadwala.mp3",
        },
        {
            number: "04",
            title: "Tu Jaane Na",
            image: "favicon icon.webp",
            file: "songs/Atif Aslam/Tu Jaane Na Lyrical - Ajab Prem Ki Ghazab Kahani  Atif Aslam  Ranbir Kapoor, Katrina Kaif  Pritam.mp3",
        },
    ],
};