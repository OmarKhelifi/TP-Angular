import { Injectable } from '@angular/core';
import { SESSIONITEMS } from "./admin/session";

@Injectable({
  providedIn: 'root'
})
export class FakeSessionItemServiceService {

  constructor() { }
  get() { return SESSIONITEMS }

  add(sessionitem: any) {
    SESSIONITEMS.push(sessionitem)
    console.log(SESSIONITEMS);
  }

  delete(sessionitem: any) {
    const index = SESSIONITEMS.findIndex(item => item.id === sessionitem);
    if (index !== -1) {
      SESSIONITEMS.splice(index, 1);
    }

    // SESSIONITEMS.splice(sessionitem, 1);

    console.log("INDEX FROM SERVICE :" + index);
    console.log("DELETE FROM SERVICE :" + sessionitem);
  }
  getSession(id: number) {
    return SESSIONITEMS[id - 1];
  }
}
