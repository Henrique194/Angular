import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  document: HTMLDocument = this.elementRef.nativeElement.ownerDocument;
  url: string = '';

  constructor(
     private activedRoute: ActivatedRoute,
     private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.url = this.elementRef.nativeElement.ownerDocument.URL;
    const page = this.findActiveUrl(this.url);
    console.log(this.elementRef);
    this.insertUnderlineActivePage(page);
    
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
  
}
