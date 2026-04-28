# TaskFlow - Todo List Application

A modern, feature-rich Todo List application built with React Native and Expo, featuring authentication, task management, and beautiful UI design.

## 📱 Screenshots

<div align="center">
  <img src="https://via.placeholder.com/300x600/6366f1/ffffff?text=Login+Screen" alt="Login Screen" width="200" />
  <img src="https://via.placeholder.com/300x600/6366f1/ffffff?text=Signup+Screen" alt="Signup Screen" width="200" />
  <img src="https://via.placeholder.com/300x600/6366f1/ffffff?text=Todo+List" alt="Todo List" width="200" />
</div>

## ✨ Features

### Authentication
- **User Registration** - Create new account with email and password
- **User Login** - Secure login with email and password
- **Form Validation** - Real-time validation for email and password
- **Social Login** - Placeholder for Google authentication

### Todo Management
- ✅ **Create Tasks** - Add new tasks with a simple input
- ✅ **Complete Tasks** - Mark tasks as complete/incomplete
- ✅ **Edit Tasks** - Tap on any task to edit its content
- ✅ **Delete Tasks** - Remove tasks with confirmation dialog
- ✅ **Task Statistics** - View total, completed, and pending tasks
- ✅ **Progress Tracking** - Visual progress bar showing completion rate
- ✅ **Date Stamps** - See when each task was created

### User Experience
- 🎨 **Modern UI** - Clean, minimalist design with smooth animations
- 📱 **Responsive** - Works on all screen sizes (iOS and Android)
- 🔄 **Real-time Updates** - Instant feedback on all actions
- 💾 **Persistent Storage** - Tasks persist during the session
- 🚀 **Fast Performance** - Optimized re-renders and smooth scrolling

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (File-based routing)
- **Language**: TypeScript
- **State Management**: React Context API
- **Styling**: StyleSheet (React Native)
- **Authentication**: Custom Auth Context with mock API
- **Backend**: Mock API services (ready for real backend integration)

## 📁 Project Structuretaskflow/
├── src/
│ ├── app/ # Expo Router pages
│ │ ├── (tabs)/ # Tab navigation screens
│ │ │ ├── _layout.tsx # Tab layout configuration
│ │ │ ├── index.tsx # Main todo screen
│ │ │ └── profile.tsx # User profile screen
│ │ ├── _layout.tsx # Root layout
│ │ ├── index.tsx # Welcome screen
│ │ ├── login.tsx # Login screen
│ │ └── signup.tsx # Signup screen
│ ├── components/ # Reusable UI components
│ │ ├── auth/ # Authentication components
│ │ │ ├── AuthHeader.tsx
│ │ │ ├── AuthInput.tsx
│ │ │ └── SocialButton.tsx
│ │ └── todo/ # Todo components
│ │ ├── TodoItem.tsx
│ │ ├── TodoInput.tsx
│ │ └── TodoStats.tsx
│ ├── containers/ # Container components
│ │ ├── auth/ # Auth logic containers
│ │ │ ├── LoginContainer.tsx
│ │ │ └── SignupContainer.tsx
│ │ └── todo/ # Todo logic container
│ │ └── TodoContainer.tsx
│ ├── contexts/ # React Context providers
│ │ └── AuthContext.tsx # Authentication context
│ ├── services/ # Business logic and API calls
│ │ ├── authService.ts # Authentication service
│ │ ├── todoService.ts # Todo CRUD operations
│ │ └── validationService.ts # Form validation
│ └── types/ # TypeScript type definitions
│ ├── auth.ts
│ └── todo.ts
├── .gitignore
├── app.json
├── package.json
├── tsconfig.json
└── README.md


## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac users) or Android Emulator
- Physical device with Expo Go app

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/taskflow.git
cd taskflow