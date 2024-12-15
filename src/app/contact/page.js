'use client'; // Konwertuje ten komponent na Client Component
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
export default function Kontakt() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formularz został wysłany!');
  };

  return (
    <div>
            <Header />
            <Title>Kontakt</Title>
            
      <form onSubmit={handleSubmit}>
        <label>
          Imię:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Wiadomość:
          <textarea name="message" required></textarea>
        </label>
        <br />
        <button type="submit">Wyślij</button>
      </form>
            
      <Footer />
    </div>
  
      
    
  );
}
