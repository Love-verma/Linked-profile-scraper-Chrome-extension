
# **LinkedIn Profile Scraper Extension**

This Chrome extension automates the process of scraping public profile data from LinkedIn. It collects useful information such as the name, location, bio, and follower count from multiple profiles and sends the data to a backend server for storage.

---

## **Features**
- Input multiple LinkedIn profile links via a popup interface.
- Automates opening profiles and scraping data in new tabs.
- Sends scraped data to an Express server backend for storage.
- Simple UI with feedback notifications.
- Uses Manifest V3 for modern Chrome extension compatibility.

---

## **Tech Stack**
- **Frontend/Extension**: HTML, CSS, JavaScript, Chrome APIs (Tabs, Scripting)
- **Backend**: Node.js, Express, Sequelize ORM, MySQL
- **Manifest**: Chrome Manifest V3

---

## **Setup Instructions**

### 1. Clone the Repository
```bash
git clone <repository-url>
cd linkedin-profile-scraper
```

### 2. Backend Setup
1. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file in the backend directory with the following content:
   ```ini
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   DB_DATABASE=your_database_name
   DB_HOST=localhost
   DB_DIALECT=mysql
   ```
3. Run the backend server:
   ```bash
   node index.js
   ```

### 3. MySQL Database Setup
- Create a MySQL database (name it as specified in `.env`).
- Ensure your MySQL service is running.

### 4. Extension Setup
1. Navigate to the extension root directory.
2. Open **Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right corner).
4. Click **"Load unpacked"** and select the extension folder.

---

## **Usage Instructions**

1. Open the extension from the Chrome toolbar.
2. Enter one or more LinkedIn profile URLs (comma-separated) in the popup.
3. Click **Start Scraping**. The profiles will open sequentially in new tabs.
4. The extension will scrape the following data:
   - **Name**
   - **Location**
   - **Bio**
   - **About section**
   - **Follower count**
   - **Connection count**
5. The scraped data will be sent to the backend API and stored in the database.

---

## **Project Structure**

```
linkedin-profile-scraper/
│
├── backend/
│   ├── models/
│   │   └── Profile.js           # Sequelize model for profiles
│   ├── routes/
│   │   └── profile.js           # Express route for profile data
│   ├── database/
│   │   └── db.js                # Sequelize configuration
│   ├── .env                     # Environment variables (backend)
│   ├── index.js                 # Backend entry point
│   └── package.json             # Backend dependencies
│
├── manifest.json                # Chrome extension manifest
├── background.js                # Background script (service worker)
├── popup.html                   # Popup UI
├── popup.js                     # Popup logic
└── README.md                    # Project documentation
```

---

## **Screenshots**

1. **Popup Interface**  
   ![Popup Interface](./screenshots/popup.png)

2. **Scraping in Progress**  
   ![Scraping Logs](./screenshots/scraping.png)

---

## **Known Issues**
- LinkedIn's anti-scraping measures may block requests after multiple profiles are scraped. You may need to adjust scraping intervals to avoid being blocked.
- Only public profile data is accessible. Private or restricted profiles will not be scraped.

---

## **Contributing**
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## **License**
This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.

---

## **Acknowledgements**
- [Google Chrome Extension API Documentation](https://developer.chrome.com/docs/extensions/)
- [LinkedIn](https://www.linkedin.com) for the website used in this project.
