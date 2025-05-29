import { useState } from 'react';
import db from '../db/pglite';

const channel = new BroadcastChannel('patient-app');

export default function PatientForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, age, gender, phone, address } = formData;

      await db.query(
        `INSERT INTO patients (name, age, gender, phone, address)
         VALUES ($1, $2, $3, $4, $5)`,
        [name, parseInt(age), gender, phone, address]
      );

      channel.postMessage({ type: 'PATIENT_ADDED' });
      onAdd();
      setFormData({ name: '', age: '', gender: '', phone: '', address: '' });
    } catch (err) {
      console.error('Insert error:', err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-purple-700 mb-4">Register New Patient</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          className="input"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          className="input"
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="input"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="input"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-xl shadow hover:brightness-110 transition-all"
        >
          Register Patient
        </button>
      </form>
    </div>
  );
}
