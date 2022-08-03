import AppButton from "./AppButton.js";

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
            <template v-for="app in data.apps">
                <AppButton :app="app" />
            <template>
          </div>
        </div>
    </div>
    `,
    components: {
        AppButton
    }
}