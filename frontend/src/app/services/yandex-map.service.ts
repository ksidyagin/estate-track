import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";

declare var ymaps:any;

@Injectable({
  providedIn: 'root'
})
export class YandexMapService {
  map: any;
  myPlacemark: any;
  coords: any = [];

  constructor( private localeStorage: LocalStorageService) {
  }

  initMap(lat:any, long: any) {
    ymaps.ready().done(() => this.createMap(lat, long));
  }

  private createMap(lat: any, long: any): void {
    this.map = new ymaps.Map('map', {
      center: [lat, long],
      zoom: 12
    });
    if (this.localeStorage.coords.length > 0) {
      this.localeStorage.coords.forEach(coords => {
        let mark = this.createPlacemark(coords);
        this.addEventMark(mark);
        this.map.geoObjects.add(mark);
        this.getAddress(mark,coords);
      })
    }
    this.map.events.add('click', (e:any) => {
      const coords = e.get('coords');
      this.localeStorage.addItem(coords);
      this.myPlacemark = this.createPlacemark(coords);
      //добавляем mark
      this.map.geoObjects.add(this.myPlacemark);
      this.addEventMark(this.myPlacemark);
      this.getAddress(this.myPlacemark, coords);

    })
  }

  // Создание метки.
  createPlacemark(coords: any) {
    return new ymaps.Placemark(coords, {
      iconCaption: 'поиск...'
    }, {
      preset: 'islands#violetDotIconWithCaption',
      draggable: true
    });
  }

  addEventMark(mark: any) {
    // удалить правой кнопкой мыши
    mark.events.add('contextmenu', (e: any) => {
      const thisPlacemark = e.get('target');
      const coords = thisPlacemark.geometry._coordinates;
      this.map.geoObjects.remove(thisPlacemark);
      this.localeStorage.removeItem(coords)
    });
    // Слушаем событие окончания перетаскивания на метке.
    mark.events.add('dragend', () => {
      this.localeStorage.addItem(mark.geometry.getCoordinates())
      this.getAddress(mark, mark.geometry.getCoordinates());
    });
    // Слушаем событие начало перетаскивания на метке.
    mark.events.add('dragstart', () => {
      this.localeStorage.removeItem(mark.geometry.getCoordinates())
    });
  }

  // Определяем адрес по координатам (обратное геокодирование).
  getAddress(mark: any,coords: any) {
    mark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(coords).then((res: any) => {
      var firstGeoObject = res.geoObjects.get(0);

      mark.properties
        .set({
          // Формируем строку с данными об объекте.
          iconCaption: [
            // Название населенного пункта или вышестоящее административно-территориальное образование.
            firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
            // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
          ].filter(Boolean).join(', '),
          // В качестве контента балуна задаем строку с адресом объекта.
          balloonContent: firstGeoObject.getAddressLine()
        });
    });
  }
}