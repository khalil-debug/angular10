import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/";
readonly PhotoUrl ="http://127.0.0.1:8000/media/";



  constructor(private http:HttpClient) { 

  }
  //yes
  getEtudList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/etudiant/');
  }

  addEtudiant(val: any){
    return this.http.post(this.APIUrl +'/etudiant/',val);
  }

  updateEtudiant(val: any){
    return this.http.put(this.APIUrl +'/etudiant/',val);
  }
  //no
  //yes
  deleteEtudiant(val: any){
    return this.http.delete(this.APIUrl +'/etudiant/',val);
  }

  getEnsList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/enseignant/');
  }

  addEnseignant(val: any){
    return this.http.post(this.APIUrl +'/enseignant/',val);
  }

  updateEnseignant(val: any){
    return this.http.put(this.APIUrl +'/enseignant/',val);
  }

  deleteEnseignant(val: any){
    return this.http.delete(this.APIUrl +'/enseignant/',val);
  }
  //no
  //yes
  getGrpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/groupe/');
  }

  addGroupe(val: any){
    return this.http.post(this.APIUrl +'/groupe/',val);
  }

  updateGroupe(val: any){
    return this.http.put(this.APIUrl +'/groupe/',val);
  }

  deleteGroupe(val: any){
    return this.http.delete(this.APIUrl +'/groupe/',val);
  }
  //no
  //yes
  getModList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/module/');
  }

  addModule(val: any){
    return this.http.post(this.APIUrl +'/module/',val);
  }

  updateModule(val: any){
    return this.http.put(this.APIUrl +'/module/',val);
  }

  deleteModule(val: any){
    return this.http.delete(this.APIUrl +'/module/',val);
  }
  //no
  //yes
  getSceList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/seance/');
  }

  addSeance(val: any){
    return this.http.post(this.APIUrl +'/seance/',val);
  }

  updateSeance(val: any){
    return this.http.put(this.APIUrl +'/seance/',val);
  }

  deleteSeance(val: any){
    return this.http.delete(this.APIUrl +'/seance/',val);
  }
  //no
  //yes

  getAbsList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/absence/');
  }

  addAbsence(val: any){
    return this.http.post(this.APIUrl +'/absence/',val);
  }

  updateAbsence(val: any){
    return this.http.put(this.APIUrl +'/absence/',val);
  }
  
  deleteAbsence(val: any){
    return this.http.delete(this.APIUrl +'/absence/',val);
  }
  //no
  //yes
  getEnregList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/enreg/');
  }

  addEnreg(val: any){
    return this.http.post(this.APIUrl +'/enreg/',val);
  }

  updateEnreg(val: any){
    return this.http.put(this.APIUrl +'/enreg/',val);
  }

  deleteEnreg(val: any){
    return this.http.delete(this.APIUrl +'/enreg/',val);
  }
  //no
  //yes
  getTarList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/tar/');
  }

  addTar(val: any){
    return this.http.post(this.APIUrl +'/tar/',val);
  }

  updateTar(val: any){
    return this.http.put(this.APIUrl +'/tar/',val);
  }

  deleteTar(val: any){
    return this.http.delete(this.APIUrl +'/tar/',val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }

  

}
