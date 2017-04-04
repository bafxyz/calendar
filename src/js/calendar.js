import EventEmmiter from 'events';

class Calendar extends EventEmmiter {

  constructor(options) {
    super();

    const date = new Date();

    this.day =  date.getDay();
    this.month = date.getMonth();
    this.year = date.getYear();
  }

}

export default Calendar;
