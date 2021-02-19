import React, { Component } from 'react';
import { Collapse, Container, button} from 'reactstrap';
import './MaschinenVerwaltung.css';

export class MaschinenVerwaltung extends Component {
    static displayName = MaschinenVerwaltung.name;

    // Button funktion für neue tabellen zeile 
    incrementCounter() {
        // Find a <table> element with id="myTable":
        var table = document.getElementById("BG");

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(2);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        // Add some text to the new cells:
        cell1.innerHTML = "NEW CELL1";
        cell2.innerHTML = "NEW CELL2";
        cell3.innerHTML = "New cell3";
        cell4.innerHTML = "New cell3";
        cell5.innerHTML = "New cell3";
    }

    //tabellen zum reinschreiben 
    // button für weitere Zeilen 

    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-16" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
                <div>
                    <h1>Verwaltung</h1>
                    <div class="container">
                        <div class="item item3">

                            <button id="modal-btn">+Maschine</button>
                            <div class="modal">
                                <div class="modal-header">
                                    <span class="close-btn">&times;</span>
                                    <h1>I am the Header</h1>
                                </div>
                                <div class="modal-content">
                                    <p>this is the text inside the modal</p>
                                </div>
                                <div class="modal-footer">
                                    <h2>I am the Footer</h2>
                                </div>
                            </div>
                            <table>
                                <tr>
                                    <th>MaschinenSerienNr</th>
                                    <th>Nickname</th>
                                    <th>Gerätekategorie</th>
                                    <th>Maschinentyp</th>
                                    <th>Hersteller</th>
                                    <th>Inbetriebnahme</th>
                                    <th>Nutzungsende</th>
                                </tr>
                                <tr>
                                    <td><input maxLength="25" id="seriennr" /></td>
                                    <td><input maxLength="25" /></td>
                                    <td><input maxLength="25" /></td>
                                    <td><input maxLength="25" /></td>
                                    <td><input maxLength="25" /></td>
                                    <td><input maxLength="25" /></td>
                                    <td><input maxLength="25" /></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Garantieablauf</th>
                                    <th></th>
                                    <th>EK-Preis</th>
                                    <th>Lieferant</th>
                                    <th>gepl. Betriebsstd.</th>
                                    <th>hat Kommentar</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><input maxLength="25" /></td>
                                    <td></td>
                                    <td><input maxLength="25" /></td>
                                    <td><input maxLength="25" /></td>
                                    <td><input maxLength="25" /></td>
                                    <td><input maxLength="250" /></td>
                                </tr>
                            </table>
                        </div>
                        <div class="item item4">
                            <table id="BG">
                                <tr>
                                    <th>BGSerienNr</th>
                                    <th>BGBez</th>
                                    <th>Zählername 1</th>
                                    <th>Zählername 2</th>
                                    <th>Zählername 3</th>
                                </tr>
                                <tr>
                                    <td><input maxLength="25" /></td>
                                    <td><select name="BGBez"><option value="Druckkopf_1">Druckkopf 1</option><option value="Druckkopf_2">Druckkopf 2</option><option value="Laserlampe">Laserlampe</option><option value="neu">Neu</option></select></td>
                                    <td><select name="Zählername"><option value="Laufzeit_h">Laufzeit h</option><option value="Druckzeit_h">Druckzeit h</option><option value="Materialverbrauch_m">Materialverbrauch m</option><option value="Brenndauer_h">Brenndauer h</option></select></td>
                                    <td><select name="Zählername"><option value="Laufzeit_h">Laufzeit h</option><option value="Druckzeit_h">Druckzeit h</option><option value="Materialverbrauch_m">Materialverbrauch m</option><option value="Brenndauer_h">Brenndauer h</option></select></td>
                                    <td><select name="Zählername"><option value="Laufzeit_h">Laufzeit h</option><option value="Druckzeit_h">Druckzeit h</option><option value="Materialverbrauch_m">Materialverbrauch m</option><option value="Brenndauer_h">Brenndauer h</option></select></td>
                                </tr>
                            </table>
                        </div>
                        <div class="item item5">
                            <button className="btn btn-primary" onClick={this.incrementCounter}>+BG</button>
                        </div>
                    </div>
                </div>
            </html>
        );
    }
}