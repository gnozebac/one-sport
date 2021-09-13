import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import DietView from '../components/DietView'
import { useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';


import SendIcon from '@material-ui/icons/Send';
import Accessibility from '@material-ui/icons/Accessibility';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import AccountBox from '@material-ui/icons/AccountBox';
import Timeline from '@material-ui/icons/Timeline';

function Results() {

	const location = useLocation()
	const { code, weight } = location.state

	console.log('codigo r: ', code, 'weight r: ', weight);
	const [customer, setCustomer] = useState('')

	const fecha = new Date();
	const dateControl = fecha.getFullYear() + '-' + fecha.getMonth() + 1 + '-' + fecha.getDate();
	const urlCrudHistory = 'https://besport.herokuapp.com/history/';
	const updateCustomer = (customer) => {
		console.log(customer);
		try {
			fetch('https://besport.herokuapp.com/customers/', {
				method: 'PATCH',
				body: JSON.stringify(customer),
				headers: {
					'Content-type': 'application/json'
				}
			});
		} catch (error) {
			console.log('eeey', error);
		}
	}

	const addHistory = async (weightHistory) => {
		const resp = await fetch(urlCrudHistory, {
			method: 'POST',
			body: JSON.stringify(weightHistory),
			headers: {
				'Content-type': 'application/json'
			}
		});
		return await resp.json();
	}

	const getDataBmi = async (id) => {
		const response = await fetch(`https://besport.herokuapp.com/customers/${id}/bmi`);
		const data = await response.json();
		setCustomer(data);
		return data;
	}

	useEffect(() => {
		const customerUpdated = {
			id: code,
			weight: 66,
			bmi: 33,
			dietId: 1,
			workoutId: 1
		};
		updateCustomer(customerUpdated);
		const customerWeightHistory = {
			dateControl: dateControl,
			weight: weight,
			bmi: 33,
			customerId: code
		};
		addHistory(customerWeightHistory);
		getDataBmi(code);
	}, [code, dateControl, weight])

	return (
		<React.Fragment>
			<Navbar />
			<Container component="main" maxWidth="xs">
				<Grid
					container
					direction="column"
					justifyContent="flex-start"
					alignItems="flex-start"
				>
				</Grid>
				<List>
					<ListItem>
						<ListItemIcon>
							<AccountBox />
						</ListItemIcon>
						<ListItemText>
							Usuario:	{customer.systemId}
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<ArrowForwardIos />
						</ListItemIcon>
						<ListItemText>
							Sobrepeso
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Accessibility />
						</ListItemIcon>
						<ListItemText>
							Talla: {customer.height}
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<SendIcon />
						</ListItemIcon>
						<ListItemText>
							Peso: {customer.weight}
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<SendIcon />
						</ListItemIcon>
						<ListItemText>
							Masa corporal: {customer.bmi}
						</ListItemText>
					</ListItem>
					<ListItem>					
					</ListItem>
					<ListItem button >
						<ListItemIcon>
							<FitnessCenter />
						</ListItemIcon>
						<ListItemText>
							Abrir rutinas
						</ListItemText>
					</ListItem>		
					<Link to="/search">		
					<ListItem button >
						<ListItemIcon>
							<Timeline />
						</ListItemIcon>
						<ListItemText>
							Abrir Historial
						</ListItemText>
					</ListItem>
					</Link>
				</List>
						<DietView dietNumber="1"></DietView>
			</Container>
		</React.Fragment>
	);
}

export default Results;