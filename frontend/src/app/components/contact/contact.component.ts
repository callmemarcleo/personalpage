import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  timeInSwitzerland: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime() {
    this.http.get('https://worldtimeapi.org/api/timezone/Europe/Zurich')
      .subscribe((response: any) => {
        const date = new Date(response.datetime);
        this.timeInSwitzerland = date.toLocaleTimeString('de-CH', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
      });
  }
}
