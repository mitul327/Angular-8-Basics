import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnChanges {
  @Input() simpleInput: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    for (const propertyName in changes) {
      const change = changes[propertyName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);
      /* console.log(
        propertyName +
          ": currentValue = " +
          current +
          ", previousValue = " +
          previous
      ); */
      // The above line can be rewritten using
      // placeholder syntax as shown below
      // console.log(`${propertyName}: currentValue
      // = ${current }, previousValue = ${previous }`);
    }
  }
}
