var user = {
    name: '',
    email: '',
    password: '',
    gender: {id: 'male'},
    package: {id: 'silver'},
    services: [{id: 'configure'}],
    notes: '',
    agree: false
};

var packages = [
    {id:'gold', label: 'Gold'},
    {id:'silver', label: 'Silver'},
    {id: 'bronze', label: 'Bronze'},
    {id: 'basic', label: 'Basic'}
];

var genders = [
    {id: 'male', label: 'Male'}, 
    {id: 'female', label: 'Female'}
];

var services = [
    {id:'install', label: 'Installation'},
    {id:'configure', label: 'Configuration of modem'},
    {id: 'testing', label: 'Speed test'},
    {id: 'cleanup', label: 'Loose wire removal'}
];

var permissions = [
    'manage_pages',
    'chat',
    'manage_users',
    'manage_posts'
]