
## 📋 Task Requirements

A Node.js Express server that implements logging and authentication middleware.

Create an Express server that:
1.  **Uses middleware for request logging (Logger):**
    - The software must log to the console: Request Method (GET), Request URL, and current Date & Time.
2.  **Implements middleware for permission checking (Auth):**
    - The software must check if the parameter `user=admin` is passed in the request (Query Parameters).
    - If the parameter is missing or not equal to `admin`, return a 403 error with the message "Access Denied".
    - If `user=admin`, the request proceeds.
3.  **Implements several routes:**
    - `GET /`: Returns "Welcome to the homepage!".
    - `GET /admin`: Available only to authorized users (`user=admin`). Returns "Welcome to the admin page!".
    - `GET /public`: Available to everyone. Returns "This is a public page.".

**Requirements:**
- Apply Logging Middleware to **all** routes.
- Apply Authorization Middleware **only** to the `/admin` route.

## 🚀 How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the server:
    ```bash
    node app.js
    ```
3.  Test the routes:
    - `http://localhost:3000/`
    - `http://localhost:3000/public`
    - `http://localhost:3000/admin` (Should fail)
    - `http://localhost:3000/admin?user=admin` (Should succeed)

## 💡 Solution Approach

The solution uses:
- **Express.js** framework.
- **Logger Middleware**: A function that runs on every request to log details.
- **Auth Middleware**: A function that checks `req.query.user` before allowing access to protected routes.
- **Route Handlers**: Specific functions for each path.

## 👥 Students

- Bshara Karkaby [49-2]
- Moner Makhouly [49-2]

---

**Happy coding!** 💻✨
