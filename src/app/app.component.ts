import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Hotel {
  id: number;
  name: string;
  stars: number;
  price: number;
  image: string;
  location: string;
}


@Component({
    selector: 'app-root',
    imports: [RouterOutlet,CommonModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'apps-angular-technical-test';

  searchText: string = '';
  selectedStars: number[] = [];
  
  allHotels: Hotel[] = [
    { id: 1, name: 'Hotel Luxury Palace', stars: 5, price: 250, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', location: 'Madrid' },
    { id: 2, name: 'Grand Hotel Central', stars: 4, price: 180, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400', location: 'Barcelona' },
    { id: 3, name: 'Comfort Inn', stars: 3, price: 95, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400', location: 'Valencia' },
    { id: 4, name: 'Budget Stay', stars: 2, price: 55, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400', location: 'Sevilla' },
    { id: 5, name: 'Hostal Económico', stars: 1, price: 35, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400', location: 'Granada' },
    { id: 6, name: 'Royal Suites', stars: 5, price: 300, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400', location: 'Málaga' },
    { id: 7, name: 'City Center Hotel', stars: 4, price: 150, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400', location: 'Bilbao' },
    { id: 8, name: 'Plaza Hotel', stars: 3, price: 110, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400', location: 'Zaragoza' },
  ];

  filteredHotels: Hotel[] = [...this.allHotels];

  toggleStar(star: number): void {
    const index = this.selectedStars.indexOf(star);
    if (index > -1) {
      this.selectedStars.splice(index, 1);
    } else {
      this.selectedStars.push(star);
    }
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredHotels = this.allHotels.filter(hotel => {
      const matchesSearch = hotel.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                           hotel.location.toLowerCase().includes(this.searchText.toLowerCase());
      
      const matchesStars = this.selectedStars.length === 0 || 
                          this.selectedStars.includes(hotel.stars);
      
      return matchesSearch && matchesStars;
    });
  }

  clearFilters(): void {
    this.searchText = '';
    this.selectedStars = [];
    this.filteredHotels = [...this.allHotels];
  }

  getStarArray(count: number): number[] {
    return Array(count).fill(0);
  }


}
