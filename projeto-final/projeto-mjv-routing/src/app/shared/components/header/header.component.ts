import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  document: HTMLDocument = this.elementRef.nativeElement.ownerDocument;
  url: string = '';
  user: boolean = false;

  constructor(
     private elementRef: ElementRef,
     private router: Router,
  ) { }

  ngOnInit(): void {
    this.url = this.elementRef.nativeElement.ownerDocument.URL;
    const page = this.findActiveUrl(this.url);
    console.log(this.elementRef);
    this.insertUnderlineActivePage(page);
    this.validateUser();
    console.log(this.user);
    
    
  }

  private findActiveUrl(url: string): string {
    const page: string = url.replace("http://localhost:4200/", "");
    switch(page) {
      case "products":
        return "home";
      case "login":
        return "login";
      default:
        return "default";
    }
  }

  private insertUnderlineActivePage(page: string) {
    const hmtlPage: HTMLElement | null = this.document.getElementById(page);
    if(hmtlPage) {
      hmtlPage.style.textDecoration = "underline";
    }
    
  }

  validateUser() {
    const foundUser = sessionStorage.getItem('user');
    console.log(foundUser);
    
    if(foundUser) {
      return this.user = true;
    }
    return false;
  }

  logOutUser() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');

  }
  
}
