const events = [
{
    id: 1,
    title: "🍂 2026 Fall: Day Picnic",
    date: "September 19, 2026",
    location: "Lembi Park, Folsom",
    description:
        "Join us for an afternoon of food, games, walk trails and family fun."
},
{
    id: 2,
    title: "🌸 Ugadi Celebration 2027",
    date: "March 2027",
    location: "Folsom",
    description:
        "Kannada New Year celebration."
},
{
    id: 3,
    title: "🌾 Sankranti 2027",
    date: "January 2027",
    location: "Folsom",
    description:
        "Sankranti gathering and lunch."
},
{
    id: 4,
    title: "🪔 Deepavali 2027",
    date: "November 2027",
    location: "TBD",
    description:
        "Community Deepavali celebration."
}

];

function showEvent(event) {
    document.getElementById("eventContent").innerHTML = `
        <h2>${event.title}</h2>

        <table>
            <tr>
                <td><b>Date</b></td>
                <td>${event.date}</td>
            </tr>

            <tr>
                <td><b>Location</b></td>
                <td>${event.location}</td>
            </tr>
        </table>

        <p>${event.description}</p>
    `;
}

window.onload = function () {

    const list = document.getElementById("eventList");

    events.forEach(event => {

        const li = document.createElement("li");

        li.textContent = event.title;

        li.onclick = () => showEvent(event);

        list.appendChild(li);

    });

    showEvent(events[0]);
};
function showHome() {

    document.getElementById("eventContent").innerHTML = `
        <h2>Welcome</h2>

        <p>
            Welcome to Folsom Kannada Families.
        </p>

        <p>
            Connecting Families • Celebrating Culture • Building Community
        </p>
    `;
}

function showPhotos() {

    document.getElementById("eventContent").innerHTML = `
        <h2>Photo Gallery</h2>

        <p>
            Event photos will appear here.
        </p>
    `;
}

function showAbout() {

    document.getElementById("eventContent").innerHTML = `
        <h2>About Us</h2>

        <p>
            Folsom Kannada Families is a community of
            Kannada-speaking families in Folsom and nearby areas.
        </p>
    `;
}

function showContact() {

    document.getElementById("eventContent").innerHTML = `
        <h2>Contact</h2>

        <p>Email: TBD</p>

        <p>WhatsApp Group: TBD</p>
    `;
}
