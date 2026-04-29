import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/product';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin implements OnInit {
  products: Product[] = [];
  isLoading = true;
  editingProduct: Product | null = null;
  newProduct: Product = this.emptyProduct();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  emptyProduct(): Product {
    return {
      name: '',
      description: '',
      price: 0,
      category: '',
      stock: 0,
      imageUrl: ''
    };
  }

  normalizeForBackend(product: Product): Product {
    return {
      ...product,
      name: product.name || ''
    };
  }

  loadProducts(): void {
    this.isLoading = true;

    this.productService.getAll().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Load products error:', err);
        this.products = [];
        this.isLoading = false;
      }
    });
  }

  createProduct(): void {
    const productToCreate = this.normalizeForBackend(this.newProduct);

    this.productService.create(productToCreate).subscribe({
      next: () => {
        this.newProduct = this.emptyProduct();
        this.loadProducts();
      },
      error: (err) => {
        console.error('Create product error:', err);
        alert('Nem sikerült létrehozni a terméket.');
      }
    });
  }

  startEdit(product: Product): void {
    this.editingProduct = {
      ...product,
      name: product.name || ''
    };
  }

  saveEdit(): void {
    if (!this.editingProduct?.id) {
      alert('Hiányzó termékazonosító.');
      return;
    }

    const productToUpdate = this.normalizeForBackend(this.editingProduct);

    this.productService.update(this.editingProduct.id, productToUpdate).subscribe({
      next: () => {
        this.editingProduct = null;
        this.loadProducts();
      },
      error: (err) => {
        console.error('Update product error:', err);
        alert('Nem sikerült módosítani a terméket.');
      }
    });
  }

  cancelEdit(): void {
    this.editingProduct = null;
  }

  deleteProduct(id: string | undefined): void {
    if (!id) {
      alert('Hiányzó termékazonosító.');
      return;
    }

    if (!confirm('Biztosan törlöd?')) return;

    this.productService.delete(id).subscribe({
      next: () => {
        this.loadProducts();
      },
      error: (err) => {
        console.error('Delete product error:', err);
        alert('Nem sikerült törölni a terméket.');
      }
    });
  }
}
