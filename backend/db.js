const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://PLANit:jafar123@clusterplanit.yqlwal3.mongodb.net/PLANitMERN?retryWrites=true&w=majority'

const mongoDB = async () => {
    await mongoose.connect(dbURI, async (err, result) => {
        if (err) console.log("error Somethings WRONG", err)
        else {
            console.log(" YESSSSSSSSSSSSSS! connected");
            const Edata = await mongoose.connection.db.collection("Eitems");
            Edata.find({}).toArray(function (err, data) {
                if (err) console.log(err);
                else {
                    global.Eitems = data;
                }
            })
            const Ecategory = await mongoose.connection.db.collection("Ecat");
            Ecategory.find({}).toArray(function (err, catdata) {
                if (err) console.log(err);
                else {
                    global.eventcat = catdata;
                    // console.log(eventcat);
                }
            })

            const Eprod = await mongoose.connection.db.collection("Eproduct");
            Eprod.find({}).toArray(function (err, productdata) {
                if (err) console.log(err);
                else {
                    global.Eproduct = productdata;
                    // console.log(global.Eproduct);
                }
            })

        }
    });

}

mongoose.set('strictQuery', true);
module.exports = mongoDB;