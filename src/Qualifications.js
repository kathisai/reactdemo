import React, {Component} from 'react'
import './Qualifications.css';

export default class Qualifications extends Component {
    constructor(props){
        super(props);

    }



    render(){
        return(
            <div>
    <div id="evocard" className="card border-primary mb-3" >
    <div id="cardheader" className="card-header">
    <span className="bold">Qualifications - </span>Period 03/2014
    </div>
    
    <div className="card-body">
    <div id="row_rank" className="row">
    <div id="column_rank_title" className="column"><span className="qualsectionheader card-text">Rank</span></div>
    <div id="column_rank_content" className="column" >
    <select id="RankSelect3" className="form-control" onchange="ChangeQualification.call(this,this.options[this.selectedIndex].value,'3','Home');">
    <option value="1" selected="">Sapphire</option>
    <option value="2">Crystal</option>
    <option value="3">Quartz</option>
    <option value="4">Coral</option>
    <option value="5">Opal</option>
    <option value="6">Topaz</option>
    <option value="7">Lapis</option>
    <option value="8">Ruby</option>
    <option value="9">Pearl</option>
    <option value="10">Emerald</option>
    <option value="11">Diamond</option>
    <option value="12">Double Diamond</option>
    <option value="13">Crown Diamond</option>
    </select>
    </div>
    </div>
    </div>


<div class="card-body row">
    <div className="three wide column"><span className="qualsectionheader">Period</span></div>
    <div className="thirteen wide column">
    <select className="form-control" onChange="ChangeQualificationPeriod.call(this,'index.cfm?Fuseaction=evo_Modules.Qualifications','3','Module_Qualifications',this.options[this.selectedIndex].value,'Home');">
    <option value="201403" selected="">03/2014</option>
    <option value="201402">02/2014</option>
    <option value="201401">01/2014</option>
    </select>
    </div>
   
    </div>




    
    </div>
            </div>
        );
    }
}