import { Component, OnInit } from '@angular/core';
import { Complex } from 'src/interfaces/complex';
import { FormControl } from '@angular/forms';
// import { TestServiceData } from 'src/app/services/static-test-data';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Room } from 'src/interfaces/room';
import { TestComplexData } from '../services/test-complex-static';


@Component({
  selector: 'dev-manage-complex',
  templateUrl: './manage-complex.component.html',
  styleUrls: ['./manage-complex.component.scss']
})

// Component used to handle logic behind selecting and managing a complex
export class ManageComplexComponent implements OnInit {

    public seededComplexes: Complex[] = [
        TestComplexData.dummyComplex
    ];

    // mode selection =>
    // 'init' for initial loading,
    // 'details' for after provider is selected,
    // 'add-room' for adding room,
    // 'edit-room' for editing rooms,
    // 'edit-complex for editing complex
    mode = 'init';

    // target Room =>
    // variable that holds room information for editing
    targetRoom: Room;

    // complex Control =>
    // form controller to hold the current selected complex
    complexControl = new FormControl('');

    constructor() { }

    ngOnInit() {

    }

    changeMode(reqMode: any) {
        console.log('mode =', reqMode);
        if ((typeof reqMode) === 'object') {
        this.mode = 'details';
        } else {
        this.mode = reqMode;
        }
    }

    changeTargetRoom(reqRoom: Room) {
        this.targetRoom = reqRoom;
    }

    addComplex(reqComplex: Complex) {
      reqComplex.providerId = '1';
      //TestComplexData.dummyProvider
      this.seededComplexes.push(reqComplex);
    }
}
