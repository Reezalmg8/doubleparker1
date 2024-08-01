import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const QRCodePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { qrCodeDataUrl } = location.state || {};

  useEffect(() => {
    if (qrCodeDataUrl) {
      // Redirect to ActionPage with userId from the QR code URL
      const url = new URL(qrCodeDataUrl);
      const userId = new URLSearchParams(url.search).get('userId');
      if (userId) {
        navigate(`/action?userId=${userId}`);
      }
    }
  }, [qrCodeDataUrl, navigate]);

  return (
    <div>
      {qrCodeDataUrl ? (
        <img src={qrCodeDataUrl} alt="QR Code" />
      ) : (
        <p>No QR code available</p>
      )}
    </div>
  );
};

export default QRCodePage;
