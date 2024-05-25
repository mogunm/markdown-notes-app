# React Markdown Notes App

This is a simple notes app built with React, Vite, and Firebase Storage. Users can create, edit, and delete notes using Markdown formatting. The notes are stored in Firebase Storage, providing a secure and scalable solution for managing your notes.

## Features

- Create new notes with Markdown support
- Edit existing notes
- Delete notes
- Save notes to Firebase Storage for persistence
- Responsive design for mobile and desktop devices

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mogunm/markdown-notes-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-markdown-notes
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firebase Storage in your project
   - Copy your Firebase configuration (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId) from Firebase Console
   - Create a `.env` file in the root directory of your project and add your Firebase configuration:
     ```plaintext
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- To create a new note, click on the "New Note" button and start typing in Markdown format.
- To edit an existing note, click on the note card and make changes.
- To delete a note, click on the delete icon on the note card.
- Your notes are automatically saved to Firebase Storage.

## Technologies Used

- React
- Vite
- Firebase (Firebase Storage)

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.