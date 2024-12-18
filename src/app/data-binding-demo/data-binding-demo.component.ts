import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})


export class DataBindingDemoComponent {
  title = "My First App!"
  description ="This is my new Angular Application"
  imageUrl = '../../assets/itachi1.jpeg';
  w=50;
  h=50;
  altText = 'Itachi image';
  textColor='blue';
  isHighlighted=true;
  yourName='';
  count =0;
  increment(){
    this.count++
  }
  decrement(){
    this.count--;
  }
}
