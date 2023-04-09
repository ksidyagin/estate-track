import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ObjectI } from 'src/app/model/object.interface';
import { FileService } from 'src/app/services/file.service';
import { ObjectService } from 'src/app/services/object.service';

@Component({
  selector: 'app-object-card',
  templateUrl: './object-card.component.html',
  styleUrls: ['./object-card.component.scss']
})
export class ObjectCardComponent {
      // Variable to store shortLink from api response
      shortLink: string = "";
      loading: boolean = false; // Flag variable
      file: File | undefined ; // Variable to store file
  
  fileName = '';
  doc = "https://file-examples.com/storage/fe9278ad7f642dbd39ac5c9/2017/04/file_example_MP4_1280_10MG.mp4";
  additional_fields: any = "";
  isOpen: boolean = false;
  fileToUpload: File | null = null;
  object:ObjectI = {}
  objectForm: FormGroup = new FormGroup({
    area: new FormControl(''),
    district: new FormControl(''),
    object_address: new FormControl(''),
    object_condition: new FormControl(''),
    object_type: new FormControl(''),
    object_square: new FormControl(''),
    units_measurement: new FormControl(''),
    owner: new FormControl(''),
    actual_user: new FormControl('')
  })
  additionalForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    type: new FormControl(''),
    data: new FormControl('')
  })
  constructor(private objService: ObjectService, private changes: ChangeDetectorRef,
  private router: Router, private httpClient: HttpClient,
  private actRoute: ActivatedRoute, private fileService: FileService) { }
  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    this.objService.findOne(id).subscribe((object: ObjectI) => {
      this.object = object;
      this.additional_fields = object.card_additional_fields;
      if(this.additional_fields?.includes('fields":[')){
        this.additional_fields = JSON.parse(this.additional_fields);
        console.log('поступившие поля:', this.additional_fields);
      }
      else{
        this.additional_fields = {fields:[]};
      }
      this.patch(object);
      this.changes.detectChanges();
    });
    console.log(this.objectForm.getRawValue(), this.district.value)

  }
  get area(): FormControl {
    return this.objectForm.get('area') as FormControl;
  }
  get district(): FormControl {
    return this.objectForm.get('district') as FormControl;
  }
  get object_address(): FormControl {
    return this.objectForm.get('object_address') as FormControl;
  }
  get object_condition(): FormControl {
    return this.objectForm.get('object_condition') as FormControl;
  }
  get object_type(): FormControl {
    return this.objectForm.get('object_type') as FormControl;
  }
  get object_square(): FormControl {
    return this.objectForm.get('object_square') as FormControl;
  }

  get units_measurement(): FormControl {
    return this.objectForm.get('units_measurement') as FormControl;
  }
  get owner(): FormControl {
    return this.objectForm.get('owner') as FormControl;
  }
  get actual_user(): FormControl {
    return this.objectForm.get('actual_user') as FormControl;
  }
  // get photo_path(): FormControl {
  //   return this.objectForm.get('photo_path') as FormControl;
  // }
  // get video_path(): FormControl {
  //   return this.objectForm.get('video_path') as FormControl;
  // }
  // get map_path(): FormControl {
  //   return this.objectForm.get('map_path') as FormControl;
  // }
  get title(): FormControl {
    return this.additionalForm.get('title') as FormControl;
  }
  get type(): FormControl {
    return this.additionalForm.get('type') as FormControl;
  }
  get data(): FormControl {
    return this.additionalForm.get('data') as FormControl;
  }
  patch(object:ObjectI){
    this.objectForm.patchValue({
      area: object.area,
      district: object.district,
      object_address: object.object_address,
      object_condition: object.object_condition,
      object_type: object.object_type,
      object_square: object.object_square,
      units_measurement: object.units_measurement,
      owner: object.owner,
      actual_user: object.actual_user
    })    
  }
  save(){  
    console.log(this.objectForm.getRawValue())
    this.objService.updateOne({
      id: this.object.id,
      area: this.area.value,
      district: this.district.value,
      object_address: this.object_address.value,
      object_condition: this.object_condition.value,
      object_type: this.object_type.value,
      object_square: this.object_square.value,
      units_measurement: this.units_measurement.value,
      owner: this.owner.value,
      actual_user: this.actual_user.value,
      card_additional_fields: JSON.stringify(this.additional_fields)
    }).subscribe();
    this.reloadComponent();
  }


  openModal(){
    this.isOpen = !this.isOpen;
  }

  reloadComponent() {
    window.location.reload();
  }


  addField(){

    let newField = {
      title: this.title.value,
      type: this.type.value,
      data: this.data.value
    }
    this.additional_fields.fields.push(newField);
    console.log(JSON.stringify(this.additional_fields));


    this.objService.updateOne({
      id: this.object.id,
      card_additional_fields: JSON.stringify(this.additional_fields)
    }).subscribe();
  }

  onChangeAddField(event: any, index:number){
    console.log(event.target.value, this.additional_fields.fields[index].title);
    this.additional_fields.fields[index].data=event.target.value;
  }
  onDeleteAddField(index:number){
    this.additional_fields.fields.splice(index,1);
    this.objService.updateOne({
      id: this.object.id,
      card_additional_fields: JSON.stringify(this.additional_fields)
    }).subscribe();
    this.reloadComponent();
  }


      // On file Select
      onChange(event:any) {
        this.file = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.fileService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }
}
