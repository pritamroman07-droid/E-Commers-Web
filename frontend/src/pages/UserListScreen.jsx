import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Check, X, Trash2 } from 'lucide-react';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const { userInfo } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const { data } = await axios.get('http://localhost:5000/api/users', config);
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, [userInfo]);

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <h1>Users</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
            <th style={{ padding: '1rem' }}>ID</th>
            <th style={{ padding: '1rem' }}>NAME</th>
            <th style={{ padding: '1rem' }}>EMAIL</th>
            <th style={{ padding: '1rem' }}>ADMIN</th>
            <th style={{ padding: '1rem' }}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '1rem' }}>{user._id}</td>
              <td style={{ padding: '1rem' }}>{user.name}</td>
              <td style={{ padding: '1rem' }}>{user.email}</td>
              <td style={{ padding: '1rem' }}>
                {user.isAdmin ? <Check color="var(--success)" /> : <X color="var(--error)" />}
              </td>
              <td style={{ padding: '1rem' }}>
                <button style={{ color: 'var(--error)' }}>
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListScreen;
