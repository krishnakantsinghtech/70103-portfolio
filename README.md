# 🌸 Interactive Portfolio Website

An interactive and customizable portfolio website that allows users to personalize their experience with dynamic backgrounds — including animated video uploads.

Built for creators, developers, and designers who want a modern portfolio that feels alive, expressive, and unique.

---

## ✨ Features

### 🎥 Custom Background Video Upload
- Upload your own background video (up to **100MB**) directly from the website
- Videos are stored locally in your browser using **IndexedDB** — no server needed
- Supported formats: MP4, WebM, and all browser-supported video formats
- Videos play automatically, loop seamlessly, and are muted for a clean experience
- Cinematic vignette overlay and gradient fade for a polished, professional look
- Reset to the default background video at any time

### ⚙️ Admin Settings Panel
- A **gear icon button** is located at the **bottom-right corner** of the website
- Click it to open the admin modal where you can:
  - **Upload Video**: Select a video file from your device to replace the hero background
  - **Reset to Default**: Remove the custom video and restore the original background
- The upload button shows a loading state while the video is being saved
- File size is validated before upload (max 100MB)

### 🌸 Sakura Particle Effects
- Floating sakura (cherry blossom) particles animate across the screen
- Adds a dreamy, atmospheric layer to the overall experience

### 💻 Modern Portfolio Layout
- **Hero Section**: Full-screen video background with animated text introduction
- **About Section**: Showcase your skills, story, and what you do
- **Contact Section**: Easy way for visitors to get in touch
- Clean, responsive design that works on desktop, tablet, and mobile

### 🎨 Design Details
- Japanese-inspired aesthetic with sakura and moonlight gradient themes
- Glass-morphism UI elements with blur and transparency effects
- Smooth scroll animations powered by **Framer Motion**
- Custom typography with display and body font pairing
- Dark theme optimized for visual impact

---

## 🛠️ How the Video Upload Works

### Step-by-Step:
1. **Click the ⚙️ gear icon** at the bottom-right corner of the page
2. The admin settings modal will open
3. Click **"Upload Video"** and select a video file (MP4, WebM, etc.)
4. The video must be **under 100MB** in size
5. Once uploaded, the video is saved to **IndexedDB** in your browser
6. The hero background immediately updates to show your uploaded video
7. The video persists across page refreshes — no need to re-upload
8. To go back to the default video, click **"Reset to Default"**

### Technical Details:
- **Storage**: Uses IndexedDB (not localStorage) to handle large video files
- **Persistence**: Videos survive page refreshes and browser restarts
- **Performance**: Videos are loaded as Blob URLs for optimal playback
- **Display**: Videos auto-play, loop, and are muted with enhanced brightness and contrast
- **Overlay**: A radial vignette gradient and bottom fade blend the video into the page

---

## 🚀 Tech Stack

- **React** + **TypeScript** — Component-based UI
- **Vite** — Fast build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations and transitions
- **shadcn/ui** — Accessible UI components
- **IndexedDB** — Client-side storage for large files

---

## 📺 Creator

**Krishna Kant Singh**

🔹 YouTube: [https://youtube.com/@aimiweb](https://youtube.com/@aimiweb)



> Creating web experiences where design meets creativity.
