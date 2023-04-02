import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor( public storage: AngularFireStorage ) { }

  //Servicio de subir la imagen 
  // (devuelve la promesa del string con la URL al arch. subido)
  upLoadImage( file:any, path:string, nombre: string ): Promise<string>  {
    return new Promise( resolve => {

      // Simulacion de promesa
      // setTimeout(() => {
      //   resolve(true);
      //   console.log('responde la promesa');
      //   return;
      // }, 2000);

      //Subir el archivo
      const filePath = path + '/' + nombre;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);

      //Obtener la URL de lo subido 
      task.snapshotChanges().pipe(
        finalize( () => {
          ref.getDownloadURL().subscribe( res => {
            const downloadURL = res;
            resolve(downloadURL);
          }); 
        })
      )
      .subscribe();
    });
  }


}
