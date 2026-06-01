export default function ThankYouPage() {

    return (
        <div className="thank-you-page">

            <img
                src="https://media.tenor.com/bMo9DEDirN0AAAAM/thank-you-thank-you-bro.gif"
                alt="Thank You"
                className="thank-you-image"
            />

            <h1>Thank You!</h1>

            <p>Your message has been submitted successfully.</p>

            <a href="/" className="back-home-btn">
                Back to Home
            </a>

        </div>
    );
}