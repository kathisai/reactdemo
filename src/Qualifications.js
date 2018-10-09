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
    <div className="ui two column doubling stackable grid container">
    <div className="three wide column"><span className="qualsectionheader card-text">Rank</span></div>
    <div className="thirteen wide column">
    <select id="RankSelect3" className="ui fluid dropdown qualrankselect" onchange="ChangeQualification.call(this,this.options[this.selectedIndex].value,'3','Home');">
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


<div class="card-body">
    <div className="ui two column doubling stackable grid container">
    <div className="three wide column"><span className="qualsectionheader">Period</span></div>
    <div className="thirteen wide column">
    <select className="ui fluid dropdown qualperiodselect" onChange="ChangeQualificationPeriod.call(this,'index.cfm?Fuseaction=evo_Modules.Qualifications','3','Module_Qualifications',this.options[this.selectedIndex].value,'Home');">
    <option value="201403" selected="">03/2014</option>
    <option value="201402">02/2014</option>
    <option value="201401">01/2014</option>
    </select>
    </div>
    </div>
    </div>




    
    </div>
            </div>
        );
    }
}