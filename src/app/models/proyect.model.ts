export interface Category {
  idCategoria: number;
  categoriaName: string;
}

export interface Proyecto {
  idProj: number;
  titulo: string;
  createDate: string;
  finaliDatre: string;
  ubicacion: string;
  presupuesto: number;
  status: number;
  urlImagen: string;
  descripcion: string;
  category: Category;
}
