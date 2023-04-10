import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionI } from 'src/app/model/decisions.interface';
import { DecisionService } from 'src/app/services/decision.service';

@Component({
  selector: 'app-decisions',
  templateUrl: './decisions.component.html',
  styleUrls: ['./decisions.component.scss']
})
export class DecisionsComponent {
  objects:DecisionI[]= [];
  searchText:any;
  constructor(private objService: DecisionService,
    private router: Router,
    private actRoute: ActivatedRoute) { }
    ngOnInit(): void {
      this.objService.find().subscribe((objects: DecisionI[]) => {
        this.objects = objects;
      });
    }
}
