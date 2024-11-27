import { Injectable} from '@angular/core';
import { articlePreview } from '../models/articlePreview.model';
import { articleFull } from '../models/articleFull.model';
import { Categorie } from '../models/categorie.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private http: HttpClient) { }

  // Cette fonction renvoie toute les preview de produit
  public fetchItemsPreview(ids: number[]): Observable<articlePreview[]> {
      return this.http.get<articlePreview[]>(environment.backendClientProduits).pipe(
        map(items => items.filter(item => ids.includes(item.id)))
    );
  }
  
  // Cette fonction renvoie toutes les infos d'un article
  public fetchItemFull(id: number): Observable<articleFull> {
    return this.http.get<articleFull[]>(environment.backendClientProduits).pipe(
      map(items => {
        const item = items.find(item => item.id === id);
        if (item) {
          return item;
        } else {
          throw new Error(`Article with id ${id} not found`);
        }
      })
    );
  }

  public fetchCategorie(ids: number[]): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(environment.backendClientCategories).pipe(
      map(items => items.filter(item => ids.includes(item.id)))
    )
  }

}
