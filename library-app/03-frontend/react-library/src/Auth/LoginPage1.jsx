import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body text-center">

          <div className="mb-4">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: 56, height: 56 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4z"/>
              </svg>
            </div>
            <h4 className="fw-semibold mb-1">Welcome back!</h4>
            <p className="text-muted small mb-0">Sign in to continue to your account!</p>
          </div>

          <button
            className="btn btn-primary w-100 py-2 fw-medium"
            onClick={() => loginWithRedirect()}
          >
            Sign in
          </button>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
