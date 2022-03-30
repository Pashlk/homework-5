const me = {
    name: 'Павел',
    lastName: 'Либик',
    dateOfBirth: '29.05.2006',
    reason: 'Интересное, перспективное направление',
    logName() {
        console.log('Имя: ', this.name);
    },
    logLastName() {
        console.log('Фамилия: ', this.lastName);
    },
    logDateOfBirth() {
        console.log('Дата рождения: ', this.dateOfBirth);
    },
    logReason() {
        console.log('Причина изучения JavaScript: ', this.reason);
    },
    logDream(dream) {
        console.log(this.name, ' мечтает о ', dream);
    },
    logFullInformation() {
        this.logName();
        this.logLastName();
        this.logDateOfBirth();
        this.logReason();
        this.logDream('Ford F-150 Raptor');
    },
};
me.logFullInformation();