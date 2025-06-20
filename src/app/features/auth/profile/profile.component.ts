import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../core/services/session.service';
import { Route, Router } from '@angular/router';

/**
 * 
 * 
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: any | null;

  constructor(
    private sessionService: SessionService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sessionService.user$.subscribe(user => {
      this.user = user;
    });
  }

  /**
 * 
 * 
 */
  logout(): void {
    this.sessionService.clearUser();
    this.router.navigate(['/characters']);
  }

}
