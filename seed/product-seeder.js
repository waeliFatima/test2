var Product=require('../models/product');

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/shopping',{ useNewUrlParser: true });

var products=[
    new Product({
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCU8m39jaOXky5PT6tA_qA0N6tGirMfFeAPzzeb9Qh9vO26MUy',
    title: 'XX Book',
    description:'Auwsome Book !!',
    price: 10

}),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQAbnU9JViZQlk8kwmtNAARn7SmZs9JYE9JC1XepZmCw8AzYs',
        title: 'TFFNAY MUNRA',
        description:'REPEAT',
        price: 30

    }),    new Product({
        imagePath: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2015/09/Chip-Kidds-The-Learners-Book-Cover.png?auto=format&q=60&fit=max&w=930',
        title: 'CHIP',
        description:'KIDD',
        price: 25

    }),    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5oVyFx-74LkrBU07bpE3Z5OSXSWTi9_VWtSynt7pSSqCC3jy',
        title: 'ARTEMID',
        description:'EONI COLFFRs',
        price: 31

    }),    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tb4n7YBCS0wZE6JxtJi6v9N8KmWkNvdj6h2lJfx2UtIHuvAG',
        title: 'VINCE FLYNN',
        description:'WAR',
        price: 20

    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqE3nCawEu48EvKV192co4YsunMPYTLHoNimQFPxokACdb8zAU',
        title: 'DOLIRRl',
        description:'Auwsome LIfe!!',
        price: 54

    }),
];

var done=0;
for (var i=0;i<products.length;i++){
    products[i].save(function (err,result) {
        done++;
        if(done=== products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
