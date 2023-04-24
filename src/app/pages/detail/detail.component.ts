import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap} from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id!: string;
  card$!: Observable<Card>

  constructor(private route: ActivatedRoute, private cardService: CardService) {}

  ngOnInit(): void {
    //route, ruta activa
    //snapshot, cuando cargue en oninit va capturar en id actualmente(parametro)
    //paramMap, info de los parametros
    this.id = this.route.snapshot.paramMap.get('id') || '';
    //console.log(this.id);

    // this.cardService.getCard(this.id).subscribe((res)=>{
    //   console.log(res);
    // })

    this.card$ = this.cardService.getCard(this.id).pipe(tap(console.log));
  }

}
