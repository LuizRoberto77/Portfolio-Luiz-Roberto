import React, { Component } from 'react';
import api from '../../services/api';
import "./styles.css";

export default class Repos extends Component{
	state = {
		repos:[],
	}

	componentDidMount(){
		this.loadRepos();
	}

	loadRepos = async () => {
		const response = await api.get(`/repos`);
		
		this.setState({ repos: response.data});
	};
	
	render(){
		return (
			<div className="repos-list">
            <h1>Projetos do GitHub</h1>
			{this.state.repos.map(repos => (
                <article key= {repos.node_id}>
                <h2>{repos.name}</h2>    
				<strong>{repos.language}</strong>
				<p>{repos.description}</p>
				<a href={repos.html_url}>Acessar</a>
				</article>
				))}
			</div>
		)
	}
}