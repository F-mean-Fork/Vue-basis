const App = {
    data() {                                                // Метод                 
        return{                                             // Объект   
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',                        // Ключ
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue=''
            }
        },

        toUpperCase(item){
            return item.toUpperCase()
        },
        removeNote(i) {
            this.notes.splice(i, 1)    
        }       
    },

    computed: {                                        //Оптимизация вызова вычислительных свойств
        doubleCountcomputed() {
            return this.notes.length * 2
        },
    },

    watch: {                                          //Позволяет следить за изменением данных | http запросов
        inputValue(value){
            if (value.length > 10) {
                this.inputValue = ''
            }             
        }
    }
}


Vue.createApp(App).mount('#app')

