'use client'; // Konwertuje ten komponent na Client Component

export default function Kontakt() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formularz został wysłany!');
  };

  return (
    <div>
      <h1>Kontakt</h1>
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
    </div>
  );
}
