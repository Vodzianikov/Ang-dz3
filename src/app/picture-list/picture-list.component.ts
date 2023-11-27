import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent {
  Obj1 = {
    Name:"Утро в сосновом лесу",
    Year:"1889г.",
    Autor:"Иван Шишкин,Константин Савицкий",
    WithandHeight: "139 × 213 см",
    Mesto:"Москва",
    img:"https://aria-art.ru/0/L/Les%20(I.%20Shishkin)/136.jpg"
  }
  Obj2 = {
    Name:"Лес в живописи (сборник)",
    Year:"1880г.-1897г.",
    Autor:"Иван Шишкин",
  }
  Obj3 = {
    img:"https://aria-art.ru/0/L/Les%20(I.%20Shishkin)/122.jpg",
    Autor:"Иван Шишкин",
    Name:"Лес с горы",
    Year:"1895г."
  }
  Obj4 = {
    img:"https://aria-art.ru/0/L/Les%20(I.%20Shishkin)/124.jpg",
    Autor:"Иван Шишкин",
    Name:"Мостик в лесу",
    Year:"1895г."
  }
  Obj5 = {
    img:"https://aria-art.ru/0/L/Les%20(I.%20Shishkin)/126.jpg",
    Autor:"Иван Шишкин",
    Name:"Лес-осинник",
    Year:"1896г."
  }
  Obj6 ={
    img:"https://upload.wikimedia.org/wikipedia/commons/2/29/Savitsky_na_voinu.jpg",
    Autor:"Константин Савицкий",
    Name:"На войну",
    Year:"1888г."
  }
  Obj7 ={
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Konstantin_Apollonowitsch_Sawizkij_001.jpg/334px-Konstantin_Apollonowitsch_Sawizkij_001.jpg",
    Autor:"Константин Савицкий",
    Name:"Ремонтные работы на железной дороге",
    Year:"1874г."
  }
  Obj8 ={
    img:"https://upload.wikimedia.org/wikipedia/commons/d/d1/The_Fugitive_by_Savitsky.jpg",
    Autor:"Константин Савицкий",
    Name:"Беглый",
    Year:"1883г."
  }
  Obj9 ={
    img:"https://upload.wikimedia.org/wikipedia/commons/0/00/Савицкий_Панихида.jpg",
    Autor:"Константин Савицкий",
    Name:"Панихида в 9-й день на кладбище",
    Year:"1885г."
  }
  Obj10={
    img:"https://upload.wikimedia.org/wikipedia/commons/8/8b/Konstantin_Savitsky_photo.jpg",
    Name:"Константин Аполлонович Савицкий",
    Year:"25 мая 1844г.- 31 января 1905г. (60 лет)",
  }
  Obj11={
    img:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Ivan_Shishkin_restoration.jpg",
    Name:"Иван Иванович Шишкин",
    Year:"13 января  1831г. - 8 марта 1898г. (67 лет)",
  }
  count:number = 0

}


