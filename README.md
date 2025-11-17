
# NeuroPlanner - Local development

This project uses React + Vite for the frontend and `json-server` as a local fake REST API for development/testing.

The README below describes how to start the frontend and the fake API, how users/photos are stored for the demo, and common troubleshooting tips.

**Ports used**
- Frontend (Vite): default (usually `5173`) — started with `npm run dev`.
- Fake API (`json-server`): `4000` — started with `npm run serve:api`.

**Quick start (PowerShell)**
1. Install dependencies:

```
npm install
```

2. Start the fake API (in one terminal):

```
npm run serve:api
```

This runs `json-server --watch db.json --port 4000` and exposes a REST API at `http://localhost:4000`. The initial file `db.json` contains an empty `users` array and will be updated as you create accounts.

3. Start the frontend (in another terminal):

```
npm run dev
```

4. Open the app in your browser (Vite will show the URL, typically `http://localhost:5173`).

Usage notes
- Sign up at `/signup` — the form now sends a POST to `http://localhost:4000/users`. The created user is saved in `db.json` and also stored in `localStorage` under the key `user`.
- Login at `/login` — the app queries `GET /users?email=...` and compares the saved password.
- Profile photo: For the demo we convert selected images to data URLs (base64) so the `photo` field is stored directly in `db.json` and will persist across reloads.

Testing / inspecting the fake API
- List users in your browser or with curl:

```
curl http://localhost:4000/users
```

- Inspect `db.json` to see saved users and their `photo` fields (data URLs will be long strings starting with `data:image/`).

Reset / seed data
- To reset users, stop `json-server` and edit `db.json` (restore `{"users":[]}`), then restart `npm run serve:api`.

Notes & limitations
- This fake API is for local development and demos only. For production you should implement a secure backend that stores files and hashes passwords (do NOT store passwords in plaintext).
- Currently passwords are stored as plain text in `db.json` for simplicity — treat this data as not secure.
- Image uploads are saved as data URLs in `db.json` for demo persistence. In a real app upload files to a storage service and store the public URL.

Troubleshooting
- If you get CORS or network errors, confirm `json-server` is running on port `4000` and that `http://localhost:4000` is accessible.
- If login fails after signup, check that the e-mail you used at signup is normalized (signup converts e-mail to lowercase and trims spaces). The login flow also lowercases/trims the e-mail before querying.

Further improvements you can make
- Replace `json-server` with a real backend and implement secure authentication (bcrypt, JWT/session cookies).
- Store uploaded images on a real file server or cloud storage and save URLs in the API.

If you want, I can add a sample `seed` user to `db.json`, or convert the photo storage to separate static files. Tell me which you prefer and I’ll implement it.
