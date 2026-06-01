'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: 'STI Enrollment Form',
        description: 'Enrollment and survey recreation project.'
    },
    {
        title: 'Art Canvas',
        description: 'Canvas recreation of real-world objects.'
    },
    {
        title: 'Browser Article',
        description: 'Modern article layout project.'
    }
];

export default function Projects() {

    return (
        <motion.section
            id="projects"
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >

            <h2>Projects</h2>

            <div className="projects-grid">

                {projects.map((project, index) => (

                    <div className="project-card" key={index}>

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                    </div>
                ))}

            </div>

        </motion.section>
    );
}