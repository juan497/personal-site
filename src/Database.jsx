import React from 'react'
import "./Database.css"
function Database() {
  return (
        <div>
        <h1>End-To-End Customer Analytics Solution in MySQL</h1>
        <p>A system that handles every stage of the customer data lifecycle within a single, integrated workflow. It transforms raw customer interactions into actionable insights</p>
        <a className='home__link' href="https://github.com/juan497/SQL_EcommerceDataAnalysis/tree/main/sql" >SQL code on GitHub</a>

        <section>
            <h3>Business Objective</h3>
            <p>Increase revenue and customer retention by understanding purchasing behavior, identifying high-value customers, detecting churn risk, and forecasting future sales.</p>
        </section>
        <section>
          <h3>About the Data</h3>
          <p>The data was synthesized to mimics raw OLTP (Online Transaction Processing) from a real e-commerce store.</p>

          <img className='DB__img' src='src/assets/schema.jpg'></img>
        </section>
        <section>
            <h3>Validation Process</h3>
            <ul>
              <li>Check for Duplicate Primary Keys</li>
              <li>Missing Customer IDs,Order Dates</li>
              <li>check for orphan records</li>
              <li>Negative Revenue or Quantity</li>
              <li>Invalid Prices</li>
              <li>Future Dates</li>
              <li>Missing Time Periods</li>
              <li>Outlier Detection</li>
            </ul>
        </section>
        <section>
            <h3>ELT: relational (OLTP) to a dimensional (OLAP/Data Warehouse) model</h3>
            <p>
              create a Fact table Measures business events (the "what"), and create the dimension table, Provides context to the measurements (the "who, what, where, when"), for fast and intuitive analytical querying
            </p>
        </section>
        <section>
          <h3>SQL Star Schema</h3>
          <img className='DB__img' src='src/assets/star_schema.jpg'></img>
        </section>
        <section>
            <h3>Second Validation</h3>
            <p>Prevent "Garbage In, Garbage Out." Verify that the warehouse matches the source.</p>
            <ul>
              <li>Reconciliation Validation of Revenue totals, Row counts, Aggregate checks</li>
              <li>Referential Integrity Validation, No orphan fact rows, All dimension keys exist</li>
              <li>Grain Validation, One row per intended business event</li>

            </ul>
        </section>
        <section>
          <h3>KPI's and Business Actions</h3>
          <table>
                    <tr>
                        <th>KPI</th>
                        <th>What it Tells You</th>
                        <th>Actionable Next Steps</th>
                    </tr>
                    <tr>
                        <td>Revenue by Month</td>
                        <td>Revenue drops 20% every summer.</td>
                        <td>Create seasonal promotions.Forecast inventory more accurately.Increase marketing before the decline.</td>
                    </tr>
                    <tr>
                        <td>Revenue by Product</td>
                        <td>Product A generates 40% of total revenue.</td>
                        <td>Ensure it never goes out of stock.Feature it in marketing campaigns.Build complementary product bundles around it.</td>
                    </tr>
                    <tr>
                        <td>Customer Lifetime Value (CLV)</td>
                        <td>Top 5% of customers contribute 45% of revenue.</td>
                        <td>VIP rewards program.</td>
                    </tr>
                    <tr>
                        <td>Average Order Value (AOV)</td>
                        <td>AOV = $18, while customers who buy bundles spend $28.</td>
                        <td>Promote bundles.Add "Frequently Bought Together" recommendations.Offer free shipping above a spending threshold.</td>
                    </tr>
                    {/* <tr>
                        <td>Revenue by Customer</td>
                        <td>see rfm model</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Number of Orders per Customer</td>
                        <td>.74</td>
                        <td>.73</td>
                    </tr>
                    <tr>
                        <td>Running Revenue using Window Function</td>
                        <td>.74</td>
                        <td>.73</td>
                    </tr> */}
                    </table>

        </section>

        <section>
          <h3>Business Action For RFM</h3>
          <ul>
            <li>Reward Brand Champions: (Most recent, most frequent, highest spenders),Business Action: Invite them to VIP early access, offer exclusive loyalty discounts, and ask them to leave product reviews or join a referral program</li>
            <li>Reactivate "At Risk" or Hibernating Customers: (High past value, but haven't bought in a long time)Send "we miss you" emails</li>
            <li>Convert New Customers: (High recency, low frequency),offer a discount on their next purchase</li>
            <li>Upsell Potential Loyalists: (Bought recently, but only once or twice),Send targeted messaging highlighting complementary products,</li>
            <li>Cut Losses on Lost Customers: (Low in all three metrics, unlikely to return),Remove them from expensive, active marketing and email lists</li>
          </ul>
        </section>
        
</div>

  )
}

export default Database
