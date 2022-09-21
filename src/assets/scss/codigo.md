#css

```css
.containermobile {
  margin-bottom: 16px;
  .caluga-solicitud {
    background: #f7f7f7;
    border-left: 4px solid #0079c7;
    padding: 16px;
    width: 100%;

    .seccion-contratante {
      display: flex;
      flex-direction: column;
    }
  }
}

.btn,
.btn:focus,
.btn:active {
  outline: 0;
  box-shadow: 0px 3px 6px #00000029;
  border-style: solid;
}

$creadoBG: #d9f0ff;
$creado: #0fa3ff;
$cursoBG: #f0cde3;
$curso: #e27fbe;
$rechazadoBG: #ffdcd1;
$rechazado: #fe501d;

::ng-deep .mat-flat-button {
  line-height: 0 !important;
}
.button {
  font-size: 12px;
  &-creado {
    background-color: $creadoBG; //var(--primary);
    color: $creado;
    border-color: creado;
  }
  &-curso {
    background-color: $cursoBG;
    color: $curso;
    border-color: curso;
  }
  &-rechazado {
    background-color: $rechazadoBG;
    color: $rechazado;
    border-color: rechazado;
  }
}
```

#html

```html
<div class="containermobile" *ngFor="let item of [1,2,3,4]">
  <div class="caluga-solicitud">
    <p class="d-flex jc-between">
      <label class="ff-medium fs-14 ct-base">
        <span class="ff-semibold fs12 ct-base">Ingreso</span><br />
        Fecha
      </label>
      <label class="d-flex fd-column">
        <button
          type="button"
          class="btn button-{{estado}}"
          mat-flat-button
          style="border-radius: 20px; padding: 0 45px;height: 24px;"
        >
          texto
        </button>
        <span class="ff-regular fs-10 ct-base">Desde 01/07/2022</span>
      </label>
    </p>
    <p class="seccion-contratante">
      <span class="ff-semibold fs12 ct-base">Contratante pagador</span>
      <span class="ff-semibld fs-14 ct-base"
        >Rafael Fernando León Arredondo</span
      >
      <span style="color:#707070" class="fs-12 ff-regular">correo</span>
    </p>
    <p style="display:flex;">
      <label class="ff-medium fs-14 ct-base" style="width: 50%;">
        <span class="ff-semibold fs12 ct-base">Rut</span><br />12479278-9</label
      >
      <label class="ff-medium fs-14 ct-base" style="width: 50%;">
        <span class="ff-semibold fs12 ct-base">Telefono</span
        ><br />+569877</label
      >
    </p>
  </div>
</div>
```


#crear un archivo pipe.filter.ts
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(args == '' || args.length < 3) return value;
    const result = []
    for(const i of value){
      if(i.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1){ 
        result.push(i);
      }
    }
    return result;
  }

}
```

``` html
 <input type="text" placeholder="Boscar producto" name="busqueda" [(ngModel)]="busqueda"/>
    {{ busqueda }}
    <div (click)="verProducto(producto.id)" class="products" *ngFor="let producto of productos | filter:busqueda"> from.get('nombre').value
        <img [src]="producto.img" />
        <h1>{{producto.nombre}} </h1>
    </div>
```