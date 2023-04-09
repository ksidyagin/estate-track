import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ObjectI } from 'src/app/model/object.interface';
import { ObjectService } from 'src/app/services/object.service';

@Component({
  selector: 'app-object-addons',
  templateUrl: './object-addons.component.html',
  styleUrls: ['./object-addons.component.scss']
})
export class ObjectAddonsComponent {
  object:ObjectI = {}
  constructor(private objService: ObjectService, private changes: ChangeDetectorRef,
    private router: Router,
    private actRoute: ActivatedRoute) { }
    ngOnInit(): void {
      let id = this.actRoute.snapshot.params['id'];
      this.objService.findOne(id).subscribe((object: ObjectI) => {
        this.object = object;
        this.changes.detectChanges();
      });
    }
}
