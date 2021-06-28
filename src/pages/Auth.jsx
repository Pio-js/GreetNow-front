import './Auth.css';
import {useHistory} from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';

export default function Auth() {
    return (
        <div>
            <h2>If the user is logged in, he will see the dashboard</h2>
            <button>Login</button>
            <button>Register</button>
        </div>
    )
}
