import Tag from "../Tag/Tag"
import "./Banner.css"

const Banner = () => {
    return (
        <section className="bannerContainer">
            <img className="bannerBackground" src="Imagenes/1.png" alt=""/>
            <div className="bannerDescription">
                <Tag title="front end" className="tagBanner" />
                <article className="description">
                    <h2 className="descriptionTitle">Challenge React</h2>
                    <p className="descriptionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate, massa sed imperdiet congue, diam lectus convallis mauris, vitae facilisis odio erat sit amet leo. Ut vel vestibulum lorem, luctus luctus tortor. Aliquam interdum in dolor ac lobortis. Nunc tincidunt velit magna, vitae lobortis justo vehicula et. Curabitur pharetra porta.</p>
                </article>
                <iframe className="ifBanner" src="https://www.youtube.com/embed/ov7vA5HFe6w"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                    
            </div>
        </section>
    )
}


export default Banner

