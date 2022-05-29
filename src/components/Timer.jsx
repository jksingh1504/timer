import React from "react";

const Timer = () => {
	const [strt, setStart] = React.useState(0);
	const [end, setEnd] = React.useState(10);
	const [value, setValue] = React.useState("");
	const [timerid, setTimerid] = React.useState(null);

	const stopTimer = (id) => {
		clearInterval(id);
		setTimerid(null);
	};

	const start = () => {
		if (!timerid) {
			console.log("hello");
			const id = setInterval(() => {
				// console.log(strt, end);
				if (strt < end)
					setStart((strt) => {
						if (strt < end) return strt + 1;
						stopTimer(id);
						return strt;
					});
				else stopTimer(id);
			}, 1000);
			setTimerid(id);
		}
	};

	const pause = () => {
		clearInterval(timerid);
		setTimerid(null);
	};

	const reset = () => {
		setStart(value);
		// clearInterval(timerid);
		// setTimerid(null);
	};

	return (
		<div>
			<br />
			<br />
			<input
				type="number"
				value={value}
				placeholder="enter initial time"
				onChange={(e) => setValue(Number(e.target.value))}
			/>
			<input
				type="number"
				placeholder="enter time to end timer"
				onChange={(e) => setEnd(Number(e.target.value))}
			/>
			<button onClick={() => setStart(value)}>Set Limits</button>
			<h1>Stopwatch</h1>
			<h1>{strt}</h1>
			<div>
				<button onClick={start}>start</button>
				<button onClick={pause}>pause</button>
				<button onClick={reset}>reset</button>
			</div>
		</div>
	);
};

export default Timer;
