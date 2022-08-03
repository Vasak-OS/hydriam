import CategoryPill from "./abstract/CategoryPill.js";

export default {
    props: {
        menuData: Object
    },
    template: `
        <div class="col-12">
            <div class="tab-content" id="menu-content">
                <template v-for="(value, key) in menuData">
                    
                </template>
            </div>
            <ul class="nav nav-pills nav-justified" id="menu-category" role="tablist">
                <template v-for="(value, key) in menuData">
                    <CategoryPill :name="key" :image="value.icon" />
                </template>
            </ul>
        </div>
    `,
    components:{
        CategoryPill
    }
}