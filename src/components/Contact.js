'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    function handleChange(event) {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {

        event.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please complete all fields.');
            return;
        }

        router.push('/thank-you');
    }

    return (
        <section id="contact" className="card">

            <h2>Contact Me</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                />

                <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows="5"
                    onChange={handleChange}
                />

                <button type="submit">
                    Submit
                </button>

            </form>

        </section>
    );
}