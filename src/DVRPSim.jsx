import React from 'react'

function DVRPSim() {
  return (
    <div>
      <div class="container">

        <div class="image-box">
          <img className='home__img' src='src/assets/bellman.jpg'></img>
        </div>

        <div class="text-content">
          <h1>Distance Vector Routing Protocol Simulation</h1>
          <p>The simulation uses a single Python script that can run on each machine in the network. Each instance communicates with its neighboring machines using TCP peer-to-peer connections. Because the program needs to handle multiple tasks simultaneously—including receiving messages, sending routing-table updates, and processing administrative input—I used multithreading to manage these operations concurrently.</p>
          <p>The routing algorithm is based on the Bellman-Ford algorithm. Every 10 seconds, each node broadcasts its routing table to its neighbors. When a node receives an updated routing table, it evaluates the available paths and updates its own table when a shorter path is discovered.</p>
          <p>This project gave me hands-on experience with computer networking, TCP sockets, concurrency, multithreading, synchronization, and routing algorithms. I particularly enjoyed seeing how networking and concurrency work together and would like to continue developing more projects that combine these areas.</p>
        </div>

      </div>
    </div>
  )
}

export default DVRPSim
