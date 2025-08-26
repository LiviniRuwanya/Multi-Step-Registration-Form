# Multi-Step Registration Form 🚀

A professional, modern multi-step form built with React that showcases real-world frontend development skills. This project demonstrates form validation, state management, user experience design, and responsive web development.

![Multi-Step Form Demo](https://img.shields.io/badge/Status-Complete-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.6-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎯 Core Functionality
- **Multi-step form navigation** with progress tracking
- **Real-time form validation** using Yup schemas
- **Responsive design** that works on all devices
- **LocalStorage persistence** to prevent data loss
- **Smooth animations** and transitions

### 🔧 Technical Features
- **React Hook Form** for efficient form management
- **Yup validation** with custom error messages
- **TailwindCSS** for modern, responsive styling
- **Vite** for fast development and building
- **ESLint** for code quality

### 🎨 User Experience
- **Progress bar** showing current step and completion
- **Back/Next navigation** with validation
- **Error handling** with clear feedback
- **Success confirmation** with next steps
- **Accessibility** features for better UX

## 📋 Form Steps

### Step 1: Personal Information
- First Name & Last Name (with validation)
- Email Address (format validation)
- Password & Confirm Password (strength requirements)
- Gender Selection (radio buttons)

### Step 2: Preferences
- Newsletter Subscription (checkbox)
- Preferred Contact Method (radio buttons)
- Interests Selection (multiple checkboxes)

### Step 3: Confirmation
- Review all entered information
- Security notice about password handling
- Final submission button

### Step 4: Success
- Success message with animation
- Next steps guidance
- Option to start over

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Form Management**: React Hook Form 7.48.2
- **Validation**: Yup 1.3.3
- **Styling**: TailwindCSS 3.3.6
- **Build Tool**: Vite 5.0.8
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/multi-step-form.git
   cd multi-step-form
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 📁 Project Structure

```
multi-step-form/
├── public/
├── src/
│   ├── components/
│   │   ├── ProgressBar.jsx
│   │   ├── PersonalInfoStep.jsx
│   │   ├── PreferencesStep.jsx
│   │   ├── ConfirmationStep.jsx
│   │   └── SuccessStep.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Styling
The project uses TailwindCSS with custom color schemes. You can modify the colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Main brand color
    // ... other shades
  }
}
```

### Form Validation
Validation rules are defined in `src/App.jsx` using Yup schemas. You can modify validation rules for each step:

```javascript
const personalInfoSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  // ... other validations
})
```

### Adding New Steps
To add a new step:

1. Create a new component in `src/components/`
2. Add it to the `steps` array in `src/App.jsx`
3. Define validation schema if needed
4. Update the progress bar logic

## 🌟 Key Learning Outcomes

This project demonstrates:

- **Form Validation**: Real-time validation with custom error messages
- **State Management**: Managing complex form state across multiple steps
- **User Experience**: Intuitive navigation and clear feedback
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Code Organization**: Modular component architecture
- **Modern React**: Hooks, functional components, and best practices

## 📱 Responsive Design

The form is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔒 Security Features

- Password strength validation
- Secure form submission handling
- No sensitive data stored in localStorage
- Input sanitization and validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Hook Form](https://react-hook-form.com/) for efficient form management
- [Yup](https://github.com/jquense/yup) for schema validation
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS
- [Vite](https://vitejs.dev/) for fast build tooling

## 📞 Support

If you have any questions or need help with this project, please:

- Open an issue on GitHub
- Contact: [your-email@example.com]
- Check the documentation above

---

**Built with ❤️ by [Your Name]**

*This project showcases real-world frontend development skills and is perfect for portfolios and learning React best practices.*

