import "../pocetna.css";
import { useState,useEffect } from "react";

const SviTurniri = ({ }) => {
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    function nadji() {
        var unos, filter, table, tr, td, i, txtValue;
        unos = document.getElementById("ulaz");
        filter = unos.value.toUpperCase();
        table = document.getElementById("tabela");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } var bi=23;
    let bi1=34;
    let bi2=39;
    let bi3=57;
    let bi4=5;

    function dodaj(e){
        bi=[++bi]
        console.log(bi);
        
    }
    console.log(bi);

    function sortiraj() {
        console.log("Pozvana");
        var table, rows, s, i, a, b, shouldS;
        table = document.getElementById("tabela");
        s = true;

        while (s) {
            s = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldS = false;
                a = rows[i].getElementsByTagName("td")[4];
                b = rows[i + 1].getElementsByTagName("td")[4];
                if (a.innerHTML.toLowerCase() > b.innerHTML.toLowerCase()) {
                    shouldS = true;
                    break;
                }
            }
            if (shouldS) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                s = true;
            }
        }
    }

    {/*let [bi, setBi]=useState({
        bi:0
    });
    useEffect(()=>{++bi});
    let [bi1, setBi1]=useState({
        bi:16
    });useEffect(()=>{++bi});
    let [bi2, setBi2]=useState({
        bi:56
    });useEffect(()=>{++bi});
    let [bi3, setBi3]=useState({
        bi:205
    });useEffect(()=>{++bi});
    let [bi4, setBi4]=useState({
        bi:0
    });useEffect(()=>{++bi}); */}
    return (
   <>
        <h1>Predstojeci turniri</h1>
    <br></br>
    <br></br>
<input type="text" id="ulaz" onKeyUp={nadji} placeholder="Pretraži turnire po nazivu" ></input>
<br>
</br>
<br></br><br></br><br></br>
<button onClick={sortiraj}>Sortiraj turnire po broju igraca</button>
<div className="tabelarez" >
<table id="tabela" class="tabela" border="3">
    <thead className ="zaglavlje">
    <tr className="k" >
        <th className="kolona">Naziv</th>
        <th className="kolona"  >Mesto</th>    
        <th className="kolona"  >Tip</th>
        <th className="kolona"  >Tempo</th>
        <th className="kolona"  >Broj prijavljenih korisnika</th>
        <th className="kolona"  >Prijavi se</th>
        
    </tr>
    </thead>
    <tbody>
            
                <tr className="r">
                    <td className="red">Evropsko prvenstvo</td>
                    <td className="red">Novosadski sajam</td>
                    <td className="red">rejtingovan</td>
                    <td className="red">2h+30min</td>
                    <td className="red">{bi}</td>
                    
                    <td >
                        <label class="oznaci">
                        <button name="cekiranje" onClick={dodaj}></button>
                                    <span class="checkmark"></span>
                                    
                        </label>
                    </td>

                </tr>
                   
                <tr className="rr">
                    <td className="red">Kategorni za MK</td>
                    <td className="red">SK Vidikovac</td>
                    <td className="red">kategorni</td>
                    <td className="red">90min</td>
                    <td className="red">{bi1}</td>
                    
                    <td >
                        <label class="oznaci">
                        <input type="radio" name="cekiranje"></input>
                                    <span class="checkmark"></span>
                        </label>
                    </td>

                </tr>
                <tr className="r">
                    <td className="red">Letnji Open</td>
                    <td className="red">Restoran Balasevic</td>
                    <td className="red">rejtingovan</td>
                    <td className="red">2h</td>
                    <td className="red">{bi2}</td>
                    
                    <td >
                        <label class="oznaci">
                        <input type="radio" name="cekiranje"></input>
                                    <span class="checkmark"></span>
                        </label>
                    </td>

                </tr>
                <tr className="rr">
                    <td className="red">Atomac</td>
                    <td className="red">SK Kralj</td>
                    <td className="red">nerejtingovan</td>
                    <td className="red">5min</td>
                    <td className="red">{bi3}</td>
                    
                    <td >
                        <label class="oznaci">
                        <input type="radio" name="cekiranje"></input>
                                    <span class="checkmark"></span>
                        </label>
                    </td>

                </tr>
                <tr className="r">
                    <td className="red">Memorijalni turnir Glila</td>
                    <td className="red">Batajnica</td>
                    <td className="red">nerejtingovan</td>
                    <td className="red">20min</td>
                    <td className="red">{bi4}</td>
                    
                    <td >
                        <label class="oznaci">
                        <input type="radio" name="cekiranje"></input>
                                    <span class="checkmark"></span>
                        </label>
                    </td>

                </tr>
                <tr className="rr">
                    <td className="red">Omladinsko prvenstvo</td>
                    <td className="red">Matematicka gimnazija</td>
                    <td className="red">nerejtingovan</td>
                    <td className="red">1h+30min</td>
                    <td className="red">65</td>
                    
                    <td >
                        <label class="oznaci">
                        <input type="radio" name="cekiranje"></input>
                                    <span class="checkmark"></span>
                        </label>
                    </td>

                </tr>
                <tr className="r">
                    <td className="red">Cuger </td>
                    <td className="red">hotel Slavija</td>
                    <td className="red">rejtingovan</td>
                    <td className="red">5min</td>
                    <td className="red">23</td>
                    
                    <td >
                        <label class="oznaci">
                        <input type="radio" name="cekiranje"></input>
                                    <span class="checkmark"></span>
                        </label>
                    </td>

                </tr>
                
            </tbody>
    </table>

</div>

</>
    )
}
export default SviTurniri