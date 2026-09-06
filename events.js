const events = [
{
    title: "🍂 2026 Fall: Day Picnic",
    date: "September 2026",
    location: "Folsom, California",
    description:
        "Annual family picnic with games, food and outdoor fun."
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

            <p><strong>Date:</strong> ${event.date}</p>

            <p><strong>Location:</strong> ${event.location}</p>

            <p>${event.description}</p>
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
