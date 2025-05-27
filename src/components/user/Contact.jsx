import { useState, useEffect } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '', // <-- stored as 'number'
    subject: '',
    information: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showSuccessBtn, setShowSuccessBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setShowSuccessBtn(false);
    setLoading(true);

    try {
      const res = await axios.post('https://myspace-backend.vercel.app/api/contact', form);
      setForm({ name: '', email: '', number: '', subject: '', information: '' });
      setMessage(res.data.message);
      setShowSuccessBtn(true);
    } catch (err) {
      setError(err.response?.data?.error || 'Submission failed.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showSuccessBtn) {
      const timer = setTimeout(() => setShowSuccessBtn(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessBtn]);

  return (
    <div className="flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-xl shadow-sm w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">Contact Me</h2>

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

        {/* Phone number input with label on right */}
        <div className="mb-4">
          <div className="flex items-center justify-between gap-3">
            <PhoneInput
              country={'us'}
              value={form.number}
              onChange={(number) => setForm({ ...form, number })}
              inputProps={{
                name: 'number',
                autoFocus: false,
              }}
              containerClass="flex-1"
              inputClass="!w-full !p-2 !pl-12 !rounded !bg-white !border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              buttonClass="!border-none !bg-white"
              dropdownClass="!bg-white !text-black"
            />
            <label className="whitespace-nowrap text-sm text-gray-700">
               Optional
            </label>
          </div>
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="mb-4 w-full p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          name="information"
          placeholder="Your Message"
          value={form.information}
          onChange={handleChange}
          required
          className="mb-4 w-full p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="3"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded transition ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-purple-900 hover:bg-purple-800 text-white'
          }`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default App;
