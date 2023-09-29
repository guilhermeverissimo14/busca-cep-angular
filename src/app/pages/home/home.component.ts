import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cep: string = '';
  cepData: any = [];

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
    // this.searchCEP();
    console.log(this.cepData)
  }

  searchCEP() {
    this.cepService.getCep(this.cep).subscribe((data: any) => {
      this.cepData = data;
      console.log(this.cepData);
    },  (error) => {
      alert("CEP Inválido!")
    }
    );
  }

  clear() {
    this.cepData = null;
  }

}
