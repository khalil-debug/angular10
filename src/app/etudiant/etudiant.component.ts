import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { etudiant } from 'src/etudiant';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public Etudiants: etudiant[] = [];
  public editEtudiant! : etudiant;
  public deleteEtudiant! : etudiant;
  constructor(private service: SharedService){}
  ngOnInit(): void {
  }


  
  
  public getetud(): void {
    this.service.getEtudList().subscribe(
      (response: any[]) => {
        this.Etudiants = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddetud(addForm: NgForm): void {
    document.getElementById('add-form')!.click();
    this.service.addEtudiant(addForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.getetud();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateetud(ID: number): void {
    this.service.updateEtudiant(ID).subscribe(
      (response: any) => {
        console.log(response);
        this.getetud();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDleteetud(ID: number): void {
    this.service.deleteEtudiant(ID).subscribe(
      (response: any) => {
        console.log(response);
        this.getetud();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(Etudiant: etudiant, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addModal');
    }
    if (mode === 'edit') {
      this.editEtudiant = Etudiant;
      button.setAttribute('data-target', '#updateModal');
    }
    if (mode === 'delete') {
      this.deleteEtudiant = Etudiant;
      button.setAttribute('data-target', '#deleteModal');
    }
    container!.appendChild(button);
    button.click();
  }

}
