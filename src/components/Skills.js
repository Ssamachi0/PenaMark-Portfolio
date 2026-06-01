'use client';

import { motion } from 'framer-motion';

const skills = [
    {
        name: 'Java',
        level: 84
    },
    {
        name: 'Python',
        level: 77
    },
    {
        name: 'C#',
        level: 72
    },
    {
        name: 'HTML & CSS',
        level: 80
    },
    {
        name: 'React.js',
        level: 54
    }
];

export default function Skills() {

    return (

        <motion.section
            id="skills"
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >

            <h2>Technical Skills</h2>

            <p className="skills-description">
                The percentages below represent my current confidence and experience level in each technology based on projects, coursework, and personal learning.
            </p>

            <div className="skills-container">

                {skills.map((skill, index) => (

                    <div key={index} className="skill-item">

                        <div className="skill-header">

                            <span>{skill.name}</span>

                            <span>{skill.level}%</span>

                        </div>

                        <div className="progress-bar">

                            <motion.div
                                className="progress-fill"
                                initial={{ width: 0 }}
                                whileInView={{
                                    width: `${skill.level}%`
                                }}
                                transition={{
                                    duration: 1.2
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

        </motion.section>

    );
}