import { NavLink } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  marginRight: '16px',
  padding: '8px 12px',
  borderRadius: '6px'
};

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 20px',
        background: '#0d47a1',
        color: 'white',
        position: 'sticky',
        top: 0
      }}
    >
      <div style={{ fontWeight: 700, marginRight: '20px' }}>My Company</div>

      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? '#0d47a1' : 'white',
          background: isActive ? 'white' : 'transparent'
        })}
        end
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? '#0d47a1' : 'white',
          background: isActive ? 'white' : 'transparent'
        })}
      >
        About
      </NavLink>

      <NavLink
        to="/services"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? '#0d47a1' : 'white',
          background: isActive ? 'white' : 'transparent'
        })}
      >
        Services
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? '#0d47a1' : 'white',
          background: isActive ? 'white' : 'transparent'
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
