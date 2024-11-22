import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';
import { TrainerDetail } from '../trainer-detail';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<TrainerDetail> = [];
  selected: boolean = false;
  selectedTrainer!: TrainerDetail;
  searchedTrainer: any;
  cantidad_pokemons: number = 0;
  constructor(private trainerService: TrainerService) {}

  getTrainers(): void {
    this.trainerService.getTrainers().subscribe({next: apiData => this.trainers = apiData });
    this.cantidad_pokemons+=1;
  }

  ngOnInit() {
    this.getTrainers();
  }

  onSelected(trainer: TrainerDetail):void {
    this.selected = true;
    this.selectedTrainer = trainer;
  }
}
