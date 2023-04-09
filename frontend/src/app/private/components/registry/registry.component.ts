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
  objects: ObjectI[] = [];

  constructor(private objService: ObjectService,
  private router: Router,
  private actRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.objService.find().subscribe((objects: ObjectI[]) => {
      this.objects = objects;
    });
  }

  selectObject(id: any) {
    this.router.navigate(['../object-card', id]);
  }
}
