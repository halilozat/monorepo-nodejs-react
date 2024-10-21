import React from 'react';
import Button from '../Button';

function SnackBarDismissButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      variant="text"
      sx={{ color: 'white', textDecorationLine: 'underline' }}
      onClick={onClick}
    >
      Kapat
    </Button>
  );
}

export default SnackBarDismissButton;
