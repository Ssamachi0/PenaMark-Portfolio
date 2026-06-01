export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <div className="thank-you-card">
        <img
          src="https://media.tenor.com/bMo9DEDirN0AAAAM/thank-you-thank-you-bro.gif"
          alt="Thank You"
          className="thank-you-image"
        />

        <p className="thank-you-kicker">Message Sent</p>

        <h1>Thank You!</h1>

        <p className="thank-you-text">
          Your message has been submitted successfully. I appreciate you reaching
          out and will get back to you as soon as possible.
        </p>

        <a href="/" className="back-home-btn">
          Back to Home
        </a>
      </div>
    </main>
  );
}