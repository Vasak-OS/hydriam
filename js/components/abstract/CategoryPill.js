export default {
    props: {
        catName: String,
        image: String
    },
    calculate: {
        name() {
            return this.catName.replaceAll(" ", "-").toLowerCase();
        },
        isActive() {
            return this.name === 'accessories'
        }
    },
    template: `
    <li class="nav-item" role="presentation">
        <button class="nav-link active" :class="{active:isActive}" data-bs-toggle="tab" role="tab" aria-selected="true" :data-bs-target="'#' + name" :id="name + '-tab'">
            <img :src="'file://' + image" data-bs-toggle="tooltip" data-bs-placement="left" :title="name" class="img-fluid category-img" />
        </button>
    </li>
    `
}