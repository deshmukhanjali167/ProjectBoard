import { Component } from '@angular/core';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.css']
})
export class ProjectBoardComponent {


  ticketarray: any[] = [
    {
      ticketid: "001",
      ticketname: "login pages",
      states: "To Do"
    }
    ,
    {
      ticketid: "002",
      ticketname: "layout page",
      states: "To Do"
    }
    ,
    {
      ticketid: "003",
      ticketname: "service",
      states: "To Do"
    }
    ,
    {
      ticketid: "004",
      ticketname: "authgaurud",
      states: "To Do"
    }
    ,
    {
      ticketid: "005",
      ticketname: "login out",
      states: "To Do"
    }
    ,
    {
      ticketid: "006",
      ticketname: "delivery page",
      states: "To Do"
    }
    ,
    {
      ticketid: "007",
      ticketname: "review page",
      states: "To Do"
    }

  ];
  currentid: any;

  filterticket(states: string) {
    return this.ticketarray.filter(m => m.states == states);
  }

  onDrapStart(item: any) {

    this.currentid = item
  }
  onDrop(event: any, states: string) {
    event.preventDefault();

    const record = this.ticketarray.find(m => m.ticketid == this.currentid.ticketid);
    if (record != undefined) {
      record.states = states;
      event.preventDefault();
    }
    this.currentid = null;

  }
  OnDragOver(event: any) {
    event.preventDefault();

  }


}


