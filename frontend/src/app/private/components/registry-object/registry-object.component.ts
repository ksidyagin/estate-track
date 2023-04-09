import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ObjectI } from 'src/app/model/object.interface';
import { ObjectService } from 'src/app/services/object.service';

@Component({
  selector: 'app-registry-object',
  templateUrl: './registry-object.component.html',
  styleUrls: ['./registry-object.component.scss']
})
export class RegistryObjectComponent {
  object: ObjectI = {};

  constructor(private objService: ObjectService,
  private router: Router,
  private actRoute: ActivatedRoute) { }
  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    this.objService.findOne(id).subscribe((object: ObjectI) => {
      this.object = object;
    });
  }

}
