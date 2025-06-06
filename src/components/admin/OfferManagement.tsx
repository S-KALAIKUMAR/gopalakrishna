import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Star, Clock, Tag } from 'lucide-react';

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  type: 'percentage' | 'fixed' | 'bogo';
  value: number;
  validFrom: string;
  validUntil: string;
  applicableTo: 'all' | 'category' | 'specific';
  categorySlug?: string;
  originalPrice: string;
  salePrice: string;
  rating: number;
  isFeatured: boolean;
  isActive: boolean;
}

const OfferManagement = () => {
  const [offers, setOffers] = useState<Offer[]>([
    {
      id: '1',
      title: 'Festive Sale - 30% Off',
      description: 'Get 30% off on all silk sarees this festive season',
      discount: '30% OFF',
      type: 'percentage',
      value: 30,
      validFrom: '2024-01-01',
      validUntil: '2024-12-31',
      applicableTo: 'category',
      categorySlug: 'silk',
      originalPrice: '₹4,999',
      salePrice: '₹3,499',
      rating: 4.5,
      isFeatured: true,
      isActive: true
    },
    {
      id: '2',
      title: 'Wedding Collection Special',
      description: 'Special prices on premium wedding sarees',
      discount: '25% OFF',
      type: 'percentage',
      value: 25,
      validFrom: '2024-01-01',
      validUntil: '2024-11-30',
      applicableTo: 'category',
      categorySlug: 'wedding',
      originalPrice: '₹7,999',
      salePrice: '₹5,999',
      rating: 4.8,
      isFeatured: true,
      isActive: true
    },
    {
      id: '3',
      title: 'Cotton Comfort Deal',
      description: 'Buy 2 cotton sarees and get 1 free',
      discount: 'Buy 2 Get 1',
      type: 'bogo',
      value: 0,
      validFrom: '2024-01-01',
      validUntil: '2024-10-15',
      applicableTo: 'category',
      categorySlug: 'cotton',
      originalPrice: '₹2,999',
      salePrice: '₹1,999',
      rating: 4.3,
      isFeatured: false,
      isActive: true
    }
  ]);
  
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState<Offer | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'percentage' as 'percentage' | 'fixed' | 'bogo',
    value: '',
    validFrom: '',
    validUntil: '',
    applicableTo: 'all' as 'all' | 'category' | 'specific',
    categorySlug: '',
    originalPrice: '',
    salePrice: '',
    rating: '',
    isFeatured: false
  });

  const categories = ['cotton', 'silk', 'banarasi', 'wedding', 'party-wear', 'georgette'];

  const generateDiscountText = (type: string, value: number) => {
    switch (type) {
      case 'percentage':
        return `${value}% OFF`;
      case 'fixed':
        return `₹${value} OFF`;
      case 'bogo':
        return 'Buy 2 Get 1';
      default:
        return `${value}% OFF`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newOffer: Offer = {
      id: editingOffer?.id || Date.now().toString(),
      title: formData.title,
      description: formData.description,
      discount: generateDiscountText(formData.type, parseInt(formData.value)),
      type: formData.type,
      value: parseInt(formData.value) || 0,
      validFrom: formData.validFrom,
      validUntil: formData.validUntil,
      applicableTo: formData.applicableTo,
      categorySlug: formData.categorySlug,
      originalPrice: formData.originalPrice,
      salePrice: formData.salePrice,
      rating: parseFloat(formData.rating) || 0,
      isFeatured: formData.isFeatured,
      isActive: true
    };

    if (editingOffer) {
      setOffers(offers.map(o => o.id === editingOffer.id ? newOffer : o));
      setEditingOffer(null);
    } else {
      setOffers([...offers, newOffer]);
    }

    setFormData({
      title: '',
      description: '',
      type: 'percentage',
      value: '',
      validFrom: '',
      validUntil: '',
      applicableTo: 'all',
      categorySlug: '',
      originalPrice: '',
      salePrice: '',
      rating: '',
      isFeatured: false
    });
    setIsAddDialogOpen(false);
  };

  const handleEdit = (offer: Offer) => {
    setEditingOffer(offer);
    setFormData({
      title: offer.title,
      description: offer.description,
      type: offer.type,
      value: offer.value.toString(),
      validFrom: offer.validFrom,
      validUntil: offer.validUntil,
      applicableTo: offer.applicableTo,
      categorySlug: offer.categorySlug || '',
      originalPrice: offer.originalPrice,
      salePrice: offer.salePrice,
      rating: offer.rating.toString(),
      isFeatured: offer.isFeatured
    });
    setIsAddDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setOffers(offers.filter(o => o.id !== id));
  };

  const toggleOfferStatus = (id: string) => {
    setOffers(offers.map(o => 
      o.id === id ? { ...o, isActive: !o.isActive } : o
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Offer Management</h2>
          <p className="text-muted-foreground">Create and manage promotional offers with enhanced UI</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create New Offer
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingOffer ? 'Edit Offer' : 'Create New Offer'}</DialogTitle>
              <DialogDescription>
                {editingOffer ? 'Update the offer details below.' : 'Set up a new promotional offer with enhanced display options.'}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Offer Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Featured Offer</Label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={(e) => setFormData({...formData, isFeatured: e.target.checked})}
                      className="rounded"
                    />
                    <span className="text-sm">Mark as featured offer</span>
                  </div>
                </div>
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="originalPrice">Original Price</Label>
                  <Input
                    id="originalPrice"
                    placeholder="₹4,999"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="salePrice">Sale Price</Label>
                  <Input
                    id="salePrice"
                    placeholder="₹3,499"
                    value={formData.salePrice}
                    onChange={(e) => setFormData({...formData, salePrice: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating (1-5)</Label>
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={(e) => setFormData({...formData, rating: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Offer Type</Label>
                  <Select value={formData.type} onValueChange={(value: 'percentage' | 'fixed' | 'bogo') => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage Discount</SelectItem>
                      <SelectItem value="fixed">Fixed Amount Off</SelectItem>
                      <SelectItem value="bogo">Buy One Get One</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {formData.type !== 'bogo' && (
                  <div className="space-y-2">
                    <Label htmlFor="value">
                      {formData.type === 'percentage' ? 'Percentage (%)' : 'Amount (₹)'}
                    </Label>
                    <Input
                      id="value"
                      type="number"
                      value={formData.value}
                      onChange={(e) => setFormData({...formData, value: e.target.value})}
                      required
                    />
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="validFrom">Valid From</Label>
                  <Input
                    id="validFrom"
                    type="date"
                    value={formData.validFrom}
                    onChange={(e) => setFormData({...formData, validFrom: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="validUntil">Valid Until</Label>
                  <Input
                    id="validUntil"
                    type="date"
                    value={formData.validUntil}
                    onChange={(e) => setFormData({...formData, validUntil: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="applicableTo">Applicable To</Label>
                <Select value={formData.applicableTo} onValueChange={(value: 'all' | 'category' | 'specific') => setFormData({...formData, applicableTo: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sarees</SelectItem>
                    <SelectItem value="category">Specific Category</SelectItem>
                    <SelectItem value="specific">Specific Sarees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {formData.applicableTo === 'category' && (
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.categorySlug} onValueChange={(value) => setFormData({...formData, categorySlug: value})}>
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
              )}
              
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingOffer ? 'Update Offer' : 'Create Offer'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Featured Offers Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            Featured Offers Preview
          </CardTitle>
          <CardDescription>
            Preview of how featured offers will appear on the website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {offers.filter(o => o.isFeatured && o.isActive).map((offer) => (
              <div key={offer.id} className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{offer.categorySlug}</Badge>
                  <Badge className="bg-red-500">{offer.discount}</Badge>
                </div>
                <h3 className="font-bold text-lg mb-1">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{offer.description}</p>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl font-bold text-primary-600">{offer.salePrice}</span>
                  <span className="text-sm text-gray-500 line-through">{offer.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                    <span>{offer.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>Until {new Date(offer.validUntil).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Offers Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Offers</CardTitle>
          <CardDescription>
            {offers.filter(o => o.isActive).length} active offers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Prices</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {offers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell className="font-medium">{offer.title}</TableCell>
                  <TableCell>{offer.discount}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-green-600">{offer.salePrice}</span>
                      <span className="text-sm text-gray-500 line-through">{offer.originalPrice}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span>{offer.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {offer.isFeatured && <Badge variant="outline">Featured</Badge>}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={offer.isActive ? "default" : "secondary"}
                      className="cursor-pointer"
                      onClick={() => toggleOfferStatus(offer.id)}
                    >
                      {offer.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(offer)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(offer.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfferManagement;
