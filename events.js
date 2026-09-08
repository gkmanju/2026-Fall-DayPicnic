javascript
function showHome() {

    document.getElementById("eventContent").innerHTML = `

        <section class="welcome-section">

            <span class="eyebrow">
                Welcome to our community
            </span>

            <h2>
                Kannada Families of Folsom
            </h2>

            <p>
                Namma Folsom is a community for Kannada families
                in Folsom and surrounding areas to meet, celebrate
                our culture, build friendships, and create lasting
                memories together.
            </p>

            <p>
                Throughout the year, we organize family gatherings,
                cultural celebrations, outdoor events, and opportunities
                for our community to connect.
            </p>

        </section>


        <section class="upcoming-events">

            <div class="section-heading">

                <span class="eyebrow">
                    Community Calendar
                </span>

                <h2>
                    Upcoming Celebrations
                </h2>

                <p>
                    Join Kannada families across the Folsom area
                    for community gatherings and celebrations
                    throughout the year.
                </p>

            </div>


            <div class="event-grid">


                <article class="calendar-card featured-event">

                    <div class="event-icon">
                        🍂
                    </div>

                    <span class="event-status">
                        RSVP Open
                    </span>

                    <h3>
                        Fall Day Picnic 2026
                    </h3>

                    <p class="event-date">
                        Saturday, September 12, 2026
                    </p>

                    <p>
                        Enjoy live outdoor cooking, family activities,
                        games, and an afternoon of community building.
                    </p>

                    <a
                        href="events/fall-2026-planning.html"
                        class="event-link"
                    >
                        View Event →
                    </a>

                    <br>

                    <a
                        href="events/fall-2026-rsvp.html"
                        class="rsvp-btn"
                    >
                        RSVP Interest
                    </a>

                </article>


                <article class="calendar-card">

                    <div class="event-icon">
                        🪔
                    </div>

                    <span class="event-status planning">
                        Planning
                    </span>

                    <h3>
                        Deepavali 2026
                    </h3>

                    <p class="event-date">
                        Fall 2026
                    </p>

                    <p>
                        Celebrate Deepavali with Namma Folsom
                        through food, festivities, culture,
                        and time together as a community.
                    </p>

                    <span class="coming-soon">
                        Date &amp; details coming soon
                    </span>

                </article>


                <article class="calendar-card">

                    <div class="event-icon">
                        🌾
                    </div>

                    <span class="event-status planning">
                        Planning
                    </span>

                    <h3>
                        Sankranthi 2027
                    </h3>

                    <p class="event-date">
                        January 2027
                    </p>

                    <p>
                        Welcome the harvest season together
                        with Kannada traditions, food,
                        activities, and family celebrations.
                    </p>

                    <span class="coming-soon">
                        Date &amp; details coming soon
                    </span>

                </article>


                <article class="calendar-card">

                    <div class="event-icon">
                        🌸
                    </div>

                    <span class="event-status planning">
                        Planning
                    </span>

                    <h3>
                        Ugadi 2027
                    </h3>

                    <p class="event-date">
                        Spring 2027
                    </p>

                    <p>
                        Celebrate the Kannada New Year
                        with traditional food, culture,
                        family activities, and community.
                    </p>

                    <span class="coming-soon">
                        Date &amp; details coming soon
                    </span>

                </article>


            </div>

        </section>

    `;
}


const events = [

    {
        title: "🍂 Fall Day Picnic 2026",

        date: "September 12, 2026",

        location: "Venue TBD (US-50 East or Delta Area)",

        description: `
            Join Namma Folsom families for our inaugural
            Fall Day Picnic featuring live outdoor cooking,
            family activities, games, and community bonding.
        `,

        details: [
            "🍳 Live outdoor cooking",
            "🎯 Family games",
            "🧒 Kids activities",
            "📸 Community group photo"
        ],

        link: "events/fall-2026-planning.html",

        rsvp: "events/fall-2026-rsvp.html"
    },


    {
        title: "🪔 Deepavali 2026",

        date: "Fall 2026",

        location: "Folsom, California",

        description: `
            Celebrate Deepavali with Namma Folsom families
            through food, festivities, culture, and community.
            Event planning is currently underway.
        `,

        details: [
            "🪔 Deepavali celebration",
            "🍽️ Community food",
            "🎉 Family activities",
            "✨ Cultural festivities"
        ]
    },


    {
        title: "🌾 Sankranthi 2027",

        date: "January 2027",

        location: "Folsom, California",

        description: `
            Join Namma Folsom for a community Sankranthi
            celebration welcoming the harvest season with
            Kannada traditions, food, and family activities.
        `,

        details: [
            "🌾 Sankranthi traditions",
            "🍽️ Community meal",
            "👨‍👩‍👧‍👦 Family gathering",
            "🎯 Activities and games"
        ]
    },


    {
        title: "🌸 Ugadi 2027",

        date: "Spring 2027",

        location: "Folsom, California",

        description: `
            Celebrate Ugadi and the Kannada New Year with
            Namma Folsom through traditional food, culture,
            family activities, and community.
        `,

        details: [
            "🌸 Kannada New Year celebration",
            "🍽️ Traditional food",
            "🎉 Family activities",
            "🤝 Community gathering"
        ]
    }

];


function showEvent(event) {

    let detailsHTML = "";

    if (event.details) {

        detailsHTML = `
            <h3>Event Highlights</h3>

            <ul>
                ${event.details
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>
        `;
    }


    let buttonsHTML = "";

    if (event.link) {

        buttonsHTML += `
            <a
                href="${event.link}"
                class="event-link"
            >
                View Full Event Details →
            </a>
        `;
    }


    if (event.rsvp) {

        buttonsHTML += `
            <br>

            <a
                href="${event.rsvp}"
                class="rsvp-btn"
            >
                RSVP Interest
            </a>
        `;
    }


    document.getElementById("eventContent").innerHTML = `

        <div class="event-card">

            <h2>
                ${event.title}
            </h2>

            <p>
                <strong>Date:</strong>
                ${event.date}
            </p>

            <p>
                <strong>Location:</strong>
                ${event.location}
            </p>

            <h3>
                About This Event
            </h3>

            <p>
                ${event.description}
            </p>

            ${detailsHTML}

            ${buttonsHTML}

        </div>

    `;
}


window.onload = function () {

    const list = document.getElementById("eventList");

    document.getElementById("homeLink").onclick = showHome;


    /*
     * Clear anything manually placed
     * inside #eventList in index.html.
     */
    list.innerHTML = "";


    events.forEach(event => {

        const li = document.createElement("li");

        li.textContent = event.title;

        li.onclick = () => showEvent(event);

        list.appendChild(li);

    });


    showHome();

};


