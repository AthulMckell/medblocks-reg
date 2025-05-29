import { useState } from 'react';
import db from '../db/pglite';

export default function SQLQueryPanel() {
  const [query, setQuery] = useState('SELECT * FROM patients;');
  const [results, setResults] = useState([]);

  const runQuery = async () => {
    try {
      const result = await db.query(query);
      setResults(result);
    } catch (e) {
      setResults([{ error: e.message }]);
    }
  };

  return (
    <div className="mt-8">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
        rows={4}
      />
      <button onClick={runQuery} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
        Run Query
      </button>
      <pre className="mt-4 bg-gray-100 p-2 overflow-auto max-h-60">
        {JSON.stringify(results, null, 2)}
      </pre>
    </div>
  );
}