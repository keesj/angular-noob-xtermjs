import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Terminal } from "xterm";

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class TerminalComponent implements OnInit {
  public term!: Terminal;
  @ViewChild('terminal') terminalDiv!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit (){
    this.term =  new Terminal();
    this.term.open(this.terminalDiv.nativeElement);
    this.term.writeln('Welcome to xterm.js');
  }
}
