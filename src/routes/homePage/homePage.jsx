import './homePage.scss'
import SearchBar from '../../components/searchBar/searchBar'

function HomePage() {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                        <h1 className='title'>Turning Dream Properties into Reality</h1>
                        <p>Your home is a reflection of who you are, and we're here to help you find a space that mirrors your unique lifestyle. From cozy apartments to expansive estates, our diverse portfolio ensures there's something for everyone. </p>
                        <SearchBar/>
                        <div className="boxes">
                            <div className="box">
                                <h1>5+</h1>
                                <h2>Years of Experience</h2>
                            </div>
                            <div className="box">
                                <h1>200</h1>
                                <h2>Awards Gained</h2>
                            </div>
                            <div className="box">
                                <h1>1200+</h1>
                                <h2>Property Ready</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage