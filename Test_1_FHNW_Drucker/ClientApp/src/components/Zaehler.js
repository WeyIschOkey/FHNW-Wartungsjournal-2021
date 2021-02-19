
import React, { Component } from 'react';
import './Zaehler.css';

        
export class Zaehler extends Component {
    static displayName = Zaehler.name;

    //Dieser Block enthält die Tabellen auf diser Seite
    //Unten sind noch Button zum Speichern, und um zu "Wartung" zu kommen
    // falsches charset in verwendung keine ä werden dargestellt

    render() {
        return (
            <html class="container1">
                <div class="container">
                    <div>
                        <h1>Zähler</h1>
                        <div class="item item1">
                            <table>
                                <tr>
                                    <th>Ablesedatum</th>
                                    <td> </td>
                                </tr>
                                <br></br>
                                <tr class="right">
                                    <th>Inbetriebnahmen</th>
                                    <th>hat Kommentar</th>
                                </tr>
                                <tr id="right1">
                                    <td>Daten Inbetriebnahme</td>
                                    <td>Daten Kommentar</td>
                                </tr>
                                <tr>
                                    <th>Nickname</th>
                                    <th>MaschSerienNr</th>
                                    <th>Maschinentyp</th>
                                    <th>Masch-Status</th>
                                </tr>
                                <tr>
                                    <td><select name="Nickname"><option value="Alpha">Alpha</option><option value="Beta">Beta</option><option value="Gamma">Gamma</option><option value="Delta">Delta</option></select></td>
                                    <td>Daten MaschSerienNr</td>
                                    <td>Daten Maschinentyp</td>
                                    <td><select name="BGStatus"><option value="aktiviert">aktiviert</option><option value="deaktiviert">deaktiviert</option></select></td>
                                </tr>
                            </table>
                        </div>
                        <br></br>
                        <div class="item item2">
                            <div class="row">

                                <div class="column">
                                    <table class="item2">
                                        <tr>
                                            <th>Baugruppe</th>
                                            <th>Laufzeit h</th>
                                            <th>Druckzeit h</th>
                                            <th>Materialverbrauch,m</th>
                                            <th>BG-Status</th>
                                            <th>Serienummer</th>
                                        </tr>
                                        <tr id="rightBG1">
                                            <td>Daten Kommentar</td>
                                        </tr>
                                        <tr>
                                            <th>Druckkopf 1</th>
                                            <td><input maxLength="5" /></td>
                                            <td><input maxLength="5" /></td>
                                            <td><input maxLength="5" /></td>
                                            <th><select name="BGStatus"><option value="aktiviert">aktiviert</option><option value="deaktiviert">deaktiviert</option></select></th>
                                            <td>Serienummer 1</td>
                                        </tr>
                                        <tr id="rightBG2">
                                            <td>Daten Kommentar</td>
                                        </tr>
                                        <tr>
                                            <th>Druckkopf 2</th>
                                            <td><input maxLength="5" /></td>
                                            <td><input maxLength="5" /></td>
                                            <td><input maxLength="5" /></td>
                                            <th><select name="BGStatus"><option value="aktiviert">aktiviert</option><option value="deaktiviert">deaktiviert</option></select></th>
                                            <td>Serienummer 2</td>
                                        </tr>
                                        <tr id="rightBG3">
                                            <td>Daten Kommentar</td>
                                        </tr>
                                        <tr>
                                            <th>Druckkopf 3</th>
                                            <td><input maxLength="5" /></td>
                                            <td><input maxLength="5" /></td>
                                            <td><input maxLength="5" /></td>
                                            <th><select name="BGStatus"><option value="aktiviert">aktiviert</option><option value="deaktiviert">deaktiviert</option></select></th>
                                            <td>Serienummer 3</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form action='' class="rightbtn_save">
                    <button type="submit" className="btn btn-Save">Speichern</button>
                </form>

                <form action='/Wartung' class="rightbtn_wartung">
                    <button type="submit" className="btn btn-Wartung">Wartung</button>
                </form>
                
            </html>
        );
    }
}
                