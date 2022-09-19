export default {
	props: {
		filter: String
	},
	template: `
        <div class="col-12" id="searc-div">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" id="search"
                    v-model="filter" aria-describedby="icon-search" @input="$emit('update:filter', $event.target.value)" />
                <span class="input-group-text" id="icon-search">🔍</span>
            </div>
        </div>
    `
};