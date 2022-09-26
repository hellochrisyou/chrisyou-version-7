import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(() =>{
      $('.card').on('click',() =>{
        $(this).toggleClass('clicked');
      });

      setInterval(function(){$('.instruction').toggleClass('rubberBand animated');},2000);

    });
  }

}
