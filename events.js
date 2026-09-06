function showHome() {

    document.getElementById("eventContent").innerHTML = `

        <div class="event-card">

            <h2>Welcome to Namma Folsom</h2>

            <p>
                Namma Folsom is a community for Kannada families
                in Folsom and surrounding areas.
            </p>

            <p>
                We come together to celebrate culture,
                festivals, friendship and family through
                events held throughout the year.
            </p>

            <h3>Upcoming Events</h3>

            <ul>
                <li>🍂 2026 Fall Day Picnic</li>
                <li>🌸 Ugadi 2027</li>
                <li>🌾 Sankranti 2027</li>
                <li>🪔 Deepavali 2027</li>
            </ul>

        </div>

    `;
}
const events = [
{
    title: "🍂 2026 Fall Day Picnic",

    date: "September 2026",

    location: "Folsom, California",

    description: `
        Join Namma Folsom families for an afternoon of
        food, games, outdoor activities and community fun.

        Bring your favorite picnic dishes, lawn chairs
        and outdoor games.
    `
},
{
    title: "🌾 Sankranti 2027",
    date: "January 2027",
    location: "Folsom, California",
    description:
        "Sankranti gathering and lunch."
},
{
    title: "🌸 Ugadi Celebration 2027",
    date: "March 2027",
    location: "Folsom, California",
    description:
        "Kannada New Year celebration."
},
{
    title: "🪔 Deepavali 2027",
    date: "November 2027",
    location: "Folsom, California",
    description:
        "Community Deepavali celebration."
}
];

function showEvent(event) {

    document.getElementById("eventContent").innerHTML = `

        <div class="event-card">

            <h2>${event.title}</h2>

            <p>
                <strong>Date:</strong>
                ${event.date}
            </p>

            <p>
                <strong>Location:</strong>
                ${event.location}
            </p>

            <h3>About This Event</h3>

            <p>
                ${event.description}
            </p>

        </div>

    `;
}
window.onload = function () {

    const list = document.getElementById("eventList");
    document.getElementById("homeLink").onclick = showHome;

    events.forEach(event => {

        const li = document.createElement("li");

        li.textContent = event.title;

        li.onclick = () => showEvent(event);

        list.appendChild(li);

    });

    showHome();
};
