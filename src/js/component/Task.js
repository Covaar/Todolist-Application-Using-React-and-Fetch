import React from "react";
import PropTypes from "prop-types";


function Task(props) {
	const taskDeleted = key => {
		const newTask = props.list.filter(newlist => {
			return newlist.label != key; 
		});
		props.setList(newTask);
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/covaar",
			{
				method: "PUT",
				body: JSON.stringify(newTask), 
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(resp => {
				return resp.json();
			})
			.then(data => { 
			})
			.catch(error => {
			 });
	};

	return (
		<div >
			{props?.list.map((newlist, index) => {
				if (newlist.label != "") {
					return (
						<div key={index} className="item-list">
							<p className="task">{newlist.label}</p>
							<button
								className="btn-delete"
								onClick={() => taskDeleted(newlist.label)}> Delete 
							</button>
						</div>
					);
				}
			})}
		</div>
	);
}

export default Task;