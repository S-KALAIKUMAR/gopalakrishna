import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react';

interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  link: string;
  isOffer: boolean;
  isActive: boolean;
  order: number;
}

const CarouselManagement = () => {
  const [slides, setSlides] = useState<CarouselSlide[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingSlide, setEditingSlide] = useState<CarouselSlide | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image: '',
    cta: '',
    link: '',
    isOffer: false,
    isActive: true,
    order: '1'
  });

  const linkOptions = [
    { value: '/offers', label: 'Offers Page' },
    { value: '/category/cotton', label: 'Cotton Sarees' },
    { value: '/category/silk', label: 'Silk Sarees' },
    { value: '/category/banarasi', label: 'Banarasi Sarees' },
    { value: '/category/wedding', label: 'Wedding Collection' },
    { value: '/category/party-wear', label: 'Party Wear' },
    { value: '/category/georgette', label: 'Georgette Sarees' },
    { value: '/collections', label: 'All Collections' },
    { value: '/categories', label: 'All Categories' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newSlide: CarouselSlide = {
      id: editingSlide?.id || Date.now().toString(),
      title: formData.title,
      subtitle: formData.subtitle,
      image: formData.image,
      cta: formData.cta,
      link: formData.link,
      isOffer: formData.isOffer,
      isActive: formData.isActive,
      order: parseInt(formData.order)
    };

    if (editingSlide) {
      setSlides(slides.map(s => s.id === editingSlide.id ? newSlide : s));
      setEditingSlide(null);
    } else {
      setSlides([...slides, newSlide]);
    }

    setFormData({
      title: '',
      subtitle: '',
      image: '',
      cta: '',
      link: '',
      isOffer: false,
      isActive: true,
      order: '1'
    });
    setIsAddDialogOpen(false);
  };

  const handleEdit = (slide: CarouselSlide) => {
    setEditingSlide(slide);
    setFormData({
      title: slide.title,
      subtitle: slide.subtitle,
      image: slide.image,
      cta: slide.cta,
      link: slide.link,
      isOffer: slide.isOffer,
      isActive: slide.isActive,
      order: slide.order.toString()
    });
    setIsAddDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setSlides(slides.filter(s => s.id !== id));
  };

  const toggleSlideStatus = (id: string) => {
    setSlides(slides.map(s => 
      s.id === id ? { ...s, isActive: !s.isActive } : s
    ));
  };

  const sortedSlides = [...slides].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Carousel Management</h2>
          <p className="text-muted-foreground">Manage hero carousel slides on the homepage</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Slide
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingSlide ? 'Edit Slide' : 'Add New Slide'}</DialogTitle>
              <DialogDescription>
                {editingSlide ? 'Update the slide details below.' : 'Create a new carousel slide for the homepage.'}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Slide Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g., Exclusive Festive Offers"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Textarea
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                  placeholder="e.g., Up to 30% off on all silk sarees - Limited time only!"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Background Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cta">Call to Action Text</Label>
                  <Input
                    id="cta"
                    value={formData.cta}
                    onChange={(e) => setFormData({...formData, cta: e.target.value})}
                    placeholder="e.g., Shop Now"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="order">Display Order</Label>
                  <Input
                    id="order"
                    type="number"
                    min="1"
                    value={formData.order}
                    onChange={(e) => setFormData({...formData, order: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="link">Link Destination</Label>
                <Select value={formData.link} onValueChange={(value) => setFormData({...formData, link: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select where this slide should link" />
                  </SelectTrigger>
                  <SelectContent>
                    {linkOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="isOffer"
                  checked={formData.isOffer}
                  onCheckedChange={(checked) => setFormData({...formData, isOffer: checked})}
                />
                <Label htmlFor="isOffer">Mark as Special Offer (shows red badge)</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData({...formData, isActive: checked})}
                />
                <Label htmlFor="isActive">Active (visible on homepage)</Label>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingSlide ? 'Update Slide' : 'Add Slide'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Carousel Slides</CardTitle>
          <CardDescription>
            {slides.length} slides created ({slides.filter(s => s.isActive).length} active)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Preview</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>CTA</TableHead>
                <TableHead>Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedSlides.map((slide) => (
                <TableRow key={slide.id}>
                  <TableCell>
                    <div className="relative w-16 h-12 bg-gray-100 rounded overflow-hidden">
                      {slide.image ? (
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                      {slide.isOffer && (
                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-bl">
                          OFFER
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{slide.title}</TableCell>
                  <TableCell>{slide.cta}</TableCell>
                  <TableCell>{slide.order}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={slide.isActive}
                        onCheckedChange={() => toggleSlideStatus(slide.id)}
                      />
                      <span className={`text-sm ${slide.isActive ? 'text-green-600' : 'text-gray-400'}`}>
                        {slide.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(slide)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(slide.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {slides.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No slides created yet. Click "Add New Slide" to get started.
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

export default CarouselManagement;
