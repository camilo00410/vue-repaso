const app = new Vue({
    el: '#app',
    data: {
       saludo: 'soy ciclo de vida de vue'
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        // Al crear los metodos, observadores y eventos, pero aun no acced al DOM. 
        // Aun no se puede accer a 'el
        console.log('created');
    },
    beforeMount(){
        // Se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted(){
        // Se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdate(){
        // Al detectar un cambio
        console.log('beforeUpdate');
    },
    updated(){
        // Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy(){
        // Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed(){
        // Se destruye toda la instancia
        console.log('destroyed');
    },

    methods: {
        destruir(){
            this.$destroy();
        }
    }
    
});