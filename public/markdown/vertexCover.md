# Street Camera Optimization

[Github Repo](https://github.com/samudra-perera/Urban-Street-Camera-Optimizer) <a>

## How it was built

In graph theory, a [vertex cover](https://en.wikipedia.org/wiki/Vertex_cover#:~:text=In%20graph%20theory%2C%20a%20vertex,every%20edge%20of%20the%20graph.) is a set of vertices that includes at least one endpoint of every edge in a graph. Calculating the minimum vertex cover is a NP Hard problem and this was a doozy of a program to write. Outlined below are the subprograms I wrote to tackle this problem.

### 1. Street Database - Python Process

The python process was built to add street names and segements to a database. The process would then calculate all the vertexes and edges of the streets inputted in the database.

### 2. Shortest Path - C++

This module in the program was used to calculate the shortest path between two vertexes in the street database. This was doing by converting the list of edges into an adjacency list and then performing DFS to find the shortest path.

### 3. Encoding into SAT - C++

The final step to solve the minimum vertex cover was encoding the database intersections and edges into a propositional formula in [CNF](https://equaeghe.github.io/ecyglpki/cnfsat.html). This encoding was done using Minisat 2.

### 4. Driver Program - C++

The driver program runs the four programs above using multiple forked processes to send inputs and outputs to each program. The driver program has a random street generator to send inputs to the py process, which then sends outputs to both the shortest path and SAT programs.

### 5. Optimized SAT Encoding - C++

This program contains 2 additional algorithms to approximate the minimum vertex cover alongside a 3-SAT reduction to improve the runtime of the original SAT encoding. Multiple threads were utilized to run the algorithms concurrently.
