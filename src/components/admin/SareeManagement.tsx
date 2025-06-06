
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface Saree {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  offer?: string;
  whatsappLink: string;
}

const SareeManagement = () => {
  const [sarees, setSarees] = useState<Saree[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingSaree, setEditingSaree] = useState<Saree | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: '',
    offer: '',
    whatsappLink: ''
  });

  const categories = ['Cotton', 'Silk', 'Banarasi', 'Wedding', 'Party Wear', 'Georgette'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newSaree: Saree = {
      id: editingSaree?.id || Date.now().toString(),
      name: formData.name,
      price: parseFloat(formData.price),
      category: formData.category,
      description: formData.description,
      image: formData.image,
      offer: formData.offer,
      whatsappLink: formData.whatsappLink
    };

    if (editingSaree) {
      setSarees(sarees.map(s => s.id === editingSaree.id ? newSaree : s));
      setEditingSaree(null);
    } else {
      setSarees([...sarees, newSaree]);
    }

    setFormData({
      name: '',
      price: '',
      category: '',
      description: '',
      image: '',
      offer: '',
      whatsappLink: ''
    });
    setIsAddDialogOpen(false);
  };

  const handleEdit = (saree: Saree) => {
    setEditingSaree(saree);
    setFormData({
      name: saree.name,
      price: saree.price.toString(),
      category: saree.category,
      description: saree.description,
      image: saree.image,
      offer: saree.offer || '',
      whatsappLink: saree.whatsappLink
    });
    setIsAddDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setSarees(sarees.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Saree Management</h2>
          <p className="text-muted-foreground">Add, edit, and manage your saree inventory</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Saree
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingSaree ? 'Edit Saree' : 'Add New Saree'}</DialogTitle>
              <DialogDescription>
                {editingSaree ? 'Update the saree details below.' : 'Fill in the details to add a new saree to your inventory.'}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Saree Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="offer">Offer (Optional)</Label>
                <Input
                  id="offer"
                  value={formData.offer}
                  onChange={(e) => setFormData({...formData, offer: e.target.value})}
                  placeholder="e.g., 20% OFF"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Buy Link</Label>
                <Input
                  id="whatsapp"
                  value={formData.whatsappLink}
                  onChange={(e) => setFormData({...formData, whatsappLink: e.target.value})}
                  placeholder="https://wa.me/1234567890?text=Hi..."
                  required
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingSaree ? 'Update Saree' : 'Add Saree'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Saree Inventory</CardTitle>
          <CardDescription>
            {sarees.length} sarees in your inventory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Offer</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sarees.map((saree) => (
                <TableRow key={saree.id}>
                  <TableCell>
                    <img 
                      src={saree.image} 
                      alt={saree.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{saree.name}</TableCell>
                  <TableCell>{saree.category}</TableCell>
                  <TableCell>₹{saree.price}</TableCell>
                  <TableCell>{saree.offer || '-'}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(saree)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(saree.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {sarees.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No sarees added yet. Click "Add New Saree" to get started.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SareeManagement;
