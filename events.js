const events = [
{
    id: 1,
    title: "🍂 2026 Fall: Day Picnic",
    date: "September 2026",
    location: "Folsom, California",
    description:
        "Annual family picnic with games, potluck lunch and outdoor activities."
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
