import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tableau-dashboard-embed',
  templateUrl: './tableau-dashboard-embed.component.html',
  styleUrls: ['./tableau-dashboard-embed.component.scss']
})
export class TableauDashboardEmbedComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() dashboardUrl?: string;

  private scaleFactor = 0.85;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  
  ngOnInit(): void {
    
  }

  private readonly scriptCode = `
    var divElement = document.getElementById('viz1646900883080');
    var vizElement = divElement.getElementsByTagName('object')[0];
    
    console.log('div width', divElement.offsetWidth);

    if (divElement.offsetWidth > 800) { vizElement.style.width = '1366px'; vizElement.style.height = '1027px'; }
    else if (divElement.offsetWidth > 500) { vizElement.style.width = '1366px'; vizElement.style.height = '1027px'; }
    else { vizElement.style.width = '100%'; vizElement.style.height = '2827px'; }
    

    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  `;

  ngAfterViewInit(): void {
    const scriptElem = this.renderer.createElement('script');
    scriptElem.text = this.scriptCode;
    this.renderer.appendChild(this.elementRef.nativeElement, scriptElem);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
