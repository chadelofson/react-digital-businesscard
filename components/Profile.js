import React from 'react'


export default function Profile() {
    return (
        <header className="profile">
            <img className="profile--pic" src="../images/chad.jpg" alt="Profile Image of Chad Elofson" />
            <h1 className="profile--name">Chad Elofson</h1>
            <h2 className="profile--title">Fullstack Developer</h2>
            <p><a href="https://chadelofson.dev" target="_blank" className="profile--site">chadelofson.dev</a></p>
            <section className="profile--connect">
                <a className="profile--email" href="mailto:chad@chadslab.net">
                    <img src="../images/mail.png" alt="Email Icon" />
                    Email
                </a>
                <a className="profile--linkedin" href="https://www.linkedin.com/in/chadelofson/" target="_blank">
                    <img src="../images/linkedin.png" alt="LinkedIn Icon" />                    LinkedIn
                </a>
            </section>
        </header>
    )
}