import "../pocetna.css";

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
    }
    return (
<>
        <h1>Predstojeci turniri</h1>
    <br></br>
    <br></br>
<input type="text" id="ulaz" onKeyUp={nadji} placeholder="Pretraži turnire po nazivu" ></input>
<br>
</br>

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
                    <td className="red">153</td>
                    
                    <td >
                        <label class="oznaci">
                        <input type="radio" name="cekiranje"></input>
                                    <span class="checkmark"></span>
                        </label>
                    </td>

                </tr>
                   
                <tr className="rr">
                    <td className="red">Kategorni za MK</td>
                    <td className="red">SK Vidikovac</td>
                    <td className="red">kategorni</td>
                    <td className="red">90min</td>
                    <td className="red">20</td>
                    
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
                    <td className="red">78</td>
                    
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
                    <td className="red">18</td>
                    
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
                    <td className="red">21</td>
                    
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