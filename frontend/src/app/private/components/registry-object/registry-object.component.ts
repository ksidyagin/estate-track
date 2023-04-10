import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ObjectI } from 'src/app/model/object.interface';
import { ObjectService } from 'src/app/services/object.service';
import { YandexMapService } from 'src/app/services/yandex-map.service';

@Component({
  selector: 'app-registry-object',
  templateUrl: './registry-object.component.html',
  styleUrls: ['./registry-object.component.scss']
})
export class RegistryObjectComponent {
  object: ObjectI = {};
  latitude: number | undefined;
  longitude: number | undefined;
  constructor(private yandexMap: YandexMapService, private objService: ObjectService,
  private router: Router,
  private actRoute: ActivatedRoute) { }
  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    this.objService.findOne(id).subscribe((object: ObjectI) => {
      this.object = object;
      this.latitude = Number(object.characteristics_additional_fields);
      this.longitude = Number(object.rest_additional_fields);
      console.log(Number(object.characteristics_additional_fields))
      this.yandexMap.initMap(this.latitude, this.longitude);
    });
    

  }

}
