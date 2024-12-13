# Assignment: Create Server

## Created By: Aviran Amormin and Natalia Akulov

---

## Overview
This project includes two main components:

1. **HTML Page** (page.html):
   - A webpage simulating the details of a single book.
   - Includes:
     - A book cover designed without using an image.
     - The author's name and a short description of the book.
     - A footer section with project details.

2. **Node.js Server** (app.js):
   - A server script to deliver the HTML page to the browser.
   - Handles routing and basic error responses for unknown or missing files.

---

## Features

1. **HTML Design**:
   - Book cover divided into three sections:
     - Top (e.g., publisher details and author).
     - Middle (title of the book).
     - Bottom (large initials and taglines).
   - Uses internal CSS for layout and styling.

2. **Server Functionality**:
   - Serves the `page.html` file located in the `templates/` folder.
   - Responds with `404: Page Not Found` for invalid URLs.
   - Displays `500 Internal Server Error` if the HTML file cannot be accessed.

---

## Project Structure

```
create-servers/
├── templates/
│   └── page.html       # HTML page containing the book details and design.
├── app.js              # Node.js server code to serve the HTML file.
├── README.md           # Documentation for the project.
```

---

## Instructions

### To Run the Server:
1. Start the server by executing the command:
   ```bash
   node app.js
   ```

2. Open your browser and visit:
   ```
   http://localhost:3000
   ```

3. View the styled book cover page.

4. For invalid routes, a `404: Page Not Found` message will appear.

---

## Tasks Implemented:

1. **HTML Page**:
   - A styled HTML page to simulate a book cover without using images.
   - Internal CSS for design consistency.

2. **Server**:
   - Node.js script to deliver the HTML file.
   - Includes error handling for unknown routes and file issues.

---

## Authors
- Natalia Akulov
- Aviran Amormin
