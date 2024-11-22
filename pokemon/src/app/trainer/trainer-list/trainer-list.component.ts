import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { dataTrainers } from '../dataTrainers';
import { TrainerService } from '../trainer.service';
import { TrainerDetail } from '../trainer-detail';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];
  selected: Boolean = false;
  selectedTrainer!: Trainer;
  constructor(private trainerService: TrainerService) {}

  getTrainers(): void {
    this.trainerService.getTrainers().subscribe({next: apiData => this.trainers = apiData });
  }

  ngOnInit() {
    this.getTrainers();
  }

  onSelected(trainer: TrainerDetail):void {
    this.selected = true;
    this.selectedTrainer = trainer;
  }
}
