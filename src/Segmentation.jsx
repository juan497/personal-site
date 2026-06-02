import React from 'react'

function Segmentation() {
  return (
    <div>
        <h1>Coffee Shop Customer Segmentation Model</h1>
        <img className='home__icon' src='src/assets/seg.jpg'></img>

            <section>
                <h3>Objective</h3>
                <p>Create Customer Segmentation Model Using RFM Analysis (Coffee Sales Dataset)</p>
            </section>
            <section>
                <h3>Data acquisition</h3>
                <p>Used Kaggle to obtain dataset that contains coffee shop transaction records that include time of purchase, payment type, and coffee name.</p>
            </section>
            <section>
                <h3>Wrangling and verifying the data: </h3>
                <p> Obtained mp3 files from different genres of songs using a python library that downloads audio from YouTube.</p>
            </section>

            <section>
                <h3>Exploratory Data Analysis</h3>
                <p>	used Power BI to create univariate, bivariate, and multi variate analysis. 
	obtained insight such as 
Latte generated the highest revenue overall.
action
Latte products contribute the largest share of total beverage revenue, making them the most commercially valuable item on the menu.

Morning, afternoon, and night sales were relatively balanced.

Customer demand remains consistent throughout the day, indicating stable operational traffic rather than isolated rush periods.

All transactions were card-based.
Customers overwhelmingly prefer digital payment methods, supporting a streamlined cashless transaction environment.
power bi link:</p>
            </section>


            <section>
                <h3>Building the model</h3>
                <p>Create forecasting features:
Lag features, useful because previouse weeks can determine the revenue for this week


Rolling averages, useful for smoothing out random spikes, noisy data, or unusual weeks


week of year trends like back-to-school periods
holiday shopping weeks
vacation seasons
recurring traffic cycles
“Week 51 usually has very high sales.”







month of year trend it’s December
it’s holiday season
revenue tends to rise


Model selection XG boost because 
Data contains 
These relationships are often:</p>
            </section>
    </div>
  )
}

export default Segmentation
