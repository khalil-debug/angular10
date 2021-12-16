import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { enseignant } from 'src/enseignant';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public Enseignants: enseignant[] = [];
  public editEnseignant! : enseignant;
  public deleteEnseignant! : enseignant;
  constructor(private service: SharedService){}
  ngOnInit(): void {
  }


  
  public getens(): void {
    this.service.getEnsList().subscribe(
      (response: any[]) => {
        this.Enseignants = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddUens(addForm: NgForm): void {
    document.getElementById('add-form')!.click();
    this.service.addEnseignant(addForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.getens();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateens(ID: number): void {
    this.service.updateEnseignant(ID).subscribe(
      (response: any) => {
        console.log(response);
        this.getens();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public oneDleteens(ID: number): void {
    this.service.deleteEnseignant(ID).subscribe(
      (response: any) => {
        console.log(response);
        this.getens();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(Enseignant: enseignant, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUModal');
    }
    if (mode === 'edit') {
      this.editEnseignant = Enseignant;
      button.setAttribute('data-target', '#updateModal');
    }
    if (mode === 'delete') {
      this.deleteEnseignant = Enseignant;
      button.setAttribute('data-target', '#deleteModal');
    }
    container!.appendChild(button);
    button.click();
  }

}

