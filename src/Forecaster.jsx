import React from 'react'
import "./Forecaster.css"


function Forecaster() {
  return (
    <div>
            <h1>☕️Coffee Shop Sales Forecaster Model☕️</h1>
            <a className='home__link' href="https://github.com/juan497/coffeeShopSalesForecaster/tree/main" >Jupyter Notebook</a>

            <section>
                <h3>Business Objective</h3>
                <p>Predict the weekly coffee shop sales revenue using historical transaction data.</p>
            </section>
            <section>
              <h3>Data Acquisition</h3>
              <p>The <a className='home__link' href="https://www.kaggle.com/datasets/navjotkaushal/coffee-sales-dataset" >Coffee Shop Data</a> was obtained from Kaggle.</p>
              <p>This dataset contains coffee shop transaction records, including details about sales, payment type, time of purchase, and customer preferences.</p>
            </section>
            <section>
                <h3>Data Validation</h3>
                <p>Data Validation process done in python, using Sklearn, and Pandas to get a analytically ready dataset.</p>
                  <ul>
                    <li>Check for null values</li>
                    <li>Convert dates into a format Python understands</li>
                    <li>Ensures data is in chronological order, which is critical for time-series forecasting.</li>
                    <li>Check for duplicate rows</li>
                    <li>No negative monetary values</li>
                    {/* <li>Make sure currency is in U.S Dollars</li> */}
                    <li>Check Outliers</li>
                  </ul>
            </section>

            <section>
                <h3>Exploratory Data Analysis</h3>
                <p> Link to  <a className='home__link' href="https://app.powerbi.com/links/labUf4ECaD?ctid=979328ba-8948-472f-9525-8396e354b177&pbi_source=linkShare" >Power BI Dashboard</a></p>
                <table>
                    <tr>
                        <th>KPI</th>
                        <th>What it Tells You</th>
                        <th>Actionable Next Steps</th>
                    </tr>
                    <tr>
                        <td>Revenue by Product</td>
                        <td>Latte Is the Top Revenue Driver</td>
                        <td>Latte should be prioritized in promotions,loyalty campaigns,upselling bundles.</td>
                    </tr>
                    <tr>
                        <td>Revenue Distrubution by Time of Day</td>
                        <td>Revenue drops 20% every summer.</td>
                        <td>Create seasonal promotions.Forecast inventory more accurately.Increase marketing before the decline.</td>
                    </tr>
                    <tr>
                        <td>Revenue by Month</td>
                        <td>Revenue drops 20% every summer.</td>
                        <td>Create seasonal promotions.Forecast inventory more accurately.Increase marketing before the decline.</td>
                    </tr>
                    <tr>
                        <td>Revenue by Weekday</td>
                        <td>Weekdays Outperform Weekends</td>
                        <td>Create seasonal promotions.Forecast inventory more accurately.Increase marketing before the decline.</td>
                    </tr>
                    <tr>
                        <td>Count of Cash Type</td>
                        <td>Revenue drops 20% every summer.</td>
                        <td>Create seasonal promotions.Forecast inventory more accurately.Increase marketing before the decline.</td>
                    </tr>
                    </table>
            </section>

            <section>
                <h3>Feature Engineering </h3>
                <ul>
                    <li><strong>Lag features:</strong> useful because previouse weeks can determine the revenue for this week.</li>
                    <li><strong>Rolling averages features:</strong> useful for smoothing out random spikes, noisy data, or unusual weeks.</li>
                    <li><strong>Month of year features:</strong> useful to capture seasonal trends and weather trends.</li>
                    <li><strong>Week of year features:</strong> useful to capture holiday shoping peroids or back to school periods. </li>
                  </ul>
                <img className='F__img' src="src/assets/featureE.jpg" alt="Snow" ></img>
            </section>

            <section>
                <h3>Training the Model </h3>
                <p>Used XG Boost because the data is nonlinear, and rely more on complex interactions such as:</p>
                <ul>
                  <li>Weekends</li>
                  <li>Weather</li>
                  <li>Holidays </li>
                  <li>Seasonality</li>
                  <li>Lag effects </li>
                </ul>
                <p>XG Boost splits data into trees which allows for complex patterns, curves, thresholds or interactions</p>

            </section>
            <section>
                <h3>Evaluation of the Model</h3>
                <p>Used MAPE to Express the error as a percentage.</p>
                <p><strong>MAPE:</strong> 15.60%</p>
                <p><strong>Accuracy:</strong> 84.39%</p>
                <p>Weekly sales can be predicted within approximately 15.60% error.</p>
                <img className='F__graph' src="src/assets/sales.jpg" alt="Snow" ></img>
            </section>
            <section>
                <h3>Business Action</h3>
                <ul>
                  <li>Deploy the model as a weekly planning tool</li>
                  <li>Use forecasts for staffing schedules</li>
                  <li>Use forecasts for inventory purchasing</li>
                  <li>Use forecasts to identify weeks needing promotional support</li>
                </ul>
                <h3>Expected Business Benefit</h3>
                <ul>
                  <li>Reduced inventory waste</li>
                  <li>Better staffing allocation</li>
                  <li>Improved budgeting accuracy</li>
                  <li>Increased operational efficiency</li>
                </ul>
            </section>

    </div>
  )
}

export default Forecaster
