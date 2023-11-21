const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: []
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    this.mails.push(resp.data.response);
                    console.log(this.mails);
                });
        }
    },
    methods: {

    }
}).mount('#app');