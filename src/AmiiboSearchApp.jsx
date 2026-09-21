import React from 'react'

function AmiiboSearchApp() {
    return (
        <div>
            <div class="container">

                <div class="image-box">
                    <img className='home__img' src='src/assets/amiibo.jpg'></img>
                </div>

                <div class="text-content">
                    <p>Developed a full-stack, data-driven web application that allows users to seamlessly search and view detailed information for Amiibo figures by character or game series. The frontend utilizes Vue.js to provide a highly responsive, dynamic user experience. The backend is powered by Express.js, leveraging asynchronous routing to fetch live data from an external Amiibo API. To optimize performance and ensure data persistence, the application integrates a MongoDB Atlas Cloud Database to asynchronously cache and retrieve searched Amiibo details.visit the site             <a className='header__link' href="https://amiibo-search-ap.onrender.com/" >here</a>, it may take a few seconds.
                    <a className='header__link' href="https://github.com/juan497/AmiiboSearchApp" >source code here</a>

</p>
                </div>

            </div>
        </div>
    )
}

export default AmiiboSearchApp
