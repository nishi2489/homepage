interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const TabButton = ({ isActive, onClick, children }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '16px 32px',
        fontSize: '18px',
        borderBottom: isActive ? '4px solid #3b82f6' : '4px solid transparent',
        color: isActive ? '#3b82f6' : '#6b7280',
        background: isActive ? '#dbeafe' : 'transparent',
        fontWeight: isActive ? 'bold' : 'normal',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        margin: '0 4px',
        minWidth: '150px',
        borderRadius: '4px 4px 0 0',
      }}
    >
      {children}
    </button>
  );
}; 