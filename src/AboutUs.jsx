function AboutUs() {
    return (
        <main className="about-page about-us-container" aria-labelledby="about-us-title">
            <div className="page-intro">
                <p className="eyebrow">Our story</p>
                <h1 id="about-us-title">Plants that make a place feel like home.</h1>
                <p>
                    Paradise Nursery is a simple online shop for bringing beautiful,
                    easy-to-love plants into everyday spaces.
                </p>
            </div>
            <div className="about-grid">
                <section>
                    <h2>Thoughtfully chosen</h2>
                    <p>Our collection focuses on indoor plants with distinct shapes, colors, and care needs.</p>
                </section>
                <section>
                    <h2>Made for real homes</h2>
                    <p>Clear product details help you choose a plant that fits your space and routine.</p>
                </section>
                <section>
                    <h2>A greener daily ritual</h2>
                    <p>Whether you are starting with one plant or growing a collection, there is always room for more green.</p>
                </section>
            </div>
        </main>
    )
}

export default AboutUs
