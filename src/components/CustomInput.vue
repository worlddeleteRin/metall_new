<template>
	<div>
		<input
			@input="inputChange"
			placeholder="product name"
		/>
	</div>
</template>

<script>

export default {
	// name: "FormInput",
	setup(props, context) {
		// eslint-disable-next-line no-unused-vars
		const inputChange = (event) => {
			context.emit("inputChange", event.target.value);
		}
		return {
			inputChange
		}
	}
}

</script>
