
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Component } from 'react'

export default class about extends Component {
    constructor(props)
    {
        super(props)
      this.state={
        title:"Infos",
        contact:{name:"rhezzoune oumaima",mail:"ouma.rhezzoune@gmail.com",profile:'images/ouma.png'},
        skills:[
            {id:1,skill:"software engineer"},
            {id:2,skill:"Front end"},
            {id:3,skill:"Back end"},
        ]
      }
    }
  render() {
    return (
      <div>
        <div className='card'>
<div className='card-header'><strong><label>{this.state.title}</label></strong></div>

         <div className='row p-2'>
            <div className='col col-auto'>
                <img width={100} alt="profile" src={this.state.contact.profile}/>
            </div>
            <div className='col'>
                <ul className='list-group'>
                    <li className='list-group-item'>{this.state.contact.name}</li>
                    <li className='list-group-item'>{this.state.contact.mail}</li>
            </ul>        
                </div>
         </div>
        </div>

        <div className='card m-2'>
<div className='card-header'>Skills</div>
<div className='card-body'>
<table className='table'>
    <tr>
        <th>ID</th> <th>Skill</th>
    </tr>
    {
        this.state.skills.map((skill,index)=>
        <tr>
        <td>{skill.id}</td> <td>{skill.skill}</td>
    </tr>
        )
    }
   
</table>

</div>
</div>
      </div>
    )
  }
}
