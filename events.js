const events = [
{
    title: "🍂 2026 Fall: Day Picnic",
    date: "September 2026",
    image: "photos/fall-picnic.jpg",
    rsvp: "https://forms.office.com/r/YourFormId",
    location: "Folsom, California",
    description:
        "Annual family picnic with games, food and outdoor fun."
},
{
    title: "🌸 Ugadi Celebration 2027",
    date: "March 2027",
    image: "photos/ugadi.jpg",
    rsvp: "",
    location: "Folsom, California",
    description:
        "Kannada New Year celebration."
},
{
    title: "🌾 Sankranti 2027",
    date: "January 2027",
    image: "photos/sankranti.jpg",
    rsvp: "",
    location: "Folsom, California",
    description:
        "Sankranti gathering and lunch."
},
{
    title: "🪔 Deepavali 2027",
    date: "November 2027",
    image: "photos/deepavali.jpg",
    rsvp: "",
    location: "Folsom, California",
    description:
        "Community Deepavali celebration."
}
];

function showEvent(event) {

    let imageHtml = "";

    if (event.image) {
        imageHtml = `
            ${event.image}
        `;
    }

    let rsvpButton = "";

    if (event.rsvp) {
        rsvpButton = `
            <p>
                ${event.rsvp}
                   RSVP Here
                </a>
            </p>
        `;
    }

    document.getElementById("eventContent").innerHTML = `
        <div class="event-card">

            ${imageHtml}

            <h2>${event.title}</h2>

            <p>
                <strong>Date:</strong>
                ${event.date}
            </p>

            <p>
                <strong>Location:</strong>
                ${event.location}
            </p>

            <p>
                ${event.description}
            </p>

            ${rsvpButton}

        </div>
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
