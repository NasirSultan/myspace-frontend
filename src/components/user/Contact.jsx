import { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    information: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showSuccessBtn, setShowSuccessBtn] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setShowSuccessBtn(false);

    try {
      const res = await axios.post('https://myspace-backend.vercel.app/api/contact/api/contact', form);
      setMessage(res.data.message);
      setForm({ name: '', email: '', number: '', subject: '', information: '' });
      setShowSuccessBtn(true);
    } catch (err) {
      setError(err.response?.data?.error || 'Submission failed.');
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-xl shadow-sm w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

        {showSuccessBtn && (
          <button
            type="button"
            className="mb-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
            onClick={() => setShowSuccessBtn(false)}
          >
            {message || 'Success!'}
          </button>
        )}

        {error && <p className="mb-4 text-red-600">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="mb-4 w-full p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="mb-4 w-full p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="text"
          name="number"
          placeholder="Phone Number (OPTIONAL)"
          value={form.number}
          onChange={handleChange}
          className="mb-4 w-full p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="mb-4 w-full p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="information"
          placeholder="Your Message"
          value={form.information}
          onChange={handleChange}
          className="mb-4 w-full p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="2"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-purple-900 text-white py-2 rounded hover:bg-purple-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
