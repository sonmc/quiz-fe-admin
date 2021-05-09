import { Component, OnInit } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { QuestionService } from '../../containers/services/question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: any;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.get()
    .then(res => {
      if (SUCCESS_STATUS == res['status']) {
        this.questions = res['data'];
      }
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }

}
