import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import {  useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

function Results() {

	const location = useLocation()
	const { code, weight } = location.state

	console.log('codigo r: ', code, 'weight r: ', weight);
	const [customer, setCustomer] = useState('')

	const fecha= new Date();
	const dateControl = fecha.getFullYear()+'-'+fecha.getMonth()+1+'-'+fecha.getDate();
	const urlCrudHistory = 'https://besport.herokuapp.com/history/';
	const updateCustomer =  (customer) => {
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
			console.log('eeey',error);
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

	const getDataBmi =  async (id) => {
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
	}, [code,dateControl,weight])

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
					<p>ced: {customer.bmi}</p>

					<TextField id="standard-basic" label="Standard" />

				</Grid>
			</Container>
		</React.Fragment>
	);
}

export default Results;