/**
 * @file app.js
 * @description 
 * A Node.js script to create an HTTP server for serving an HTML file.
 * 
 * Authors:
 * @author Aviran Amormin
 * @author Natalia Akulov
 * 
 * @details
 * - Serves an HTML file located in the 'templates' folder when the root URL ('/') or '/index' is accessed.
 * - For any other route, a basic 404 message is returned.
 * 
 * Usage:
 * 1. Place the 'page.html' in a folder named 'templates' (same directory as this script).
 * 2. Run this file using the command: node app.js
 * 3. Access the server in your browser at: http://localhost:3000/
 */

// Import required core modules
const http = require('http'); // For creating the HTTP server
const fs = require('fs'); // For reading files
const path = require('path'); // For working with file paths

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Handle root URL ('/') and '/index'
  if (req.url === '/' || req.url === '/index') {
    const filePath = path.join(__dirname, 'templates', 'page.html'); // Construct file path

    // Read the file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // Handle errors while reading the file
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error: Could not read the file.');
      } else {
        // Serve the HTML content
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Return 404 for any other URL
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404: Page Not Found');
  }
});

// Define the port the server will run (listen) on
const PORT = 3000;

// Start the server and log a message
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
