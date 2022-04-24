Vue.component('error-comp', {
    template: `
                <h3 v-if="$root.error">Произошла ошибка</h3>
              `
});