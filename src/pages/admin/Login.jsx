import React, { useState } from 'react';
import honey from '../../assets/honey2.webp';
import { useLoginMutation } from '../../store/shopApi';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login({ email, password }).unwrap();
      localStorage.setItem('user',  JSON.stringify(user.user));
      localStorage.setItem('token',  user?.token);


      toast.success('Uğurla giriş edildi');
      user?.user?.role == "admin" ? navigate('/admin/product') : navigate('/');
    } catch (error) {
      console.log('Login error:', error);

      const errMessage = Array.isArray(error?.data?.message)
        ? error.data.message.join(', ')
        : error?.data?.message || "Giriş zamanı xəta baş verdi";

      toast.error(errMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full bg-yellow-50">
        {/* Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-semibold text-center text-yellow-800 mb-6">Login</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium ">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium ">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition font-medium tracking-wide flex justify-center items-center"
              >
                {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Login'}
              </button>
            </form>
          </div>
        </div>

        <div className="md:w-1/2 hidden md:block">
          <img src={honey} alt="Login Visual" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
