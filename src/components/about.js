
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Component } from 'react'

export default class about extends Component {
    constructor(props)
    {
        super(props)
      this.state={
        skillValue:"",
        title:"Infos",
        contact:{name:"rhezzoune oumaima",mail:"ouma.rhezzoune@gmail.com",profile:'images/ouma.png'},
        skills:[
            {id:1,skill:"software engineer"},
            {id:2,skill:"Front end"},
            {id:3,skill:"Back end"},
        ]
      }
    }
    setSkill=(event)=>{
        this.setState({
            skillValue:event.target.value
        })

    }
    addSkill=(event)=>{
        event.preventDefault();//for not refresh the browser after onsubmit
        let skill={
            id:[...this.state.skills].pop().id+1,
            skill:this.state.skillValue
        }
        this.setState({
            skills:[...this.state.skills,skill]
        })
    }
    onDelete=(skill)=>{
        let index=this.state.skills.indexOf(skill)
        let listSkills=[...this.state.skills]
        listSkills.splice(index,1)
        this.setState({
            skills:listSkills
        })
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
<div className='card-header'>Skills : {this.state.skillValue}</div>
<div className='card-body'>
    <form onSubmit={this.addSkill}>
        <div className='row'>
            <div className='col'>
                <input type="text" name='skill' value={this.state.skillValue} onChange={this.setSkill} placeholder='new skill'/>
            </div>
            <div className='col col-auto'>
                <button className='btn btn-primary' type='submit'>ADD</button>
            </div>
        </div>

    </form>
<table className='table'>
    <tr>
        <th>ID</th> <th>Skill</th>
    </tr>
    {
        this.state.skills.map((skill,index)=>
        <tr>
        <td>{skill.id}</td> <td>{skill.skill}</td> 
        <td>      
            <button className='btn btn-danger' onClick={()=>this.onDelete(skill)}>X</button>
</td>
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
