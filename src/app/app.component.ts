import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {initFlowbite} from 'flowbite'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';
  ngOnInit(){
    initFlowbite()
  }
}