'use client';

import { motion } from 'framer-motion';

export default function About() {

    return (
        <motion.section
            id="about"
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >

            <h2>About Me</h2>

            <img
                src="/profile.jpg"
                alt="Profile"
                className="profile-image"
            />

            <p>Hello, I'm Mark Kenneth B. Peña.</p>
            <p>I aspire to become a web developer and game developer.</p>
            <p>I enjoy gaming and learning at my own pace.</p>

        </motion.section>
    );
}