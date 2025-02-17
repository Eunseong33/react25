// Popup.js
import React from 'react';
import './Popup.css'; // Optional for styling

const Popup = ({ username, password, email, phone, birthdate, gender, extratime, onClose }) => {
      return (
            <div className="popup-overlay">
                  <div className="popup-container">
                        <h2>Submitted Information</h2>
                        <div>
                              <p><strong>아이디:</strong> {username}</p>
                              <p><strong>비밀번호:</strong> {password}</p>
                              <p><strong>이메일:</strong> {email}</p>
                              <p><strong>연락처:</strong> {phone}</p>
                              <p><strong>생일:</strong> {birthdate}</p>
                              <p><strong>성별:</strong> {gender}</p>
                              <p><strong>취미:</strong> {extratime}</p>
                        </div>
                        <button onClick={onClose}>Close</button>
                  </div>
            </div>
      );
};

export default Popup;
