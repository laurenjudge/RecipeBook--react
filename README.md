# RecipeBook
Built with React + TypeScript + Vite

View live: https://recipebook-f1fdd.web.app/

## Project setup
```
1. npm install
2. create a .env file with the following:
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_DATABASE_URL=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
3. Credentials are found in the Project settings inside Firebase
4. npm run serve
```

### Deployment
```
1. firebase init
2. sign into firebase
3. install firebase hosting (set default folder to 'dist')
4. npm run build
5. firebase deploy