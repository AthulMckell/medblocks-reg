import { useEffect, useState } from 'react';
import db from './db/pglite';
import PatientForm from './components/PatientForm';
import SQLQueryPanel from './components/SQLQueryPanel';

const channel = new BroadcastChannel('patient-app');

export default function App() {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
  const result = await db.query('SELECT * FROM patients');
  setPatients(result.rows);
};

  useEffect(() => {
    fetchPatients();
    channel.onmessage = (e) => {
      if (e.data.type === 'PATIENT_ADDED') fetchPatients();
    };
    return () => channel.close();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
  <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 space-y-6">
    <h1 className="text-3xl font-bold text-center text-blue-700">Patient Registration</h1>
    
    <PatientForm onAdd={fetchPatients} />

    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Registered Patients</h2>
      <table className="w-full table-auto mt-2 border text-sm">
        <thead className="bg-blue-100">
          <tr>
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Age</th>
            <th className="border px-2 py-1">Gender</th>
            <th className="border px-2 py-1">Phone</th>
            <th className="border px-2 py-1">Address</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="hover:bg-blue-50">
              <td className="border px-2 py-1">{p.id}</td>
              <td className="border px-2 py-1">{p.name}</td>
              <td className="border px-2 py-1">{p.age}</td>
              <td className="border px-2 py-1">{p.gender}</td>
              <td className="border px-2 py-1">{p.phone}</td>
              <td className="border px-2 py-1">{p.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <SQLQueryPanel />
  </div>
</div>

  );
}