// Importe NgbModal et NgbModalRef depuis @ng-bootstrap/ng-bootstrap
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // ...
})
export class CategoryComponent {
  // ...
  private editModalRef: NgbModalRef | null = null;
  categories: any;

  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {
    this.categories = this.categoryService.getCategories();
  }

  openEditModal(
    category: { name: string; description: string },
    content: any
  ): void {
    // Initialise le formulaire avec les valeurs actuelles de la catégorie
    this.editingCategory = { ...category };
    // Ouvre le modal en utilisant le service NgbModal
    this.editModalRef = this.modalService.open(content, { centered: true });
  }

  updateCategory(): void {
    if (this.editingCategory && this.editingCategory.name.trim() !== '') {
      this.categoryService.updateCategory(this.editingCategory);
      // Ferme le modal en utilisant la référence du modal
      if (this.editModalRef) {
        this.editModalRef.close();
      }
      this.editingCategory = null;
    }
  }
}
