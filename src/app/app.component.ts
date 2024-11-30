import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationModule } from './features/navigation/navigation.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp04_jacquin_jules';
}
