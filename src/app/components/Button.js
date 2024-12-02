// components/Button.js
'use client';  // <-- Dodajemy tę linijkę, aby oznaczyć komponent jako Client Component

const Button = ({ label, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
        >
            {label}
        </button>
    );
};

export default Button;
