import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};