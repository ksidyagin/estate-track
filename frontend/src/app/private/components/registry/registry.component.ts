import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectI } from 'src/app/model/object.interface';
import { ObjectService } from 'src/app/services/object.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent {
  searchText:any;
  objects: ObjectI[] = [];
  new_objects= 0;
  in_work=0;
  deadline=0;
  ended=0;
  constructor(private objService: ObjectService,
  private router: Router,
  private actRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.objService.find().subscribe((objects: ObjectI[]) => {
      this.objects = objects;
      for(let i=0;i< objects.length; i++){
        if(objects[i].status1=="новые объекты"){
          this.new_objects++;
        }
        if(objects[i].status1=="выход за срок поручения"){
          this.deadline++;
        }
        if(objects[i].status1=="объекты в работе"){
          this.in_work++;
        }
        if(objects[i].status1=="работы завершены"){
          this.ended++;
        }
      }
    });
  }

  selectObject(id: any) {
    this.router.navigate(['../object-card', id]);
  }


}
