import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Mail, LogOut } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-8">My Profile</h1>

        <div className="bg-card p-6 rounded-sm border border-border space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-secondary p-4 rounded-full">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-muted-foreground">BACut Member</p>
            </div>
          </div>

          <div className="border-t border-border pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <Button variant="destructive" onClick={handleLogout} className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card p-6 rounded-sm border border-border">
            <h3 className="font-semibold mb-2">Order History</h3>
            <p className="text-sm text-muted-foreground">
              View your past orders and track current shipments.
            </p>
            <Button variant="outline" className="mt-4 w-full">
              View Orders
            </Button>
          </div>

          <div className="bg-card p-6 rounded-sm border border-border">
            <h3 className="font-semibold mb-2">Saved Addresses</h3>
            <p className="text-sm text-muted-foreground">
              Manage your shipping and billing addresses.
            </p>
            <Button variant="outline" className="mt-4 w-full">
              Manage Addresses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
