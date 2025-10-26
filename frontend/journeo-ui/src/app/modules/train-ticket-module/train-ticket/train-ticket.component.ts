import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface SearchData {
  fromStation: string;
  toStation: string;
  journeyDate: string;
  bookingType: string;
  trainClass: string;
  passengers: number;
}

interface BookingType {
  id: string;
  name: string;
  description: string;
}

interface TrainClass {
  id: string;
  name: string;
}

interface QuickFilter {
  id: string;
  name: string;
}

interface PopularRoute {
  from: string;
  to: string;
  duration: string;
  trainType: string;
  startingPrice: number;
}

@Component({
  selector: 'journeo-train-ticket',
  imports: [NgFor],
  templateUrl: './train-ticket.component.html',
  styleUrl: './train-ticket.component.scss'
})
export class TrainTicketComponent implements OnInit {

  @Input() navConf: any;

 
   searchData: SearchData = {
    fromStation: '',
    toStation: '',
    journeyDate: '',
    bookingType: 'general',
    trainClass: '',
    passengers: 1
  };

  bookingTypes: BookingType[] = [
    { id: 'general', name: 'General', description: 'Regular booking' },
    { id: 'tatkal', name: 'Tatkal', description: 'Next day journey' },
    { id: 'premium-tatkal', name: 'Premium Tatkal', description: 'Dynamic pricing' },
    { id: 'ladies', name: 'Ladies', description: 'Female passengers' }
  ];

  trainClasses: TrainClass[] = [
    { id: 'all', name: 'All Classes' },
    { id: '1a', name: '1A - First AC' },
    { id: '2a', name: '2A - Second AC' },
    { id: '3a', name: '3A - Third AC' },
    { id: 'sl', name: 'SL - Sleeper' },
    { id: '2s', name: '2S - Second Sitting' },
    { id: 'cc', name: 'CC - Chair Car' }
  ];

  passengerCounts: number[] = [1, 2, 3, 4, 5, 6];

  quickFilters: QuickFilter[] = [
    { id: 'today', name: 'Today' },
    { id: 'tomorrow', name: 'Tomorrow' },
    { id: 'weekend', name: 'This Weekend' },
    { id: 'ac', name: 'AC Trains Only' },
    { id: 'superfast', name: 'Superfast' },
    { id: 'overnight', name: 'Overnight Journeys' }
  ];

  popularRoutes: PopularRoute[] = [
    { from: 'Mumbai', to: 'Delhi', duration: '16h 30m', trainType: 'Rajdhani', startingPrice: 1850 },
    { from: 'Delhi', to: 'Kolkata', duration: '17h 15m', trainType: 'Duronto', startingPrice: 1650 },
    { from: 'Chennai', to: 'Bangalore', duration: '5h 20m', trainType: 'Shatabdi', startingPrice: 650 },
    { from: 'Kolkata', to: 'Patna', duration: '7h 45m', trainType: 'Jan Shatabdi', startingPrice: 450 },
    { from: 'Hyderabad', to: 'Chennai', duration: '14h 10m', trainType: 'Express', startingPrice: 550 },
    { from: 'Ahmedabad', to: 'Mumbai', duration: '6h 30m', trainType: 'Double Decker', startingPrice: 350 }
  ];

  minDate: string;

  constructor() {
    // Set minimum date to today
    this.minDate = new Date().toISOString().split('T')[0];
  }

  ngOnInit(): void {
    // Initialize with today's date
    this.searchData.journeyDate = this.minDate;
  }

  /**
   * Select booking type (General, Tatkal, etc.)
   */
  selectBookingType(typeId: string): void {
    this.searchData.bookingType = typeId;
    console.log('Selected booking type:', typeId);
  }

  /**
   * Get CSS classes for booking type buttons
   */
  getBookingTypeClass(typeId: string): string {
    const baseClasses = 'p-3 rounded-lg border-2 text-center transition-all duration-200';
    const selectedClasses = 'border-journeo-blue bg-blue-50 text-journeo-blue shadow-sm';
    const unselectedClasses = 'border-gray-200 bg-white text-gray-700 hover:border-journeo-blue hover:bg-blue-50';
    
    return this.searchData.bookingType === typeId 
      ? `${baseClasses} ${selectedClasses}`
      : `${baseClasses} ${unselectedClasses}`;
  }

  /**
   * Check if search form is valid
   */
  isSearchValid(): boolean {
    return !!this.searchData.fromStation && 
           !!this.searchData.toStation && 
           !!this.searchData.journeyDate;
  }

  /**
   * Search trains based on current criteria
   */
  searchTrains(): void {
    if (!this.isSearchValid()) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Searching trains with criteria:', this.searchData);
    
    // Here you would typically:
    // 1. Call your train search API
    // 2. Navigate to train list page
    // 3. Show loading state
    
    // For now, just log the search criteria
    alert(`Searching trains from ${this.searchData.fromStation} to ${this.searchData.toStation} on ${this.searchData.journeyDate}`);
  }

  /**
   * Apply quick filter
   */
  applyQuickFilter(filter: QuickFilter): void {
    console.log('Applying quick filter:', filter.name);
    
    switch (filter.id) {
      case 'today':
        this.searchData.journeyDate = this.minDate;
        break;
      case 'tomorrow':
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.searchData.journeyDate = tomorrow.toISOString().split('T')[0];
        break;
      case 'ac':
        this.searchData.trainClass = '2a';
        break;
      // Add more filter cases as needed
    }
  }

  /**
   * Select popular route
   */
  selectPopularRoute(route: PopularRoute): void {
    this.searchData.fromStation = route.from;
    this.searchData.toStation = route.to;
    console.log('Selected popular route:', route);
  }

  /**
   * Swap from and to stations
   */
  swapStations(): void {
    [this.searchData.fromStation, this.searchData.toStation] = 
    [this.searchData.toStation, this.searchData.fromStation];
  }
}
