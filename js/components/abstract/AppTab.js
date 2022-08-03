export default {
    props: {
        category: String,
        data: Object
    },
    computed: {
        catName() {
            return this.category.replaceAll(" ", "-").toLowerCase();
        },
        isActive() {
            return this.catName === 'accessories'
        },
    },
    template: `
    <div class="tab-pane fade" :class="{active:isActive, show:isActive}" :id="catName" role="tabpanel" :aria-labelledby="catName + '-tab'">
        <div class="container-fluid">
          <div class="row">
            {{catName}} {{data}}
          </div>
        </div>
    </div>
    `
}