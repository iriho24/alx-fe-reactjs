function Footer() {
  return (
    <footer
      style={{
        marginTop: '40px',
        padding: '16px',
        textAlign: 'center',
        background: '#f5f5f5',
        borderTop: '1px solid #e0e0e0'
      }}
    >
      © {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;
