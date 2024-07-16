import { Component } from '@angular/core';
import { ExcelImportService } from '../services/excel-import.service';
import { UserService } from '../services/user_service';
import { Router } from '@angular/router';
type UserFile = {
  firstname:string,
  password:string,
  role_id:number,
  lastname:string,
  username:string,
  age:number
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  file: File | null = null;
  users: UserFile[] = [];

  constructor(private userService:UserService,
     private excelService: ExcelImportService,
     private route:Router) { }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    if (this.file) {
      this.excelService.importExcel(this.file).then((data:any) => {

        this.users = this.buildResponse(data.data);
        console.log(data)
      }).catch(error => {
        console.error('Error al cargar el archivo Excel:', error);
      });
    }
  }

  save(){
    console.log(this.users)
    this.userService.saveUsers(this.users).then((response:any)=>{
      console.log(response)
      if(response.error){
        alert(response.error)
      }else{
        this.route.navigate(["home"])
      }
    })
  }

  buildResponse(data:any[]):UserFile[]{
    const array_user:UserFile[] = []
    data.map(item=>{
      array_user.push({
        firstname:item["__EMPTY_1"],
        lastname:item["__EMPTY_2"],
        username:item["__EMPTY_3"],
        age:parseInt(item["__EMPTY_4"]),
        role_id:item["__EMPTY_5"],
        password:item["__EMPTY_6"],
      })
    })
    return array_user
  }
}
